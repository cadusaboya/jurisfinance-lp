import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Headset, Mail, X } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_PHONE = '5591984147769';
const WHATSAPP_MENSAGEM = 'Olá! Preciso de ajuda.';
const EMAIL = 'suporte@vincorapp.com.br';

interface Props {
  /** Recolhido enquanto o banner de cookies ocupa o rodapé da tela. */
  oculto?: boolean;
}

/** Ícone do WhatsApp no traço do Tabler, o mesmo usado no app. */
function IconeWhatsApp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

export function SupportButton({ oculto = false }: Props) {
  const [aberto, setAberto] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const botaoRef = useRef<HTMLButtonElement>(null);

  const whatsappHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;

  // Fecha no Esc e no clique fora. Sem isso o painel fica preso na tela de quem
  // abriu por engano — e ele cobre o canto inferior direito da página.
  useEffect(() => {
    if (!aberto) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAberto(false);
        botaoRef.current?.focus();
      }
    };
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setAberto(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [aberto]);

  // O banner de cookies some com o botão; o painel não pode voltar aberto
  // quando ele reaparece.
  useEffect(() => {
    if (oculto) setAberto(false);
  }, [oculto]);

  useEffect(() => {
    if (!copiado) return;
    const id = setTimeout(() => setCopiado(false), 2000);
    return () => clearTimeout(id);
  }, [copiado]);

  const alternar = () => {
    setAberto((atual) => {
      if (!atual) trackEvent('abriu_suporte', { origem: 'landing' });
      return !atual;
    });
  };

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiado(true);
      trackEvent('copiou_email_suporte', { origem: 'landing' });
    } catch {
      // Clipboard bloqueado (contexto inseguro ou permissão negada): o endereço
      // segue visível no painel para cópia manual.
    }
  };

  if (oculto) return null;

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {aberto && (
        <div
          role="dialog"
          aria-label="Canais de suporte"
          className="w-[17rem] max-w-[calc(100vw-3rem)] overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-2xl"
        >
          <div className="flex items-start justify-between gap-2 bg-primary px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-primary-foreground">Precisa de ajuda?</p>
              <p className="mt-0.5 text-xs text-primary-foreground/70">
                Escolha como prefere falar com a gente.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setAberto(false);
                botaoRef.current?.focus();
              }}
              aria-label="Fechar"
              className="-mr-1 shrink-0 rounded p-1 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent('clicou_whatsapp', { origem: 'landing' });
                setAberto(false);
              }}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
            >
              <IconeWhatsApp className="h-5 w-5 shrink-0 text-[#25D366]" />
              <span className="min-w-0">
                <span className="block text-sm font-medium">WhatsApp</span>
                <span className="block text-xs text-muted-foreground">Resposta mais rápida</span>
              </span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              onClick={() => {
                trackEvent('clicou_email_suporte', { origem: 'landing' });
                setAberto(false);
              }}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
            >
              <Mail className="h-5 w-5 shrink-0" />
              <span className="min-w-0">
                <span className="block text-sm font-medium">E-mail</span>
                <span className="block truncate text-xs text-muted-foreground">{EMAIL}</span>
              </span>
            </a>

            {/* No desktop o mailto: depende de um cliente de e-mail configurado —
                sem isso o link não faz nada e o endereço se perde. */}
            <button
              type="button"
              onClick={copiarEmail}
              className="mt-1 flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {copiado ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  E-mail copiado
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copiar endereço de e-mail
                </>
              )}
            </button>
          </div>
        </div>
      )}

      <button
        ref={botaoRef}
        type="button"
        onClick={alternar}
        aria-expanded={aberto}
        aria-label={aberto ? 'Fechar suporte' : 'Precisa de ajuda?'}
        className="flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary/90"
      >
        {aberto ? <X className="h-5 w-5 shrink-0" /> : <Headset className="h-5 w-5 shrink-0" />}
        <span className="whitespace-nowrap text-sm font-medium">Precisa de ajuda?</span>
      </button>
    </div>
  );
}
