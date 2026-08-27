/**
 * Captura e persistência da origem da visita.
 *
 * O que é gravado aqui é o que permite, semanas depois, ligar uma assinatura
 * paga ao anúncio que a gerou — inclusive quando o pagamento sai de outro
 * navegador, quando o cookie do Google já expirou, ou quando o trial de 7 dias
 * esticou a jornada além da sessão.
 */

const COOKIE = 'vincor_atribuicao';
const NOVENTA_DIAS_EM_SEGUNDOS = 90 * 24 * 60 * 60;

/** Identificadores de clique do Google Ads. `gbraid`/`wbraid` cobrem iOS/app. */
const IDS_DE_CLIQUE = ['gclid', 'gbraid', 'wbraid'] as const;

const UTMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export const PARAMETROS_DE_ORIGEM = [...IDS_DE_CLIQUE, ...UTMS] as const;

export interface Toque {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  referrer?: string;
  capturado_em?: string;
}

interface Atribuicao {
  /** O primeiro toque, nunca sobrescrito: conta como o visitante nos descobriu. */
  primeiro?: Toque;
  /** O toque mais recente: é este que o Google Ads usa para atribuir a venda. */
  ultimo?: Toque;
}

/**
 * Domínio do cookie.
 *
 * Precisa ser o domínio raiz para que `app.vincorapp.com.br` — onde acontece o
 * cadastro — enxergue o que foi gravado aqui em `vincorapp.com.br`. Em
 * localhost e em previews o atributo é omitido, senão o navegador rejeita.
 */
function dominioDoCookie(): string {
  const host = window.location.hostname;
  return host === 'vincorapp.com.br' || host.endsWith('.vincorapp.com.br')
    ? '; domain=.vincorapp.com.br'
    : '';
}

function lerCookie(): Atribuicao | null {
  try {
    const bruto = document.cookie
      .split('; ')
      .find((c) => c.startsWith(`${COOKIE}=`))
      ?.slice(COOKIE.length + 1);
    return bruto ? (JSON.parse(decodeURIComponent(bruto)) as Atribuicao) : null;
  } catch {
    return null;
  }
}

function gravarCookie(valor: Atribuicao) {
  try {
    const conteudo = encodeURIComponent(JSON.stringify(valor));
    document.cookie =
      `${COOKIE}=${conteudo}` +
      `; path=/${dominioDoCookie()}` +
      `; max-age=${NOVENTA_DIAS_EM_SEGUNDOS}` +
      '; SameSite=Lax';
  } catch {
    // Cookies bloqueados: a medição cai para o que a tag do Google conseguir.
  }
}

/** Extrai da URL atual os parâmetros de origem, se houver algum. */
function toqueDaUrl(): Toque | null {
  const params = new URLSearchParams(window.location.search);
  const toque: Toque = {};

  for (const chave of PARAMETROS_DE_ORIGEM) {
    const valor = params.get(chave);
    if (valor) toque[chave] = valor;
  }

  if (Object.keys(toque).length === 0) return null;

  toque.landing_page = window.location.pathname;
  toque.referrer = document.referrer || undefined;
  toque.capturado_em = new Date().toISOString();
  return toque;
}

/**
 * Registra a origem da visita atual. Idempotente — chamar em toda carga de
 * página é seguro, e páginas sem parâmetro de origem não apagam nada.
 *
 * O primeiro toque é preservado porque conta a história de aquisição; o último
 * é sobrescrito porque o Google Ads atribui a conversão ao clique mais recente.
 */
export function capturarAtribuicao() {
  if (typeof window === 'undefined') return;

  const toque = toqueDaUrl();
  if (!toque) return;

  const atual = lerCookie() ?? {};
  gravarCookie({ primeiro: atual.primeiro ?? toque, ultimo: toque });
}

/**
 * Parâmetros a repassar ao app no link de cadastro, para que o backend possa
 * gravá-los junto da empresa criada.
 */
export function parametrosDeAtribuicao(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const toque = lerCookie()?.ultimo;
  if (!toque) return {};

  const saida: Record<string, string> = {};
  for (const chave of PARAMETROS_DE_ORIGEM) {
    const valor = toque[chave];
    if (valor) saida[chave] = valor;
  }
  return saida;
}
