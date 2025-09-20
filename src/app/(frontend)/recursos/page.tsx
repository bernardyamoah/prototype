import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Calendar,
  DollarSign,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Handshake,
  Phone,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export default function RecursosPage() {
  const campaigns = [
    {
      title: 'Descubra Angola 2024',
      description: 'Campanha nacional para promover o turismo interno e internacional.',
      status: 'Ativa',
      period: 'Jan 2024 - Dez 2024',
      image: '/placeholder.svg?height=200&width=300&text=Campaign+2024',
      reach: '2M+ pessoas',
    },
    {
      title: 'Angola Autêntica',
      description: 'Promoção da cultura e tradições angolanas no mercado internacional.',
      status: 'Planeada',
      period: 'Mar 2024 - Jun 2024',
      image: '/placeholder.svg?height=200&width=300&text=Authentic+Angola',
      reach: '500K+ pessoas',
    },
    {
      title: 'Investir em Angola',
      description: 'Campanha focada em atrair investimento estrangeiro direto.',
      status: 'Ativa',
      period: 'Fev 2024 - Nov 2024',
      image: '/placeholder.svg?height=200&width=300&text=Invest+Angola',
      reach: '1M+ pessoas',
    },
  ]

  const tourismAgenda = [
    {
      month: 'Janeiro 2024',
      events: [
        {
          name: 'Feira Internacional de Turismo',
          date: '15-18 Jan',
          location: 'Luanda',
          type: 'Feira',
        },
        {
          name: 'Workshop Operadores Turísticos',
          date: '25 Jan',
          location: 'Benguela',
          type: 'Workshop',
        },
      ],
    },
    {
      month: 'Março 2024',
      events: [
        {
          name: 'Conferência Turismo Sustentável',
          date: '10-12 Mar',
          location: 'Lubango',
          type: 'Conferência',
        },
        {
          name: 'Formação Guias Turísticos',
          date: '20-22 Mar',
          location: 'Luanda',
          type: 'Formação',
        },
      ],
    },
    {
      month: 'Maio 2024',
      events: [
        {
          name: 'Dia Mundial do Turismo',
          date: '27 Mai',
          location: 'Nacional',
          type: 'Celebração',
        },
        { name: 'Fórum Investimento Turístico', date: '30 Mai', location: 'Luanda', type: 'Fórum' },
      ],
    },
    {
      month: 'Julho 2024',
      events: [
        {
          name: 'Festival Turismo Cultural',
          date: '15-20 Jul',
          location: 'Mbanza Congo',
          type: 'Festival',
        },
        {
          name: 'Capacitação Hotelaria',
          date: '25-27 Jul',
          location: 'Benguela',
          type: 'Formação',
        },
      ],
    },
  ]

  const internationalPartners = [
    {
      country: 'Portugal',
      organization: 'Turismo de Portugal',
      cooperation: 'Promoção conjunta, formação técnica',
      projects: ['Rota Lusófona', 'Capacitação profissional'],
      contact: 'parceria.portugal@visitangola.ao',
    },
    {
      country: 'Brasil',
      organization: 'EMBRATUR',
      cooperation: 'Marketing conjunto, intercâmbio cultural',
      projects: ['Festival Lusófono', 'Intercâmbio gastronómico'],
      contact: 'parceria.brasil@visitangola.ao',
    },
    {
      country: 'África do Sul',
      organization: 'South African Tourism',
      cooperation: 'Rotas regionais, promoção SADC',
      projects: ['Rota Austral', 'Turismo regional'],
      contact: 'parceria.africadosul@visitangola.ao',
    },
    {
      country: 'França',
      organization: 'Atout France',
      cooperation: 'Turismo de luxo, gastronomia',
      projects: ['Turismo premium', 'Formação hoteleira'],
      contact: 'parceria.franca@visitangola.ao',
    },
  ]

  const exchangeRates = [
    { currency: 'Euro (EUR)', rate: '850 AOA', trend: 'stable', flag: '🇪🇺' },
    { currency: 'Dólar Americano (USD)', rate: '825 AOA', trend: 'up', flag: '🇺🇸' },
    { currency: 'Libra Esterlina (GBP)', rate: '1,050 AOA', trend: 'down', flag: '🇬🇧' },
    { currency: 'Real Brasileiro (BRL)', rate: '165 AOA', trend: 'stable', flag: '🇧🇷' },
  ]

  const resources = [
    {
      category: 'Documentos Oficiais',
      items: [
        { name: 'Estratégia Nacional de Turismo 2024-2030', type: 'PDF', size: '2.5 MB' },
        { name: 'Plano de Ação Turismo Sustentável', type: 'PDF', size: '1.8 MB' },
        { name: 'Regulamento Operadores Turísticos', type: 'PDF', size: '950 KB' },
        { name: 'Guia Investimento Turístico', type: 'PDF', size: '3.2 MB' },
      ],
    },
    {
      category: 'Material Promocional',
      items: [
        { name: 'Brochura Visit Angola 2024', type: 'PDF', size: '15 MB' },
        { name: 'Vídeo Promocional Angola', type: 'MP4', size: '125 MB' },
        { name: 'Kit Imprensa Digital', type: 'ZIP', size: '45 MB' },
        { name: 'Logotipos e Identidade Visual', type: 'ZIP', size: '8 MB' },
      ],
    },
    {
      category: 'Estatísticas e Dados',
      items: [
        { name: 'Relatório Turismo 2023', type: 'PDF', size: '4.1 MB' },
        { name: 'Dados Chegadas Internacionais', type: 'XLSX', size: '650 KB' },
        { name: 'Ocupação Hoteleira 2023', type: 'XLSX', size: '420 KB' },
        { name: 'Receitas Turísticas', type: 'PDF', size: '1.2 MB' },
      ],
    },
  ]

  return (
    <div className="min-h-screen mx-auto">
      <HeroSection
        title="Recursos"
        subtitle="Informações, campanhas e ferramentas para o desenvolvimento do turismo em Angola"
        backgroundImage="/placeholder.svg?height=600&width=1200&text=Resources+Angola"
      />

      {/* Campanhas do Turismo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Campanhas do Turismo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Iniciativas de promoção e marketing para posicionar Angola como destino turístico de
              referência.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <Card
                key={campaign.title}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${campaign.image})` }}
                />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{campaign.title}</CardTitle>
                    <Badge variant={campaign.status === 'Ativa' ? 'default' : 'secondary'}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{campaign.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>{campaign.period}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      <span>Alcance: {campaign.reach}</span>
                    </div>
                    <Button className="w-full mt-4">Ver Detalhes</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda de Turismo */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agenda de Turismo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Eventos, conferências e atividades do setor turístico ao longo do ano.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tourismAgenda.map((month) => (
              <Card key={month.month} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    {month.month}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {month.events.map((event) => (
                      <div key={event.name} className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">{event.name}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-muted-foreground">{event.date}</span>
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">📍 {event.location}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros no Estrangeiro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Parceiros no Estrangeiro
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cooperação internacional para promoção do turismo angolano no mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {internationalPartners.map((partner) => (
              <Card key={partner.country} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-primary" />
                    {partner.country}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{partner.organization}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">Áreas de Cooperação:</p>
                      <p className="text-sm text-muted-foreground">{partner.cooperation}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Projetos Ativos:</p>
                      <ul className="space-y-1">
                        {partner.projects.map((project) => (
                          <li key={project} className="text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">
                        <strong>Contacto:</strong> {partner.contact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Câmbio */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Câmbio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Taxas de câmbio atualizadas para o Kwanza Angolano (AOA).
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  Taxas de Câmbio Atuais
                </CardTitle>
                <p className="text-sm text-muted-foreground">Última atualização: Hoje, 14:30</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exchangeRates.map((rate) => (
                    <div
                      key={rate.currency}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{rate.flag}</span>
                        <div>
                          <p className="font-semibold">{rate.currency}</p>
                          <p className="text-sm text-muted-foreground">
                            1 {rate.currency.split(' ')[0]} = {rate.rate}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          rate.trend === 'up'
                            ? 'default'
                            : rate.trend === 'down'
                              ? 'destructive'
                              : 'secondary'
                        }
                      >
                        {rate.trend === 'up' ? '↗' : rate.trend === 'down' ? '↘' : '→'}{' '}
                        {rate.trend}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Histórico Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads e Recursos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Downloads e Recursos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Documentos, relatórios e material promocional para download.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((category) => (
              <Card key={category.category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-2 border rounded"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.type} • {item.size}
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Precisa de Mais Informações?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            A nossa equipa está disponível para fornecer recursos adicionais e apoio especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="w-5 h-5 mr-2" />
              Contactar Equipa
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Solicitar Parceria
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VISIT ANGOLA</h3>
              <p className="text-sm opacity-75">
                Recursos e ferramentas para o desenvolvimento do turismo em Angola.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Campanhas</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/recursos/campanhas" className="hover:text-accent">
                    Campanhas Ativas
                  </Link>
                </li>
                <li>
                  <Link href="/recursos/marketing" className="hover:text-accent">
                    Material Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/recursos/imprensa" className="hover:text-accent">
                    Kit Imprensa
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Parcerias</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/recursos/internacionais" className="hover:text-accent">
                    Parceiros Internacionais
                  </Link>
                </li>
                <li>
                  <Link href="/recursos/cooperacao" className="hover:text-accent">
                    Cooperação
                  </Link>
                </li>
                <li>
                  <Link href="/recursos/projetos" className="hover:text-accent">
                    Projetos Conjuntos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Downloads</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/recursos/documentos" className="hover:text-accent">
                    Documentos Oficiais
                  </Link>
                </li>
                <li>
                  <Link href="/recursos/relatorios" className="hover:text-accent">
                    Relatórios
                  </Link>
                </li>
                <li>
                  <Link href="/recursos/estatisticas" className="hover:text-accent">
                    Estatísticas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 Visit Angola. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
