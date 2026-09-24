import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { CookieBanner } from "./components/CookieBanner";
import ErrorBoundary from "./components/ErrorBoundary";
import { SupportButton } from "./components/SupportButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import { usePageView } from "./hooks/usePageView";
import Funcionalidades from "./pages/Funcionalidades";
import Home from "./pages/Home";
import Privacidade from "./pages/Privacidade";
import TermosDeUso from "./pages/TermosDeUso";
import { metaDaRota } from "./seo";


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
  // O banner de cookies ocupa o rodapé inteiro; o botão de suporte mora no
  // mesmo canto, então sai de cena enquanto a pergunta estiver na tela.
  const [bannerDeCookies, setBannerDeCookies] = useState(false);
  const [location] = useLocation();

  // O HTML de cada rota já sai do build com o título certo; isto cobre a
  // navegação no cliente. Vem antes do usePageView porque o page_view lê o
  // document.title, e efeitos do mesmo componente rodam na ordem declarada.
  useEffect(() => {
    document.title = metaDaRota(location).titulo;
  }, [location]);

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
          <SupportButton oculto={bannerDeCookies} />
          <CookieBanner onVisibilidade={setBannerDeCookies} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
