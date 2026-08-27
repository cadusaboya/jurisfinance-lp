import { Button } from "@/components/ui/button";
import { irParaLogin } from "@/lib/app";

const whatsappUrl = "https://wa.me/5591984147769?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Vincor!";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function TermosDeUso() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/vincor-blue.png" alt="Vincor" className="h-8" />
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="/#funcionalidades" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Funcionalidades</a>
            <a href="/#beneficios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Benefícios</a>
            <a href="/#planos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Planos</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex" onClick={irParaLogin}>
              Login
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.open(whatsappUrl, '_blank')}>
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Termos de Uso</h1>
            <p className="text-muted-foreground">Última atualização: fevereiro de 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-3xl mx-auto">

            <Section title="1. O que é o Vincor">
              <p>
                O Vincor é um sistema de gestão financeira (ERP) desenvolvido para escritórios de advocacia. Ele permite o controle de receitas, despesas, comissões, custódias, fluxo de caixa, conciliação bancária e emissão de relatórios financeiros.
              </p>
              <p>
                O acesso ao sistema é oferecido mediante contratação de um dos planos disponíveis, na modalidade SaaS (Software como Serviço), acessível via navegador web.
              </p>
            </Section>

            <Section title="2. Aceitação dos Termos">
              <p>
                Ao se cadastrar, acessar ou utilizar o Vincor, você confirma que leu, entendeu e concorda com estes Termos de Uso. Caso não concorde com qualquer disposição, você não deve utilizar o sistema.
              </p>
            </Section>

            <Section title="3. Responsabilidades do Usuário">
              <p>Ao utilizar o Vincor, o usuário se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Fornecer informações verdadeiras e atualizadas no cadastro e no uso do sistema.</li>
                <li>Manter a confidencialidade de suas credenciais de acesso (login e senha), sendo inteiramente responsável por toda atividade realizada em sua conta.</li>
                <li>Utilizar o sistema exclusivamente para fins lícitos e dentro das finalidades previstas na plataforma.</li>
                <li>Não tentar acessar, modificar ou interferir em dados de outros usuários ou na infraestrutura do sistema.</li>
                <li>Não reproduzir, vender, sublicenciar ou distribuir qualquer parte do software sem autorização expressa.</li>
                <li>Garantir que os dados financeiros e pessoais inseridos na plataforma estejam em conformidade com a legislação aplicável, incluindo a LGPD (Lei nº 13.709/2018).</li>
              </ul>
            </Section>

            <Section title="4. Suspensão e Cancelamento">
              <p>
                O Vincor se reserva o direito de suspender ou cancelar o acesso de qualquer usuário que viole estes Termos, sem aviso prévio e sem direito a reembolso proporcional no caso de uso indevido comprovado.
              </p>
              <p>
                O usuário pode cancelar sua assinatura a qualquer momento. O acesso permanecerá ativo até o fim do período já pago.
              </p>
            </Section>

            <Section title="5. Disponibilidade do Serviço">
              <p>
                Nos comprometemos a manter o sistema disponível de forma contínua, mas não garantimos disponibilidade ininterrupta. Realizamos manutenções periódicas e nos esforçamos para notificar os usuários com antecedência quando possível.
              </p>
            </Section>

            <Section title="6. Alterações nos Termos">
              <p>
                Estes Termos podem ser atualizados periodicamente. Notificaremos os usuários sobre mudanças relevantes. O uso continuado do sistema após a publicação de novos termos implica na aceitação das alterações.
              </p>
            </Section>

            <Section title="7. Contato">
              <p>
                Para dúvidas sobre estes Termos de Uso, entre em contato conosco pelo WhatsApp:{" "}
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
                  (91) 98414-7769
                </a>.
              </p>
            </Section>

          </div>
        </section>
      </main>

      <footer className="bg-secondary py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/vincor-blue.png" alt="Vincor" className="h-6" />
              </div>
              <p className="text-muted-foreground max-w-xs">
                O ERP definitivo para escritórios de advocacia que buscam excelência e controle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/funcionalidades" className="hover:text-primary">Funcionalidades</a></li>
                <li><a href="/#planos" className="hover:text-primary">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Sobre Nós</a></li>
                <li><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-primary">Contato</a></li>
                <li><a href="/termos-de-uso" className="hover:text-primary">Termos de Uso</a></li>
                <li><a href="/privacidade" className="hover:text-primary">Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            &copy; 2026 Vincor. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
