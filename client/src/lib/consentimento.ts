/**
 * Consent Mode v2 (LGPD).
 *
 * O banner funciona como opt-out, não opt-in: a medição roda por padrão e só
 * para quando o visitante recusa. É a leitura usual da LGPD para analytics
 * próprio, apoiada em legítimo interesse, e é o mesmo comportamento do app —
 * que não tem banner e concede por padrão.
 *
 * O motivo de não negar por padrão é prático: a maioria dos visitantes não
 * clica em nada. Negando, o GA4 não grava o `_ga`, e a visita à landing e o
 * cadastro no app viram duas sessões distintas — o funil de aquisição, que é
 * justamente o que a campanha precisa medir, fica furado para quase todo mundo.
 *
 * A escolha vive num cookie no domínio raiz, não em localStorage: assim
 * `vincorapp.com.br` e `app.vincorapp.com.br` compartilham a resposta e o
 * visitante não é perguntado duas vezes na mesma jornada. O módulo equivalente
 * no repositório do app lê o mesmo cookie.
 */

export const COOKIE_CONSENTIMENTO = 'vincor_consentimento';
const UM_ANO_EM_SEGUNDOS = 365 * 24 * 60 * 60;

export type EstadoConsentimento = 'granted' | 'denied';

/** Os quatro sinais exigidos pelo Consent Mode v2. */
const SINAIS = [
  'ad_storage',
  'analytics_storage',
  'ad_user_data',
  'ad_personalization',
] as const;

function dominioDoCookie(): string {
  const host = window.location.hostname;
  return host === 'vincorapp.com.br' || host.endsWith('.vincorapp.com.br')
    ? '; domain=.vincorapp.com.br'
    : '';
}

/** `null` = o visitante ainda não respondeu. */
export function lerConsentimento(): EstadoConsentimento | null {
  if (typeof document === 'undefined') return null;
  const valor = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${COOKIE_CONSENTIMENTO}=`))
    ?.slice(COOKIE_CONSENTIMENTO.length + 1);
  return valor === 'granted' || valor === 'denied' ? valor : null;
}

/** Grava a escolha e avisa o gtag na hora. */
export function definirConsentimento(estado: EstadoConsentimento) {
  document.cookie =
    `${COOKIE_CONSENTIMENTO}=${estado}` +
    `; path=/${dominioDoCookie()}` +
    `; max-age=${UM_ANO_EM_SEGUNDOS}` +
    '; SameSite=Lax';

  const consentimento = Object.fromEntries(SINAIS.map((s) => [s, estado]));
  window.gtag?.('consent', 'update', consentimento);
}

/**
 * Estado inicial, aplicado antes de o gtag.js carregar.
 *
 * Concede, exceto quando o cookie diz explicitamente `denied` — mesma regra do
 * app, para que o mesmo visitante seja tratado igual dos dois lados.
 *
 * Sem `wait_for_update` de propósito: ele serve para segurar os primeiros hits
 * à espera de um opt-in que aqui não precisa acontecer. Mantê-lo só atrasaria
 * cada carregamento de página sem mudar nada.
 */
export function consentimentoPadrao(): Record<string, unknown> {
  const estado: EstadoConsentimento = lerConsentimento() === 'denied' ? 'denied' : 'granted';
  return Object.fromEntries(SINAIS.map((s) => [s, estado]));
}
