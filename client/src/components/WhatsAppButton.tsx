export function WhatsAppButton() {
  const phone = '5591984147769';
  const message = encodeURIComponent('Olá! Preciso de ajuda.');
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg px-4 py-3 transition-all duration-200 hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 shrink-0"
      >
        <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
      </svg>
      <span className="text-sm font-medium whitespace-nowrap">Precisa de ajuda?</span>
    </a>
  );
}
