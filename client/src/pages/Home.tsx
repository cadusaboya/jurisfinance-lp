import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftRight, CheckCircle2, ChevronRight, LayoutDashboard, PieChart, Scale, Users, Wallet } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const whatsappUrl = "https://wa.me/5591984147769?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Vincor!";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/vincor-blue.png" alt="Vincor" className="h-8" />
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
                window.location.href = "https://app.vincorapp.com.br/";
              }}
            >
              Login
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.open(whatsappUrl, '_blank')}>Começar Agora</Button>
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
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base" onClick={() => window.open("https://www.youtube.com/watch?v=ZqCTwkm84Z0", '_blank')}>
                    Ver Demonstração
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-secondary" onClick={() => window.location.href = "/funcionalidades"}>
                    Ver Funcionalidades
                  </Button>
                </div>
                {/* Removed Setup Gratuito and Suporte Premium as requested */}
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="/images/hero-dashboard-custom.png"
                  alt="Dashboard do Vincor" 
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
                    Controle total sobre suas entradas e saídas, incluindo cobranças recorrentes e salários automáticos. Organize honorários, custas processuais e despesas administrativas em um só lugar.
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
                    <ArrowLeftRight className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Extrato & Conciliação Bancária</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Importe extratos bancários, registre pagamentos e reconcilie transações automaticamente. Tenha controle total do que entra e sai em cada conta.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Gestão de Custódias</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Controle valores recebidos em nome de terceiros e reembolsos a repasse. Gerencie passivos e ativos de custódia com rastreabilidade completa.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Por que escolher o Vincor?
              </h2>
              <p className="text-muted-foreground text-lg">
                Transforme a gestão financeira do seu escritório com tecnologia pensada para advogados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Economia de Tempo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Reduza o tempo gasto com tarefas financeiras em até 70%. Automatize processos repetitivos e foque no que realmente importa: seus casos.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Benefit 2 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Decisões Estratégicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Tenha visibilidade completa da saúde financeira do escritório. Dados em tempo real para tomar decisões informadas e estratégicas.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Benefit 3 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Redução de Inadimplência</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Controle efetivo de recebíveis com alertas automáticos e acompanhamento de pagamentos. Melhore seu fluxo de caixa significativamente.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Benefit 4 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Transparência Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Mantenha sócios, advogados e clientes informados com relatórios claros e profissionais. Fortaleça a confiança e credibilidade do escritório.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Benefit 5 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Conformidade e Organização</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Mantenha toda documentação financeira organizada e acessível. Facilite auditorias e garanta conformidade com as melhores práticas.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Benefit 6 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Escalabilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Cresça sem limites. Nossa plataforma se adapta ao tamanho do seu escritório, de pequenos negócios a grandes operações jurídicas.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visual Feature Showcase */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 lg:order-1">
                <img
                  src="/images/finance.png"
                  alt="Conciliação Bancária"
                  className="rounded-xl shadow-lg w-full mx-auto lg:max-w-full"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-3xl font-serif font-bold text-primary">Conciliação Bancária sem Dor de Cabeça</h3>
                <p className="text-lg text-muted-foreground">
                  Saiba exatamente o que está conciliado e o que está pendente em cada conta. O Vincor cruza seus lançamentos com os extratos bancários automaticamente.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Status em tempo real do progresso da conciliação bancária</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Importe pagamentos direto do extrato bancário</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Visão unificada de receitas, despesas e custódias</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Entradas e saídas consolidadas com um clique</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-bold text-primary">Relatórios Profissionais em Segundos</h3>
                <p className="text-lg text-muted-foreground">
                  Impressione seus sócios e clientes com relatórios financeiros detalhados e visualmente impecáveis. Exporte para PDF com apenas um clique.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">DRE — resultado do escritório por período</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Fluxo de caixa realizado com todos os lançamentos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Relatório de comissões por advogado em PDF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Geração com um clique, pronto para compartilhar</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/reports.png"
                  alt="Relatórios PDF"
                  className="rounded-xl w-full mx-auto lg:max-w-full"
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
                  Anual (com desconto)
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Basic Plan */}
              <Card className="border-2 border-transparent hover:border-primary/10 transition-all duration-300 shadow-lg relative overflow-hidden flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-serif text-primary">Plano Básico</CardTitle>
                  <CardDescription>Ideal para escritórios em crescimento</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {billingCycle === 'monthly' ? 'R$ 149' : 'R$ 99'}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                    {billingCycle === 'yearly' && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Cobrança única de R$ 1.188
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Acesso completo ao software</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Suporte Básico (Email/Chat)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Acesso via Web e Mobile</span>
                    </li>
                  </ul>
                  <div className="relative">
                    {/* Selo dourado circular */}
                    <div className="absolute -top-4 -left-4 z-10">
                      <div className="relative w-12 h-12 -rotate-15">
                        <div className="absolute inset-0 bg-accent opacity-30 blur-md animate-pulse rounded-full"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-accent via-accent to-accent/80 rounded-full flex items-center justify-center shadow-xl">
                          <div className="text-center">
                            <div className="text-accent-foreground font-bold text-[10px] leading-tight">7<br/>DIAS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                      Começar Teste Gratuito
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="border-2 border-accent shadow-xl relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MAIS POPULAR
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-serif text-primary">Plano PRO</CardTitle>
                  <CardDescription>Para escritórios que exigem exclusividade</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {billingCycle === 'monthly' ? 'R$ 599' : 'R$ 500'}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                    {billingCycle === 'yearly' && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Cobrança única de R$ 6.000
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="font-medium">Tudo do Plano Básico</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Relatórios em PDF customizados</span>
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
                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold"
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
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
              Junte-se a centenas de escritórios que já modernizaram seu setor financeiro com o Vincor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg font-semibold" onClick={() => window.open(whatsappUrl, '_blank')}>
                Falar com Consultor
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-10 text-lg" onClick={() => window.open(whatsappUrl, '_blank')}>
                Começar Teste Gratuito
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
                <img src="/vincor-blue.png" alt="Vincor" className="h-6" />
              </div>
              <p className="text-muted-foreground max-w-xs">
                O ERP definitivo para escritórios de advocacia que buscam excelência e controle.
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
