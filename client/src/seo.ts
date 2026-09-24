/**
 * Metadados de busca por rota.
 *
 * Fonte única para duas coisas: o `scripts/prerender.mjs`, que grava título,
 * description, canonical e JSON-LD no HTML de cada rota durante o build, e o
 * `App`, que atualiza o `document.title` quando o wouter navega no cliente.
 *
 * Rota nova entra aqui — o prerender gera um HTML e uma regra de `_redirects`
 * por chave de `ROTAS` — e também no `client/public/sitemap.xml`.
 */

export const SITE_URL = "https://vincorapp.com.br";

export interface MetaDaRota {
  titulo: string;
  descricao: string;
}

export const ROTAS: Record<string, MetaDaRota> = {
  "/": {
    titulo: "Software de Gestão Financeira para Escritórios de Advocacia | Vincor",
    descricao:
      "Controle honorários, fluxo de caixa, comissões e conciliação bancária do seu escritório de advocacia. DRE e relatórios em PDF. Teste 7 dias, sem cartão.",
  },
  "/funcionalidades": {
    titulo: "Funcionalidades: Honorários, Comissões, DRE e Conciliação | Vincor",
    descricao:
      "Contas a pagar e receber, conciliação bancária, custódias, comissões em três níveis e DRE em PDF: os módulos do Vincor para escritórios de advocacia.",
  },
  "/privacidade": {
    titulo: "Política de Privacidade | Vincor",
    descricao:
      "Como o Vincor coleta, usa e protege os dados pessoais do seu escritório de advocacia, em conformidade com a LGPD.",
  },
  "/termos-de-uso": {
    titulo: "Termos de Uso | Vincor",
    descricao:
      "Termos e condições de uso do Vincor, software de gestão financeira para escritórios de advocacia.",
  },
};

export const META_404: MetaDaRota = {
  titulo: "Página não encontrada | Vincor",
  descricao: "A página que você procurou não existe no Vincor.",
};

export function metaDaRota(caminho: string): MetaDaRota {
  return ROTAS[caminho] ?? META_404;
}

const ORGANIZACAO = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organizacao`,
  name: "Vincor",
  legalName: "AES Solutions Ltda",
  taxID: "65.841.720/0001-25",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/vincor-blue.png`,
  email: "suporte@vincorapp.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tv. 14 de Abril, 1775 – São Brás",
    postalCode: "66063-475",
    addressLocality: "Belém",
    addressRegion: "PA",
    addressCountry: "BR",
  },
};

const SITE = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#site`,
  name: "Vincor",
  url: `${SITE_URL}/`,
  inLanguage: "pt-BR",
  publisher: { "@id": ORGANIZACAO["@id"] },
};

// Mesmos valores mensais exibidos na seção de planos da Home. Mudou o preço lá,
// muda aqui — o Google pode exibir esse valor no resultado de busca.
const PLANOS = [
  { nome: "Essencial", preco: "99.00" },
  { nome: "Profissional", preco: "197.00" },
  { nome: "Evolution", preco: "600.00" },
];

const APLICACAO = {
  "@type": "SoftwareApplication",
  name: "Vincor",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/`,
  description: ROTAS["/"].descricao,
  publisher: { "@id": ORGANIZACAO["@id"] },
  offers: PLANOS.map((p) => ({
    "@type": "Offer",
    name: `Plano ${p.nome} (mensal)`,
    price: p.preco,
    priceCurrency: "BRL",
  })),
};

/** JSON-LD da rota: organização e site em todas; o produto com preços só na home. */
export function dadosEstruturados(caminho: string): object {
  const grafo: object[] = [ORGANIZACAO, SITE];
  if (caminho === "/") grafo.push(APLICACAO);
  return { "@context": "https://schema.org", "@graph": grafo };
}
