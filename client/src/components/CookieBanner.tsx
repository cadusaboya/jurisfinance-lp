import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsAtivo } from "@/lib/analytics";
import { definirConsentimento, lerConsentimento } from "@/lib/consentimento";

interface Props {
  /** Avisa o App para recolher o botão de WhatsApp, que ocupa o mesmo canto. */
  onVisibilidade?: (visivel: boolean) => void;
}

/**
 * Banner de consentimento de cookies (LGPD).
 *
 * Só aparece quando há tag configurada e o visitante ainda não respondeu. A
 * resposta vai para um cookie no domínio raiz, então quem já respondeu aqui não
 * é perguntado de novo dentro do app.
 */
export function CookieBanner({ onVisibilidade }: Props) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!analyticsAtivo) return;
    if (lerConsentimento() === null) {
      setVisivel(true);
      onVisibilidade?.(true);
    }
  }, [onVisibilidade]);

  if (!visivel) return null;

  const responder = (estado: "granted" | "denied") => {
    definirConsentimento(estado);
    setVisivel(false);
    onVisibilidade?.(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border bg-background/95 backdrop-blur"
    >
      <div className="container flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Usamos cookies para entender como o site é usado e para medir a origem das
            visitas. Você pode recusar sem perder nenhuma funcionalidade.{" "}
            <a href="/privacidade" className="font-medium text-primary underline">
              Política de Privacidade
            </a>
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" onClick={() => responder("denied")}>
            Recusar
          </Button>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => responder("granted")}
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
