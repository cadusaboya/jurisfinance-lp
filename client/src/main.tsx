import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { iniciarGoogleTag } from "./lib/analytics";
import { capturarAtribuicao } from "./lib/atribuicao";

// Antes do render: a origem da visita precisa ser gravada enquanto o gclid ainda
// está na URL, e o Consent Mode precisa ser declarado antes do primeiro hit.
capturarAtribuicao();
iniciarGoogleTag();

createRoot(document.getElementById("root")!).render(<App />);
