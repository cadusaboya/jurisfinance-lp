/**
 * Consent Mode v2 (LGPD).
 *
 * A escolha vive num cookie no domínio raiz, não em localStorage: assim
 * `vincorapp.com.br` e `app.vincorapp.com.br` compartilham a resposta e o
 * visitante não é perguntado duas vezes na mesma jornada. O módulo equivalente
 * no repositório do app usa exatamente o mesmo nome e formato.
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

/** Estado inicial, aplicado antes de o gtag.js carregar. */
export function consentimentoPadrao(): Record<string, unknown> {
  const estado = lerConsentimento() ?? 'denied';
  return {
    ...Object.fromEntries(SINAIS.map((s) => [s, estado])),
    // Dá meio segundo para o banner responder antes do primeiro hit sair.
    wait_for_update: 500,
  };
}
