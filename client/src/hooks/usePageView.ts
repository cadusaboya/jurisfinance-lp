import { useEffect } from "react";
import { useLocation } from "wouter";
import { analyticsAtivo, trackPageView } from "@/lib/analytics";

/**
 * Dispara `page_view` a cada mudança de rota.
 *
 * O wouter navega no cliente sem recarregar a página; sem isto o gtag
 * registraria apenas a página de entrada de cada sessão, e as visitas a
 * /funcionalidades ficariam invisíveis.
 */
export function usePageView() {
  const [location] = useLocation();

  useEffect(() => {
    if (!analyticsAtivo) return;
    trackPageView(location);
  }, [location]);
}
