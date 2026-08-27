import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useState } from "react";
import { Route, Switch } from "wouter";
import { CookieBanner } from "./components/CookieBanner";
import ErrorBoundary from "./components/ErrorBoundary";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import { usePageView } from "./hooks/usePageView";
import Funcionalidades from "./pages/Funcionalidades";
import Home from "./pages/Home";
import Privacidade from "./pages/Privacidade";
import TermosDeUso from "./pages/TermosDeUso";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/funcionalidades"} component={Funcionalidades} />
      <Route path={"/termos-de-uso"} component={TermosDeUso} />
      <Route path={"/privacidade"} component={Privacidade} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  // O banner de cookies ocupa o rodapé inteiro; o botão de WhatsApp mora no
  // mesmo canto, então sai de cena enquanto a pergunta estiver na tela.
  const [bannerDeCookies, setBannerDeCookies] = useState(false);

  usePageView();

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton oculto={bannerDeCookies} />
          <CookieBanner onVisibilidade={setBannerDeCookies} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
