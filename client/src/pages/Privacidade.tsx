import { Button } from "@/components/ui/button";

const whatsappUrl = "https://wa.me/5591984147769?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Vincor!";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function Privacidade() {
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
            <Button variant="ghost" className="hidden sm:flex" onClick={() => { window.location.href = "https://app.vincorapp.com.br/"; }}>
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground">Última atualização: fevereiro de 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-3xl mx-auto">

            <Section title="1. Introdução">
              <p>
                A Vincor leva a privacidade dos seus dados a sério. Esta Política descreve quais informações coletamos, como as utilizamos, onde as armazenamos, com quem as compartilhamos e como as protegemos, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>
            </Section>

            <Section title="2. Quais dados coletamos">
              <p>Coletamos os seguintes tipos de dados:</p>
              <p>Dados de cadastro:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Nome, e-mail e telefone do usuário responsável pela conta.</li>
                <li>Dados da empresa: razão social, CNPJ/CPF, endereço.</li>
              </ul>
              <p>Dados operacionais inseridos pelo usuário:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Informações financeiras: receitas, despesas, pagamentos, transferências bancárias.</li>
                <li>Dados de clientes, funcionários e fornecedores cadastrados no sistema (nome, CPF, e-mail, telefone).</li>
                <li>Documentos e relatórios gerados dentro da plataforma.</li>
              </ul>
              <p>Dados de uso da plataforma:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Logs de acesso (data, hora, IP).</li>
                <li>Ações realizadas no sistema para fins de auditoria e segurança.</li>
              </ul>
            </Section>

            <Section title="3. Para que usamos os dados">
              <p>Os dados coletados são utilizados exclusivamente para:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Fornecer e operar as funcionalidades do sistema Vincor.</li>
                <li>Autenticar o acesso e garantir a segurança da conta.</li>
                <li>Gerar relatórios, demonstrativos e documentos financeiros solicitados pelo usuário.</li>
                <li>Prestar suporte técnico e atendimento ao cliente.</li>
                <li>Cumprir obrigações legais quando aplicável.</li>
                <li>Melhorar a plataforma com base em padrões de uso agregados e anonimizados.</li>
              </ul>
              <p>Não utilizamos seus dados para fins publicitários ou de marketing sem seu consentimento explícito.</p>
            </Section>

            <Section title="4. Onde armazenamos os dados">
              <p>
                Os dados são armazenados em servidores seguros em nuvem. Utilizamos provedores de infraestrutura com certificações de segurança reconhecidas internacionalmente, garantindo redundância e disponibilidade dos dados.
              </p>
              <p>
                Os dados financeiros e pessoais inseridos permanecem sob controle exclusivo da conta contratante. Mantemos backups regulares para garantir a recuperação em caso de incidentes.
              </p>
            </Section>

            <Section title="5. Compartilhamento de dados">
              <p>
                Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.
              </p>
              <p>Podemos compartilhar dados apenas nas seguintes situações:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Prestadores de serviço essenciais: fornecedores de infraestrutura (hospedagem, banco de dados) que atuam sob contrato de confidencialidade e processam dados apenas conforme nossas instruções.</li>
                <li>Obrigação legal: quando exigido por autoridade competente, ordem judicial ou regulação aplicável.</li>
              </ul>
            </Section>

            <Section title="6. Como protegemos os dados">
              <p>Adotamos as seguintes medidas de segurança:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Comunicação criptografada via HTTPS/TLS em todas as trocas de dados.</li>
                <li>Autenticação segura com tokens JWT de curta duração.</li>
                <li>Controle de acesso por empresa: cada conta acessa exclusivamente seus próprios dados.</li>
                <li>Logs de acesso e auditoria para detecção de atividades suspeitas.</li>
                <li>Backups periódicos com retenção segura.</li>
              </ul>
            </Section>

            <Section title="7. Seus direitos (LGPD)">
              <p>Conforme a LGPD, você tem direito a:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Confirmar a existência de tratamento dos seus dados.</li>
                <li>Acessar os dados que mantemos sobre você.</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                <li>Solicitar a portabilidade dos seus dados.</li>
                <li>Revogar o consentimento a qualquer momento, quando o tratamento for baseado em consentimento.</li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, entre em contato pelo WhatsApp:{" "}
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
                  (91) 98414-7769
                </a>.
              </p>
            </Section>

            <Section title="8. Retenção e exclusão de dados">
              <p>
                Mantemos seus dados enquanto sua conta estiver ativa. Após o cancelamento, os dados são retidos por até 90 dias para fins de backup e recuperação, sendo então permanentemente excluídos, salvo quando houver obrigação legal de retenção por prazo superior.
              </p>
            </Section>

            <Section title="9. Alterações nesta Política">
              <p>
                Esta Política pode ser atualizada periodicamente. Notificaremos os usuários sobre mudanças significativas. O uso continuado do sistema após a publicação de uma nova versão implica na aceitação das alterações.
              </p>
            </Section>

            <Section title="10. Contato">
              <p>
                Dúvidas, solicitações ou reclamações relacionadas à privacidade podem ser enviadas pelo WhatsApp:{" "}
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
