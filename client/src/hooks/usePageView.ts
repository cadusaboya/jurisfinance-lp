import { useEffect } from "react";
import { useLocation, useSearchParams } from "wouter";
import { analyticsAtivo, trackPageView } from "@/lib/analytics";

/**
 * Parâmetros de query que podem ser enviados ao GA4.
 *
 * O `gclid` é o que amarra a sessão ao clique no anúncio. Ele chega na URL de
 * entrada e precisa sobreviver até o `page_view`: como o `trackPageView` faz
 * `gtag('set', { page_location })`, o valor que sai daqui é o que o GA4 usa
 * para identificar a campanha. Descartá-lo faz a visita ser classificada como
 * orgânica, e aí o `sign_up` disparado no app nunca é atribuído ao anúncio.
 * `gbraid` e `wbraid` são os equivalentes do gclid no iOS e em contextos sem
 * cookie.
 *
 * Allowlist, e não denylist, para espelhar o PageViewTracker do app — lá
 * `/verificar-email` e `/redefinir-senha` recebem `uid` e `token` na URL, e um
 * token de redefinição de senha dentro de um relatório de analytics é um
 * vazamento de credencial. Aqui na landing não existe rota com credencial na
 * URL hoje, mas manter a mesma regra nos dois repositórios evita que a decisão
 * se perca quando um deles ganhar uma.
 */
const PARAMS_PERMITIDOS = new Set([
  "plano",
  "plan",
  "ciclo",
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
]);

function montarCaminho(pathname: string, searchParams: URLSearchParams): string {
  const limpos = new URLSearchParams();
  searchParams.forEach((valor, chave) => {
    if (PARAMS_PERMITIDOS.has(chave)) limpos.append(chave, valor);
  });
  const query = limpos.toString();
  return query ? `${pathname}?${query}` : pathname;
}

/**
 * Dispara `page_view` a cada mudança de rota.
 *
 * O wouter navega no cliente sem recarregar a página; sem isto o gtag
 * registraria apenas a página de entrada de cada sessão, e as visitas a
 * /funcionalidades ficariam invisíveis.
 *
 * `useLocation` devolve só o pathname — a query vem do `useSearchParams`, que
 * memoiza pela string de busca e portanto não reexecuta o efeito a cada render.
 */
export function usePageView() {
  const [location] = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!analyticsAtivo) return;
    trackPageView(montarCaminho(location, searchParams));
  }, [location, searchParams]);
}
