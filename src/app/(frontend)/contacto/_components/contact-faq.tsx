'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Bed,
  Building,
  Calendar,
  Car,
  DollarSign,
  FileText,
  Globe,
  Heart,
  HelpCircle,
  MapPin,
  Search,
  Shield,
  Smartphone,
} from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
  category?: string
}

interface ContactFAQProps {
  faqs?: any[]
}

const defaultFAQs: FAQ[] = [
  {
    question: 'Qual é o melhor período para visitar Angola?',
    answer:
      'Angola pode ser visitada durante todo o ano, mas a estação seca (maio a outubro) oferece condições mais favoráveis para turismo, com menos chuvas e temperaturas mais amenas. A estação das chuvas (novembro a abril) oferece paisagens mais verdes, mas pode dificultar alguns deslocamentos.',
    category: 'Turismo',
  },
  {
    question: 'Preciso de visto para visitar Angola?',
    answer:
      'Sim, a maioria dos visitantes precisa de visto. Cidadãos da SADC podem obter visto na chegada. Para outros países, é necessário solicitar visto antecipadamente no consulado angolano. Recomendamos verificar os requisitos específicos para o seu país de origem.',
    category: 'Documentação',
  },
  {
    question: 'Que moeda é usada em Angola e onde posso trocar dinheiro?',
    answer:
      'A moeda oficial é o Kwanza (AOA). Pode trocar dinheiro em bancos, casas de câmbio autorizadas e alguns hotéis. Cartões de crédito são aceites em estabelecimentos maiores em Luanda, mas recomendamos levar dinheiro para áreas rurais.',
    category: 'Finanças',
  },
  {
    question: 'É seguro viajar em Angola?',
    answer:
      'Angola é geralmente segura para turistas, especialmente nas principais cidades e destinos turísticos. Recomendamos precauções normais: não exibir objetos de valor, evitar áreas isoladas à noite e seguir orientações locais. A Polícia de Turismo está disponível para assistência.',
    category: 'Segurança',
  },
  {
    question: 'Que vacinas preciso para viajar para Angola?',
    answer:
      'A vacina contra a febre amarela é obrigatória. Recomendamos também vacinas contra hepatite A e B, tétano, e profilaxia contra malária. Consulte um médico especialista em medicina de viagem pelo menos 4-6 semanas antes da viagem.',
    category: 'Saúde',
  },
  {
    question: 'Como posso me deslocar dentro de Angola?',
    answer:
      'Opções incluem voos domésticos (mais rápido para longas distâncias), autocarros (económico mas demorado), rent-a-car (flexibilidade mas requer experiência), e tours organizados (recomendado para turistas). Estradas principais estão em bom estado.',
    category: 'Transporte',
  },
  {
    question: 'Que línguas são faladas em Angola?',
    answer:
      'O português é a língua oficial. Também se falam línguas nacionais como Umbundu, Kimbundu, Kikongo, entre outras. Nas áreas turísticas, alguns profissionais falam inglês, francês ou espanhol.',
    category: 'Cultura',
  },
  {
    question: 'Onde posso ficar hospedado em Angola?',
    answer:
      'Angola oferece desde hotéis de luxo internacionais em Luanda até pousadas locais e lodges de safari. Recomendamos reservar com antecedência, especialmente durante eventos ou época alta. Temos uma lista de alojamentos certificados.',
    category: 'Alojamento',
  },
  {
    question: 'Que documentos preciso para investir em Angola?',
    answer:
      'Para investimentos, são necessários: certidão de registo comercial, plano de negócios detalhado, comprovativo de capacidade financeira, documentos de identificação legalizados, e certificado de antecedentes criminais. O processo varia conforme o sector de investimento.',
    category: 'Investimento',
  },
  {
    question: 'Como posso obter informações sobre eventos culturais?',
    answer:
      'Consulte a nossa secção de eventos no website, siga as nossas redes sociais, subscreva a newsletter, ou contacte os centros de informação turística. Eventos principais incluem o Carnaval de Luanda, Festival de Música, e festivais tradicionais regionais.',
    category: 'Eventos',
  },
  {
    question: 'Existe apoio para empresários estrangeiros?',
    answer:
      'Sim, oferecemos apoio especializado através da AIPEX (Agência para o Investimento Privado e Promoção das Exportações), incluindo orientação sobre regulamentações, facilitação de contactos, apoio na obtenção de licenças, e informações sobre incentivos fiscais.',
    category: 'Investimento',
  },
  {
    question: 'Como funciona a comunicação e internet em Angola?',
    answer:
      'Angola tem boa cobertura de rede móvel nas principais cidades. Operadoras principais: Unitel, Movicel, e Angola Telecom. WiFi está disponível em hotéis, restaurantes e centros comerciais. Recomendamos adquirir um cartão SIM local para estadias longas.',
    category: 'Comunicação',
  },
]

