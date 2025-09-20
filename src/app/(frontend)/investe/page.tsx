'use client'

import { HeroSection } from '@/components/hero-section'
import BusinessCreationAngolaCarousel from './_components/business-creation-angola'
import GuiDasIndustriasCarousel from './_components/guia-das-industrias'
import PorqueAngolaCarousel from './_components/porque-angola'

export default function InvestePage() {
  const businessSteps = [
    {
      step: '1',
      title: 'Registo da Empresa',
      description: 'Registe a sua empresa no Guichê Único da Empresa (GUE) em 24-48 horas.',
      documents: [
        'Estatutos da empresa',
        'Identificação dos sócios',
        'Comprovativo de capital social',
      ],
      duration: '1-2 dias',
      cost: '€200 - €500',
    },
    {
      step: '2',
      title: 'Licenciamento',
      description: 'Obtenha as licenças necessárias conforme o setor de atividade.',
      documents: ['Alvará comercial', 'Licenças específicas', 'Certificados ambientais'],
      duration: '2-4 semanas',
      cost: '€500 - €2,000',
    },
    {
      step: '3',
      title: 'Questões Fiscais',
      description: 'Registe-se nas finanças e obtenha o número de identificação fiscal.',
      documents: [
        'NIF da empresa',
        'Registo na Segurança Social',
        'Declaração de início de atividade',
      ],
      duration: '1 semana',
      cost: '€100 - €300',
    },
    {
      step: '4',
      title: 'Conta Bancária',
      description: 'Abra conta bancária empresarial e deposite o capital social mínimo.',
      documents: [
        'Documentos da empresa',
        'Identificação dos signatários',
        'Comprovativo de morada',
      ],
      duration: '3-5 dias',
      cost: '€50 - €200',
    },
  ]

  const incentives = [
    {
      title: 'Isenções Fiscais',
      description: 'Reduções ou isenções de impostos para investimentos em setores prioritários.',
      benefit: 'Até 50% de redução',
      sectors: ['Agricultura', 'Indústria', 'Turismo'],
    },
    {
      title: 'Facilidades Cambiais',
      description: 'Acesso facilitado a divisas para importação de equipamentos e matérias-primas.',
      benefit: 'Acesso prioritário',
      sectors: ['Todos os setores'],
    },
    {
      title: 'Terrenos Industriais',
      description: 'Disponibilização de terrenos em zonas industriais a preços preferenciais.',
      benefit: 'Preços reduzidos',
      sectors: ['Indústria', 'Logística'],
    },
    {
      title: 'Formação Profissional',
      description: 'Programas de capacitação de recursos humanos em parceria com o Estado.',
      benefit: 'Cofinanciamento',
      sectors: ['Todos os setores'],
    },
  ]

  return (
    <div className="min-h-screen ">
      <HeroSection
        title="Invista"
        subtitle="De um lado oportunidades de negócio"
        // backgroundImage="/placeholder.svg?height=600&width=1200&text=Business+Angola"
        backgroundImage="/investe.jpg"
      />
      <div className="bg-[#f2f7fc] pb-20 px-4">
        <PorqueAngolaCarousel />
      </div>

      <div className="bg-[#f7f0df] pb-20 px-4">
        <BusinessCreationAngolaCarousel />
      </div>
      <div className="bg-[#fefefe] pb-20 px-4">
        <GuiDasIndustriasCarousel />
      </div>
    </div>
  )
}
