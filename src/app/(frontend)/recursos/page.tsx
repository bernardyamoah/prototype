import { HeroSection } from '@/components/hero-section'

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
    </div>
  )
}
