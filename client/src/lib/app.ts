/**
 * Ida da landing para o app.
 *
 * Centraliza o que antes eram sete `window.location.href` espalhados por
 * Home.tsx e Funcionalidades.tsx. Passar por aqui garante que todo caminho para
 * o cadastro leve junto o plano escolhido e a origem da visita — inclusive os
 * botões que ainda não existem.
 */

import { trackEvent } from './analytics';
import { parametrosDeAtribuicao } from './atribuicao';

export const APP_URL = 'https://app.vincorapp.com.br';

export type Plano = 'essencial' | 'profissional' | 'evolution';
export type Ciclo = 'MONTHLY' | 'ANNUAL';

interface OpcoesCadastro {
  plano?: Plano;
  ciclo?: Ciclo;
  /** Onde na página o visitante clicou — vira dimensão no GA4. */
  origem?: string;
}

export function urlDeCadastro({ plano, ciclo }: OpcoesCadastro = {}): string {
  const url = new URL('/cadastro', APP_URL);
  if (plano) url.searchParams.set('plano', plano);
  if (ciclo) url.searchParams.set('ciclo', ciclo);

  for (const [chave, valor] of Object.entries(parametrosDeAtribuicao())) {
    url.searchParams.set(chave, valor);
  }

  return url.toString();
}

export function irParaCadastro(opcoes: OpcoesCadastro = {}) {
  trackEvent('clicou_cadastro', {
    plano: opcoes.plano ?? 'nenhum',
    ciclo: opcoes.ciclo ?? 'nenhum',
    origem: opcoes.origem ?? 'nao_informado',
  });
  window.location.href = urlDeCadastro(opcoes);
}

export function irParaLogin() {
  trackEvent('clicou_login');
  window.location.href = `${APP_URL}/`;
}
