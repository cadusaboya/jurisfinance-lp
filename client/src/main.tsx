import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { iniciarGoogleTag } from "./lib/analytics";
import { capturarAtribuicao } from "./lib/atribuicao";

// Antes do render: a origem da visita precisa ser gravada enquanto o gclid ainda
// está na URL, e o Consent Mode precisa ser declarado antes do primeiro hit.
capturarAtribuicao();
iniciarGoogleTag();

// No build de produção o #root já chega preenchido pelo scripts/prerender.mjs, e
// o React só assume o HTML existente. Em `vite dev` ele vem vazio.
const raiz = document.getElementById("root")!;
if (raiz.hasChildNodes()) {
  hydrateRoot(raiz, <App />);
} else {
  createRoot(raiz).render(<App />);
}