const categories = [
  { name: 'Todos', icon: HelpCircle, color: 'default' },
  { name: 'Turismo', icon: MapPin, color: 'brand-orange' },
  { name: 'Documentação', icon: FileText, color: 'brand-green' },
  { name: 'Finanças', icon: DollarSign, color: 'brand-yellow' },
  { name: 'Segurança', icon: Shield, color: 'destructive' },
  { name: 'Saúde', icon: Heart, color: 'secondary' },
  { name: 'Transporte', icon: Car, color: 'primary' },
  { name: 'Cultura', icon: Globe, color: 'outline' },
  { name: 'Alojamento', icon: Bed, color: 'default' },
  { name: 'Investimento', icon: Building, color: 'brand-green' },
  { name: 'Eventos', icon: Calendar, color: 'brand-orange' },
  { name: 'Comunicação', icon: Smartphone, color: 'primary' },
]

export function ContactFAQ({ faqs }: ContactFAQProps) {
  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFAQs
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFaqs = displayFaqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'Todos' || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      {/* Header with Angola Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/visit-angola-logo.svg"
            alt="Visit Angola"
            width={60}
            height={60}
            className="mr-4"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground">Tudo o que precisa saber sobre Angola</p>
          </div>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar perguntas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const IconComponent = category.icon
            const isSelected = selectedCategory === category.name
            return (
              <Button
                key={category.name}
                variant={isSelected ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 ${isSelected ? 'bg-brand-orange hover:bg-brand-orange/90' : ''}`}
              >
                <IconComponent className="h-4 w-4" />
                {category.name}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.name === 'Todos'
                    ? displayFaqs.length
                    : displayFaqs.filter((faq) => faq.category === category.name).length}
                </Badge>
              </Button>
            )
          })}
        </div>
      </motion.div>

      {/* FAQ Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-brand-orange" />
              {selectedCategory === 'Todos'
                ? 'Todas as Perguntas'
                : `Perguntas sobre ${selectedCategory}`}
            </CardTitle>
            <CardDescription>
              {filteredFaqs.length === 0
                ? 'Nenhuma pergunta encontrada com os critérios selecionados.'
                : `${filteredFaqs.length} pergunta${filteredFaqs.length !== 1 ? 's' : ''} encontrada${filteredFaqs.length !== 1 ? 's' : ''}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-brand-orange">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          {faq.question}
                          {faq.category && (
                            <Badge variant="outline" className="ml-2 text-xs">
                              {faq.category}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8">
                <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Não encontrou a resposta que procura?</p>
                <Button variant="outline" className="mt-4" asChild>
                  <a href="mailto:info@visitangola.ao">Contacte-nos diretamente</a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-brand-orange/10 to-brand-yellow/10 p-6 rounded-lg border border-brand-orange/20"
      >
        <div className="text-center">
          <h3 className="font-semibold text-brand-orange mb-2">
            Não encontrou a resposta que procura?
          </h3>
          <p className="text-muted-foreground mb-4">
            A nossa equipa está pronta para ajudar com qualquer questão específica sobre Angola.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="mailto:info@visitangola.ao">Enviar Email</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+244923456789">Ligar Agora</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wa.me/244912345678" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
