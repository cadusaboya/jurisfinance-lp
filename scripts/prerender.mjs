/**
 * Pré-renderiza a landing depois do `vite build`.
 *
 * Sem isto o Netlify servia o mesmo index.html vazio (`<div id="root"></div>`)
 * em toda URL: mesmo título, nenhum texto para crawlers que não executam JS
 * (Bing, bots de IA) e status 200 até para página inexistente.
 *
 * Para cada rota de `client/src/seo.ts` grava um HTML com o conteúdo já
 * renderizado, título, description, canonical e JSON-LD próprios; o
 * `main.tsx` hidrata esse HTML no navegador. Grava também um 404.html e
 * reescreve o `_redirects`, trocando o catch-all `/* /index.html 200` por
 * regras explícitas e um 404 de verdade.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const CLIENT = path.resolve(import.meta.dirname, "..", "client");
const DIST = path.join(CLIENT, "dist");
const DIST_SSR = path.join(CLIENT, "dist-ssr");

const { render, ROTAS, META_404, SITE_URL, dadosEstruturados } = await import(
  pathToFileURL(path.join(DIST_SSR, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const BLOCO_SEO = /<!-- seo:inicio[\s\S]*?<!-- seo:fim -->/;
const RAIZ_VAZIA = '<div id="root"></div>';

if (!BLOCO_SEO.test(template) || !template.includes(RAIZ_VAZIA)) {
  throw new Error("prerender: index.html sem o bloco seo:inicio/seo:fim ou sem o #root vazio");
}

const escapar = (texto) =>
  texto
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function montarHead({ titulo, descricao }, { url, indexar, jsonLd }) {
  const t = escapar(titulo);
  const d = escapar(descricao);
  const linhas = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
  ];
  if (indexar) {
    linhas.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:url" content="${url}" />`
    );
  } else {
    linhas.push('<meta name="robots" content="noindex" />');
  }
  if (jsonLd) {
    // `<` escapado para que nenhum texto feche o <script> antes da hora.
    const json = JSON.stringify(jsonLd).replaceAll("<", "\\u003c");
    linhas.push(`<script type="application/ld+json">${json}</script>`);
  }
  return linhas.join("\n    ");
}

function gerar(caminhoRender, meta, opcoes, arquivo) {
  const html = template
    .replace(BLOCO_SEO, () => montarHead(meta, opcoes))
    .replace(RAIZ_VAZIA, () => `<div id="root">${render(caminhoRender)}</div>`);
  fs.writeFileSync(path.join(DIST, arquivo), html);
  console.log(`prerender: ${caminhoRender.padEnd(18)} → ${arquivo}`);
}

const regras = [];

for (const [caminho, meta] of Object.entries(ROTAS)) {
  const url = caminho === "/" ? `${SITE_URL}/` : `${SITE_URL}${caminho}`;
  const arquivo = caminho === "/" ? "index.html" : `${caminho.slice(1)}.html`;
  gerar(caminho, meta, { url, indexar: true, jsonLd: dadosEstruturados(caminho) }, arquivo);
  if (caminho !== "/") regras.push(`${caminho}  /${arquivo}  200`);
}

gerar("/404", META_404, { indexar: false }, "404.html");

// Arquivos estáticos (robots.txt, sitemap.xml, imagens, assets) têm prioridade
// sobre estas regras no Netlify; só o que não existe cai no 404.
regras.push("/*  /404.html  404");
fs.writeFileSync(path.join(DIST, "_redirects"), `${regras.join("\n")}\n`);
console.log("prerender: _redirects reescrito");

fs.rmSync(DIST_SSR, { recursive: true, force: true });
