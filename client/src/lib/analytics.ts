/**
 * Tag do Google (GA4 + Google Ads) na landing.
 *
 * Sem `VITE_GA_MEASUREMENT_ID` / `VITE_GOOGLE_ADS_ID` definidos, nada carrega e
 * nenhuma chamada quebra — o site funciona igual, apenas sem medição.
 *
 * Usa o mesmo par de IDs do app: landing e app compartilham o domínio
 * registrável, então uma propriedade GA4 só cobre a jornada inteira.
 */

import { consentimentoPadrao } from './consentimento';

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';
export const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID || '';

export const analyticsAtivo = Boolean(GA_MEASUREMENT_ID || GOOGLE_ADS_ID);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let carregado = false;

/**
 * Inicializa o gtag e injeta o script. Chamar uma vez, no boot da aplicação.
 *
 * O shim `gtag` é definido antes de o script externo chegar: as chamadas ficam
 * enfileiradas no dataLayer e são drenadas em ordem quando ele inicializa —
 * então o `consent default` é sempre processado antes do primeiro hit.
 */
export function iniciarGoogleTag() {
  if (carregado || !analyticsAtivo || typeof window === 'undefined') return;
  carregado = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  window.gtag('consent', 'default', consentimentoPadrao());
  window.gtag('js', new Date());

  // send_page_view: false — o usePageView dispara os page_view por rota, já que
  // o wouter navega no cliente e o gtag não percebe a troca sozinho.
  if (GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  }
  if (GOOGLE_ADS_ID) {
    window.gtag('config', GOOGLE_ADS_ID);
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID || GOOGLE_ADS_ID}`;
  document.head.appendChild(script);
}

/** Dispara um evento GA4. */
export function trackEvent(nome: string, params: Record<string, unknown> = {}) {
  window.gtag?.('event', nome, params);
}

/** Registra a visualização de uma rota. */
export function trackPageView(path: string) {
  if (typeof window === 'undefined') return;
  window.gtag?.('set', {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
  window.gtag?.('event', 'page_view');
}
