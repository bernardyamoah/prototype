'use client'
import AnimatedDividerBar from '@/components/divide-bar'

import { Building2, Factory, Globe, Home, Leaf, Zap } from 'lucide-react'

import InvestmentCard from '@/components/cards/investment-card'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const investmentSectors = [
  {
    name: 'Agricultura',
    icon: <Leaf className="w-8 h-8" />,
    description:
      'Oportunidades de investimento no setor agrícola com vastas terras férteis e clima favorável.',
    opportunities: [
      'Produção de cereais e leguminosas',
      'Cultivo de frutas tropicais',
      'Pecuária e aquacultura',
      'Processamento de alimentos',
    ],
    investment: '€50M - €500M',
    roi: '15-25%',
    image: '/placeholder.svg?height=300&width=400&text=Agriculture',
  },
  {
    name: 'Energia',
    icon: <Zap className="w-8 h-8" />,
    description:
      'Potencial energético diversificado com recursos petrolíferos, hídricos e solares.',
    opportunities: [
      'Energia solar e eólica',
      'Projetos hidroelétricos',
      'Distribuição de energia',
      'Eficiência energética',
    ],
    investment: '€100M - €1B',
    roi: '12-20%',
    image: '/placeholder.svg?height=300&width=400&text=Energy',
  },
  {
    name: 'Imóveis',
    icon: <Home className="w-8 h-8" />,
    description: 'Crescimento urbano acelerado cria oportunidades no setor imobiliário.',
    opportunities: [
      'Habitação social',
      'Complexos comerciais',
      'Hotéis e resorts',
      'Infraestruturas urbanas',
    ],
    investment: '€10M - €200M',
    roi: '18-30%',
    image: '/placeholder.svg?height=300&width=400&text=Real+Estate',
  },
  {
    name: 'Turismo',
    icon: <Globe className="w-8 h-8" />,
    description: 'Potencial turístico inexplorado com paisagens únicas e rica cultura.',
    opportunities: [
      'Hotéis e lodges',
      'Operadores turísticos',
      'Parques temáticos',
      'Turismo ecológico',
    ],
    investment: '€5M - €100M',
    roi: '20-35%',
    image: '/placeholder.svg?height=300&width=400&text=Tourism',
  },
  {
    name: 'Tecnologia',
    icon: <Building2 className="w-8 h-8" />,
    description: 'Transformação digital e inovação tecnológica em crescimento.',
    opportunities: [
      'Fintech e pagamentos digitais',
      'E-commerce e logística',
      'Telecomunicações',
      'Software e aplicações',
    ],
    investment: '€1M - €50M',
    roi: '25-40%',
    image: '/placeholder.svg?height=300&width=400&text=Technology',
  },
  {
    name: 'Indústria',
    icon: <Factory className="w-8 h-8" />,
    description: 'Diversificação industrial com foco na transformação de matérias-primas.',
    opportunities: [
      'Processamento de minerais',
      'Indústria têxtil',
      'Produtos químicos',
      'Equipamentos industriais',
    ],
    investment: '€20M - €300M',
    roi: '15-25%',
    image: '/placeholder.svg?height=300&width=400&text=Industry',
  },
]
const GuiDasIndustriasCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [_, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const goToSlide = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <section className="max-w-(--breakpoint-xl) mx-auto w-full ">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <AnimatedDividerBar color="bg-[#2356a3]" maxHeight={70} />
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#2356a3]  mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Guia das Indústrias
        </motion.h2>
      </motion.div>
      <div className="w-full flex flex-col  ">
        <Carousel
          setApi={setApi}
          className="flex "
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: 'center',
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="-ml-6 h-full p-3">
            {investmentSectors.map((sector, index) => (
              <CarouselItem key={sector.name} className="pl-6 sm:basis-1/3 md:basis-1/4 ">
                <InvestmentCard item={sector} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="hidden lg:flex -left-10 border-2 border-[#2356a3] text-[#2356a3] hover:bg-[#2356a3] hover:text-white 
          "
          />
          <CarouselNext className="hidden lg:flex -right-10 border-2 border-[#2356a3] text-[#2356a3] hover:bg-[#2356a3] hover:text-white" />
        </Carousel>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 gap-2">
        {investmentSectors.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-300 rounded-full"
            aria-label={`Ir para o slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              width: index === current - 1 ? 48 : 12,
              height: 12,
              backgroundColor: index === current - 1 ? '#2356a3' : '#2356a3',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </section>
  )
}
export default GuiDasIndustriasCarousel
