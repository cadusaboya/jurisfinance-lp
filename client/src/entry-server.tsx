import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export { META_404, ROTAS, SITE_URL, dadosEstruturados } from "./seo";

/** Usado só pelo `scripts/prerender.mjs`, no build. */
export function render(caminho: string): string {
  return renderToString(
    <Router ssrPath={caminho} ssrSearch="">
      <App />
    </Router>
  );
}
