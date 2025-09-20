'use client'

import ActivityCard from '@/components/cards/activity-card'
import SpecialPackageCard from '@/components/cards/special-package-card'
import AnimatedDividerBar from '@/components/divide-bar'
import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import {
  Building,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileText,
  Globe,
  Heart,
  MapPin,
  Phone,
  Plane,
  Shield,
  Shirt,
  Thermometer,
  Wifi,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function FacilidadesPage() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on('select', () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const packages = [
    {
      id: 1,
      title: 'Aventura nas Montanhas',
      description:
        'Explore as paisagens montanhosas mais impressionantes de Angola com guias especializados.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Cristo Rei de Lubango',
      description:
        'Visite o famoso monumento Cristo Rei com vistas panorâmicas espetaculares da cidade.',
      image:
        'https://images.unsplash.com/photo-1558917551-823a97f3d4c5?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Paisagens Únicas',
      description:
        'Descubra formações geológicas extraordinárias e paisagens que só Angola oferece.',
      image:
        'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?q=80&w=2070&auto=format&fit=crop',
    },
  ]
  const activities = [
    {
      id: 1,
      title: 'Vida Noturna',
      description:
        'Explore a vibrante vida noturna de Luanda com os melhores bares e restaurantes.',
      image:
        'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Skyline de Luanda',
      description: 'Admire as vistas espetaculares do skyline moderno da capital angolana.',
      image:
        'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Cultura Local',
      description: 'Mergulhe na rica cultura angolana através de experiências autênticas.',
      image:
        'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Arquitetura',
      description: 'Descubra a arquitetura única que mistura tradição e modernidade.',
      image:
        'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop',
    },
  ]
  const visaTypes = [
    {
      type: 'Visto de Turismo',
      duration: '30 dias',
      price: '€120',
      requirements: [
        'Passaporte válido',
        'Foto 3x4',
        'Comprovativo de alojamento',
        'Bilhete de ida e volta',
      ],
      processing: '5-7 dias úteis',
    },
    {
      type: 'Visto de Negócios',
      duration: '90 dias',
      price: '€200',
      requirements: [
        'Passaporte válido',
        'Carta convite',
        'Comprovativo financeiro',
        'Certificado médico',
      ],
      processing: '7-10 dias úteis',
    },
    {
      type: 'Visto de Trânsito',
      duration: '72 horas',
      price: '€60',
      requirements: ['Passaporte válido', 'Bilhete de continuação', 'Visto do país de destino'],
      processing: '2-3 dias úteis',
    },
  ]

  const practicalInfo = [
    {
      category: 'Moeda',
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Kwanza Angolano (AOA)',
      details: [
        '1 EUR ≈ 850 AOA (taxa variável)',
        'Cartões aceites em hotéis e restaurantes',
        'ATMs disponíveis nas principais cidades',
        'Recomenda-se levar euros ou dólares',
      ],
    },
    {
      category: 'Clima',
      icon: <Thermometer className="w-6 h-6" />,
      title: 'Tropical com duas estações',
      details: [
        'Estação seca: Maio a Outubro (15-25°C)',
        'Estação chuvosa: Novembro a Abril (20-30°C)',
        'Costa mais fresca que o interior',
        'Melhor época: Maio a Setembro',
      ],
    },
    {
      category: 'Internet',
      icon: <Wifi className="w-6 h-6" />,
      title: 'WiFi e Conectividade',
      details: [
        'WiFi disponível em hotéis e restaurantes',
        'Cobertura 4G nas principais cidades',
        'Cartões SIM disponíveis no aeroporto',
        'Operadoras: Unitel, Movicel, Africell',
      ],
    },
    {
      category: 'Embaixadas',
      icon: <Building className="w-6 h-6" />,
      title: 'Representações Diplomáticas',
      details: [
        'Embaixada de Portugal: +244 222 396 400',
        'Embaixada do Brasil: +244 222 334 516',
        'Embaixada dos EUA: +244 222 641 000',
        'Consulado Geral França: +244 222 334 500',
      ],
    },
    {
      category: 'Emergência',
      icon: <Phone className="w-6 h-6" />,
      title: 'Números de Emergência',
      details: [
        'Polícia Nacional: 113',
        'Bombeiros: 115',
        'Emergência Médica: 112',
        'Proteção Civil: 199',
      ],
    },
    {
      category: 'Etiqueta',
      icon: <Heart className="w-6 h-6" />,
      title: 'Saudações e Costumes',
      details: [
        'Cumprimento com aperto de mão',
        'Respeito pelos mais velhos',
        'Pontualidade valorizada nos negócios',
        'Hospitalidade é característica cultural',
      ],
    },
    {
      category: 'Vestuário',
      icon: <Shirt className="w-6 h-6" />,
      title: 'Código de Vestimenta',
      details: [
        'Roupas leves e confortáveis',
        'Proteção solar essencial',
        'Vestuário formal para negócios',
        'Respeitar locais religiosos',
      ],
    },
    {
      category: 'Idiomas',
      icon: <Globe className="w-6 h-6" />,
      title: 'Línguas Faladas',
      details: [
        'Português (oficial)',
        'Umbundu, Kimbundu, Kikongo',
        'Inglês em hotéis e turismo',
        'Francês em algumas regiões',
      ],
    },
    {
      category: 'Saúde',
      icon: <Heart className="w-6 h-6" />,
      title: 'Cuidados de Saúde',
      details: [
        'Vacina febre amarela obrigatória',
        'Profilaxia malária recomendada',
        'Seguro saúde internacional',
        'Hospitais privados em Luanda',
      ],
    },
    {
      category: 'Segurança',
      icon: <Shield className="w-6 h-6" />,
      title: 'Dicas de Segurança',
      details: [
        'Evitar ostentação de valores',
        'Não sair sozinho à noite',
        'Usar transportes recomendados',
        'Registar-se na embaixada',
      ],
    },
  ]

  const culturalEvents = [
    {
      month: 'Janeiro',
      events: [
        { name: 'Festival de Música de Luanda', date: '15-20 Jan', type: 'Música' },
        { name: 'Carnaval de Luanda', date: '25-28 Jan', type: 'Cultural' },
      ],
    },
    {
      month: 'Março',
      events: [
        { name: 'Festival de Cinema', date: '10-15 Mar', type: 'Arte' },
        { name: 'Feira de Artesanato', date: '20-25 Mar', type: 'Artesanato' },
      ],
    },
    {
      month: 'Maio',
      events: [
        { name: 'Festival Gastronómico', date: '5-10 Mai', type: 'Gastronomia' },
        { name: 'Semana Cultural', date: '15-22 Mai', type: 'Cultural' },
      ],
    },
    {
      month: 'Agosto',
      events: [
        { name: 'Festival de Dança', date: '12-18 Ago', type: 'Dança' },
        { name: 'Mostra de Arte Contemporânea', date: '25-30 Ago', type: 'Arte' },
      ],
    },
    {
      month: 'Novembro',
      events: [
        { name: 'Independência Nacional', date: '11 Nov', type: 'Nacional' },
        { name: 'Festival de Literatura', date: '20-25 Nov', type: 'Literatura' },
      ],
    },
    {
      month: 'Dezembro',
      events: [
        { name: 'Festival de Fim de Ano', date: '28-31 Dez', type: 'Celebração' },
        { name: 'Mercado de Natal', date: '15-24 Dez', type: 'Cultural' },
      ],
    },
  ]

  const specialPackages = [
    {
      title: 'Pacote Descoberta',
      duration: '7 dias',
      price: '€1,200',
      includes: ['Voos internos', 'Alojamento 4*', 'Tours guiados', 'Refeições'],
      destinations: ['Luanda', 'Benguela', 'Tundavala'],
      image: '/placeholder.svg?height=200&width=300&text=Discovery+Package',
    },
    {
      title: 'Aventura Selvagem',
      duration: '10 dias',
      price: '€2,500',
      includes: ['Safari Kissama', 'Lodge eco', 'Guia especializado', 'Equipamento'],
      destinations: ['Kissama', 'Kalandula', 'Namibe'],
      image: '/placeholder.svg?height=200&width=300&text=Safari+Package',
    },
    {
      title: 'Cultura e História',
      duration: '5 dias',
      price: '€800',
      includes: ['Museus', 'Sítios históricos', 'Hotel boutique', 'Guia cultural'],
      destinations: ['Luanda', 'Mbanza Congo', 'Fortalezas'],
      image: '/placeholder.svg?height=200&width=300&text=Culture+Package',
    },
  ]

  return (
    <div className="min-h-screen mx-auto">
      <HeroSection
        title="Facilidades"
        subtitle="Ao chegar em Angola - Tudo o que precisa saber para uma viagem perfeita"
        // backgroundImage="/placeholder.svg?height=600&width=1200&text=Angola+Airport"
        backgroundImage="/facilidades-2.jpg"
        textColor="text-[#feec00]"
      />

      {/* Guia de Vistos */}
      <section className="hidden py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Guia de Vistos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Informações completas sobre os requisitos de visto para visitar Angola.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visaTypes.map((visa) => (
              <Card key={visa.type} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    {visa.type}
                  </CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{visa.duration}</Badge>
                    <span className="text-2xl font-bold text-primary">{visa.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">Documentos necessários:</p>
                      <ul className="space-y-1">
                        {visa.requirements.map((req) => (
                          <li key={req} className="text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>Processamento:</strong> {visa.processing}
                      </p>
                    </div>
                    <Button className="w-full">Solicitar Visto</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informações Práticas */}
      <section className="hidden py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Informações Práticas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tudo o que precisa saber para se preparar para a sua viagem a Angola.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practicalInfo.map((info) => (
              <Card key={info.category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <div className="text-primary mr-3">{info.icon}</div>
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {info.details.map((detail) => (
                      <li key={detail} className="text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes Especiais */}
      <section className="hidden py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pacotes Especiais
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experiências cuidadosamente planeadas para descobrir o melhor de Angola.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialPackages.map((pkg) => (
              <Card key={pkg.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <Badge variant="outline">{pkg.duration}</Badge>
                  </div>
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">Inclui:</p>
                      <ul className="space-y-1">
                        {pkg.includes.map((item) => (
                          <li key={item} className="text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Destinos:</p>
                      <div className="flex flex-wrap gap-1">
                        {pkg.destinations.map((dest) => (
                          <Badge key={dest} variant="secondary" className="text-xs">
                            {dest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Reservar Pacote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Cultural */}
      <section className="hidden py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Agenda Cultural</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Eventos culturais e festivais ao longo do ano em Angola.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalEvents.map((month) => (
              <Card key={month.month} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    {month.month}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {month.events.map((event) => (
                      <div key={event.name} className="border-l-2 border-primary pl-3">
                        <h4 className="font-semibold text-sm">{event.name}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-muted-foreground">{event.date}</span>
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reservas de Voos */}
      <section className="hidden py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reservas de Voos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Informações sobre companhias aéreas e aeroportos em Angola.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Plane className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Companhias Aéreas</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      airline: 'TAAG Angola Airlines',
                      routes: 'Voos domésticos e internacionais',
                      hub: 'Luanda',
                    },
                    { airline: 'TAP Air Portugal', routes: 'Lisboa - Luanda', hub: 'Lisboa' },
                    { airline: 'Emirates', routes: 'Dubai - Luanda', hub: 'Dubai' },
                    {
                      airline: 'Ethiopian Airlines',
                      routes: 'Addis Ababa - Luanda',
                      hub: 'Addis Ababa',
                    },
                  ].map((airline) => (
                    <div key={airline.airline} className="border-l-2 border-primary pl-3">
                      <h4 className="font-semibold">{airline.airline}</h4>
                      <p className="text-sm text-muted-foreground">{airline.routes}</p>
                      <p className="text-xs text-muted-foreground">Hub: {airline.hub}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Principais Aeroportos</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      airport: 'Aeroporto Internacional 4 de Fevereiro',
                      city: 'Luanda',
                      code: 'LAD',
                    },
                    { airport: 'Aeroporto de Benguela', city: 'Benguela', code: 'BUG' },
                    { airport: 'Aeroporto de Lubango', city: 'Lubango', code: 'SDD' },
                    { airport: 'Aeroporto de Cabinda', city: 'Cabinda', code: 'CAB' },
                  ].map((airport) => (
                    <div key={airport.airport} className="border-l-2 border-primary pl-3">
                      <h4 className="font-semibold">{airport.airport}</h4>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">{airport.city}</p>
                        <Badge variant="outline" className="text-xs">
                          {airport.code}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg">Pesquisar Voos</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hidden py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para a sua Aventura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Com todas as informações necessárias, está pronto para descobrir Angola. Comece a
            planear hoje!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contactar Suporte
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Descarregar Guia
            </Button>
          </div>
        </div>
      </section>

      <section className="relative mt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 flex flex-col">
          <AnimatedDividerBar color="bg-white" className="mb-8 mx-auto" />

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pacotes Especiais
          </motion.h2>

          {/* Custom Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => api?.scrollPrev()}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => api?.scrollNext()}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <Carousel setApi={setApi} className="w-full" opts={{ align: 'center', loop: true }}>
            <CarouselContent className="-ml-8">
              {packages.map((pkg, index) => (
                <CarouselItem key={pkg.id} className="pl-8 md:basis-1/2 lg:basis-1/3">
                  <SpecialPackageCard item={pkg} isActive={index === current} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedDividerBar color="bg-blue-600" className="mb-8" />

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              O que fazer em Luanda
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ActivityCard item={activity} isActive={true} />
              </motion.div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-12 gap-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === 0 ? 'w-8 bg-gray-800' : 'w-2 bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
