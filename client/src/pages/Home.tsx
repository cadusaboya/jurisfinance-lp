import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, FileText, LayoutDashboard, PieChart, Shield, Users, Wallet } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-serif font-bold text-primary">JurisFinance</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#funcionalidades" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Benefícios</a>
            <a href="#planos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Planos</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden sm:flex"
              onClick={() => {
                window.location.href = "https://jurisfinance-bice.vercel.app/";
              }}
            >
              Login
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Começar Agora</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-primary">
                  Gestão Financeira de Elite para <span className="text-accent">Escritórios de Advocacia</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Simplifique suas finanças com um ERP completo. Controle honorários, fluxo de caixa e comissões em uma plataforma segura e intuitiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
                    Ver Demonstração
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-secondary">
                    Ver Funcionalidades
                  </Button>
                </div>
                {/* Removed Setup Gratuito and Suporte Premium as requested */}
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="/images/hero-dashboard-pt.png" 
                  alt="Dashboard do JurisFinance" 
                  className="relative rounded-lg shadow-2xl border border-border/50 w-full object-cover transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="funcionalidades" className="py-20 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Tudo o que seu escritório precisa
              </h2>
              <p className="text-muted-foreground text-lg">
                Uma suíte completa de ferramentas financeiras desenvolvidas especificamente para a rotina jurídica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Contas a Pagar e Receber</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Controle total sobre suas entradas e saídas. Organize honorários, custas processuais e despesas administrativas em um só lugar.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <LayoutDashboard className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Dashboard Intuitivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Visualize a saúde financeira do seu escritório em tempo real. Gráficos claros de fluxo de caixa, inadimplência e metas.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Gestão de Comissões</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Cálculo automático de comissões para sócios e advogados associados. Regras flexíveis e transparência total nos repasses.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <PieChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">DRE e Relatórios</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Gere Demonstrativos de Resultados do Exercício (DRE) e relatórios financeiros detalhados em PDF com um clique.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Múltiplos Pagamentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Suporte completo para parcelamentos e múltiplos meios de pagamento. Flexibilidade para seus clientes e controle para você.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Segurança Bancária</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Suporte a vários bancos para centralizar o financeiro da empresa e proteção de dados de nível empresarial.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visual Feature Showcase */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                {/* Image removed as requested */}
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-3xl font-serif font-bold text-primary">Controle Financeiro Preciso</h3>
                <p className="text-lg text-muted-foreground">
                  Abandone as planilhas complexas. O JurisFinance centraliza todas as suas operações financeiras em uma interface limpa e à prova de erros.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Controle de clientes inadimplentes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Alertas de vencimento de contas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Fluxo de caixa realizado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-bold text-primary">Relatórios Profissionais em Segundos</h3>
                <p className="text-lg text-muted-foreground">
                  Impressione seus sócios e clientes com relatórios financeiros detalhados e visualmente impecáveis. Exporte para PDF com apenas um clique.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">DRE gerencial e contábil</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Relatórios de produtividade por advogado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Análise de rentabilidade por cliente</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="/images/feature-reports-pt.png" 
                  alt="Relatórios PDF" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto lg:max-w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="planos" className="py-20 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Planos Flexíveis para seu Escritório
              </h2>
              <p className="text-muted-foreground text-lg">
                Escolha a opção ideal para o tamanho da sua operação. Sem contratos de fidelidade.
              </p>
              <div className="mt-6 inline-flex items-center rounded-full border p-1 bg-background cursor-pointer">
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'}`}
                >
                  Mensal
                </button>
                <button 
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${billingCycle === 'yearly' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'}`}
                >
                  Anual (20% OFF)
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Basic Plan */}
              <Card className="border-2 border-transparent hover:border-primary/10 transition-all duration-300 shadow-lg relative overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-serif text-primary">Plano Básico</CardTitle>
                  <CardDescription>Ideal para escritórios em crescimento</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {billingCycle === 'monthly' ? 'R$ 80' : 'R$ 64'}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                    {billingCycle === 'yearly' && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Cobrança única de R$ 768
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Todas as ferramentas financeiras</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Suporte Básico (Email/Chat)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>7 dias grátis sem cobrança</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Acesso via Web e Mobile</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base">
                    Começar Teste Gratuito
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="border-2 border-accent shadow-xl relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MAIS POPULAR
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-serif text-primary">Plano PRO</CardTitle>
                  <CardDescription>Para escritórios que exigem exclusividade</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {billingCycle === 'monthly' ? 'R$ 500' : 'R$ 400'}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                    {billingCycle === 'yearly' && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Cobrança única de R$ 4.800
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="font-medium">Tudo do Plano Básico</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Suporte Premium Prioritário</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Desenvolvimento sob medida</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Consultoria de implantação</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold">
                    Falar com Consultor
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/images/cta-background.png" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Pronto para elevar a gestão do seu escritório?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Junte-se a centenas de escritórios que já modernizaram seu setor financeiro com o JurisFinance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg font-semibold">
                Começar Teste Gratuito
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-10 text-lg">
                Falar com Consultor
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-serif font-bold text-primary">JurisFinance</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                O ERP financeiro definitivo para escritórios de advocacia que buscam excelência e controle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-primary">Preços</a></li>
                <li><a href="#" className="hover:text-primary">Segurança</a></li>
                <li><a href="#" className="hover:text-primary">Atualizações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-primary">Contato</a></li>
                <li><a href="#" className="hover:text-primary">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-primary">Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            &copy; 2024 JurisFinance. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
