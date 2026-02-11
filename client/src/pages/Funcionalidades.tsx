import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeftRight,
  BarChart3,
  Building2,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  PieChart,
  RefreshCcw,
  Scale,
  Users,
  Wallet,
} from "lucide-react";

const modules = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Visão completa da saúde financeira do escritório em tempo real.",
    features: [
      "Saldo total com comparativo dos últimos 30 dias",
      "Fluxo de caixa realizado do período",
      "Receitas e despesas projetadas para os próximos 30 dias",
      "Alertas de vencimentos próximos e inadimplência",
      "Gráficos de receitas x despesas (últimos 6 meses)",
      "Receitas e despesas por tipo (gráficos de pizza)",
      "Notificações de aniversários de clientes e funcionários",
    ],
  },
  {
    icon: Wallet,
    title: "Receitas",
    description: "Controle completo sobre tudo que o escritório tem a receber.",
    features: [
      "Contas a receber com status em tempo real (aberto, vencido, pago)",
      "Histórico de contas recebidas",
      "Receitas fixas, variáveis e reembolsos",
      "Pagamento via Pix ou boleto",
      "Receitas recorrentes com geração automática mensal",
      "Configuração de início, fim e dia de vencimento",
      "Regras individuais de comissão por receita recorrente",
    ],
  },
  {
    icon: FileText,
    title: "Despesas",
    description: "Gestão de todos os custos e obrigações financeiras do escritório.",
    features: [
      "Contas a pagar com status em tempo real (aberto, vencido, pago)",
      "Histórico de contas pagas",
      "Despesas fixas, variáveis, comissões e reembolsos",
      "Vinculação a funcionário, sócio ou fornecedor responsável",
      "Despesas recorrentes (salários, aluguel, contratos fixos)",
      "Geração automática de folha salarial mensal",
      "Rastreabilidade de despesas originadas por comissão",
    ],
  },
  {
    icon: ArrowLeftRight,
    title: "Extrato & Conciliação Bancária",
    description: "Controle total das movimentações bancárias com reconciliação automática.",
    features: [
      "Registro de pagamentos de entrada e saída",
      "Importação de extratos bancários (CSV/Excel)",
      "Conciliação automática de transações",
      "Alocação de um pagamento em múltiplas contas simultaneamente",
      "Vinculação a receitas, despesas, custódias ou transferências",
      "Histórico completo de movimentações por conta bancária",
      "Exclusão em massa e busca avançada",
    ],
  },
  {
    icon: Scale,
    title: "Gestão de Custódias",
    description: "Controle de valores recebidos ou pagos em nome de terceiros.",
    features: [
      "Passivos: valores recebidos que devem ser repassados a terceiros",
      "Ativos: valores pagos pelo escritório a serem reembolsados",
      "Status automático: aberto, parcial ou liquidado",
      "Vinculação a clientes e funcionários",
      "Rastreabilidade completa por alocações de pagamento",
      "Histórico de custódias liquidadas",
    ],
  },
  {
    icon: Users,
    title: "Gestão de Pessoas",
    description: "Cadastro completo de clientes, funcionários e fornecedores.",
    features: [
      "Clientes com CPF/CNPJ, email, telefone e aniversário",
      "Formas de cobrança por cliente: mensalidade fixa ou êxito",
      "Múltiplas formas de cobrança por cliente (ex.: Tributário + Trabalhista)",
      "Regras individuais de comissão por cliente",
      "Perfil financeiro do cliente com histórico de receitas",
      "Funcionários com tipo: colaborador, sócio ou fornecedor",
      "Salário mensal configurável por funcionário",
      "Fornecedores vinculados a despesas",
    ],
  },
  {
    icon: Building2,
    title: "Bancos & Transferências",
    description: "Gerenciamento de múltiplas contas bancárias e transferências entre elas.",
    features: [
      "Cadastro de múltiplas contas bancárias (Itaú, Caixa, Nubank, Carteira etc.)",
      "Saldo atual por conta",
      "Registro de transferências entre contas",
      "Status de transferência: pendente, inconsistente ou concluída",
      "Reconciliação de transferências via alocações",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Comissões",
    description: "Sistema flexível de comissões em três níveis para total transparência.",
    features: [
      "Percentual global padrão configurável pela empresa",
      "Regras individuais por cliente (sobrescrevem o global)",
      "Regras individuais por receita específica",
      "Geração automática de comissões por mês/ano",
      "Comissões geradas automaticamente como despesas",
      "Relatório de comissionamento por advogado",
      "Resumo com quantidade e valor total gerado",
    ],
  },
  {
    icon: PieChart,
    title: "Relatórios",
    description: "Relatórios financeiros completos exportáveis em PDF com um clique.",
    features: [
      "DRE (Demonstração de Resultado do Exercício) por mês/ano",
      "Fluxo de Caixa Realizado por banco e por tipo",
      "Conciliação Bancária com status por conta",
      "Relatório de Comissões por funcionário",
      "Relatório de receitas pagas e a receber",
      "Relatório de despesas pagas e a pagar",
      "Relatório financeiro individual por cliente",
      "Relatório individual por funcionário/fornecedor",
      "Recibo de pagamento",
    ],
  },
  {
    icon: BarChart3,
    title: "Configurações da Empresa",
    description: "Personalize o sistema de acordo com o perfil do seu escritório.",
    features: [
      "Nome, CNPJ/CPF, endereço, telefone e email",
      "Upload de logotipo",
      "Percentual global de comissão padrão",
      "Dados exibidos nos relatórios e recibos PDF",
    ],
  },
];

export default function Funcionalidades() {
  const whatsappUrl = "https://wa.me/5591984147769?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Vincor!";

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
            <Button
              variant="ghost"
              className="hidden sm:flex"
              onClick={() => { window.location.href = "https://app.vincorapp.com.br/"; }}
            >
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
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Todas as Funcionalidades
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Vincor foi construído do zero para a rotina de escritórios de advocacia. Cada módulo resolve um problema real do dia a dia financeiro jurídico.
            </p>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10">
              {modules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <Card key={mod.title} className="border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-primary">{mod.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-0.5">{mod.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {mod.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Fale com um consultor e descubra como o Vincor pode se adaptar ao seu escritório.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg font-semibold" onClick={() => window.open(whatsappUrl, '_blank')}>
              Falar com Consultor
            </Button>
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
