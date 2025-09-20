'use client'
import AnimatedDividerBar from '@/components/divide-bar'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Building2,
  Factory,
  Globe,
  Home,
  Leaf,
  Zap,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import Image from 'next/image'
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

    image:
      'https://images.unsplash.com/photo-1602516818688-715dfc1b77d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-green-600',
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

    image:
      'https://images.unsplash.com/photo-1616595707747-6b3c0fd3af74?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-yellow-600',
  },
  {
    name: 'Imóveis',
    icon: <Home className="w-8 h-8" />,
    description:
      'Oportunidades de investimento em projetos turísticos e outros setores, incluindo detalhes sobre financiamento e incentivos fiscais.',
    opportunities: [
      'Habitação social',
      'Complexos comerciais',
      'Hotéis e resorts',
      'Infraestruturas urbanas',
    ],
    investment: '€10M - €200M',

    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'bg-[#2356a3]',
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
    image: '/placeholder.svg?height=400&width=600&text=Tourism',
    color: 'bg-blue-600',
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

    image:
      'https://images.unsplash.com/photo-1723743135553-3459f13431fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-purple-600',
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

    image: '/placeholder.svg?height=400&width=600&text=Industry',
    color: 'bg-gray-600',
  },
]
const BusinessCreationAngolaCarousel = () => {
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
  const handleNext = () => {
    api?.scrollNext()
  }
  const handlePrevious = () => {
    api?.scrollPrev()
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
          Criar empresa em Angola
        </motion.h2>
      </motion.div>
      <div className="w-full flex flex-col  ">
        <div className="flex gap-4  lg:grid grid-cols-4 flex-col">
          <div className="lg:col-span-1 w-full">
            {/* Navigation arrows */}
            <div className="mb-30">
              <div className="flex gap-4">
                <Button
                  disabled={!api?.canScrollPrev}
                  onClick={() => {
                    handlePrevious()
                  }}
                  variant={'ghost'}
                  size={'icon'}
                  className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </Button>
                <Button
                  variant={'ghost'}
                  size={'icon'}
                  disabled={!api?.canScrollNext}
                  onClick={() => {
                    handleNext()
                  }}
                  className="bg-[#2356a3] p-3 rounded-full hover:bg-[#2356a3]/80 transition-colors "
                >
                  <ArrowRightIcon className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>
            <motion.h3
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Abrir a sua empresa em Angola é fácil.
            </motion.h3>

            <p className="text-gray-600 mb-6">Vários motivos para investir em Angola. saiba mais</p>
          </div>

          <Carousel
            setApi={setApi}
            className="flex lg:col-span-3"
            plugins={[
              Autoplay({
                delay: 3000,
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
            <CarouselContent className="h-full">
              {investmentSectors.map((sector, index) => (
                <CarouselItem
                  key={sector.name}
                  className="overflow-hidden rounded-3xl md:basis-1/2 h-[450px] "
                  // className={`pl-4 transition-all duration-500 ${
                  //   index === current - 1 ? 'basis-1/2 md:basis-3/5' : 'basis-1/4 md:basis-1/5'
                  // }`}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{
                      scale: index === current - 1 ? 1 : 0.9,
                    }}
                    className="h-full"
                    transition={{ duration: 0.5 }}
                  >
                    {/* Main featured card - larger */}
                    {index === current - 1 && (
                      <div className=" h-full rounded-3xl overflow-hidden group transition-all duration-500 transform ">
                        <div className="relative h-full ">
                          <Image
                            height={450}
                            width={450}
                            src={sector.image}
                            alt={sector.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                          {/* Content overlay */}
                          <div className="absolute bottom-0  flex flex-col justify-between p-6">
                            <div
                              className={`hidden self-start ${sector.color} p-3 rounded-xl shadow-lg`}
                            >
                              <div className="text-white">{sector.icon}</div>
                            </div>

                            <div className="text-white">
                              <h3 className="text-2xl font-bold mb-2">{sector.name}</h3>
                              <p className="text-sm opacity-90 line-clamp-3">
                                {sector.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Side cards - smaller */}
                    {index !== current - 1 && (
                      <div
                        className="rounded-3xl h-full overflow-hidden group transition-all duration-300 cursor-pointer opacity-70 hover:opacity-90"
                        onClick={() => goToSlide(index)}
                      >
                        <div className="relative h-full">
                          <div
                            className={`${sector.color} h-full flex flex-col justify-between p-4`}
                          >
                            <div className="text-white">{sector.icon}</div>

                            <div className="text-white">
                              <h3 className="text-lg font-bold mb-2">{sector.name}</h3>
                              <p className="text-xs opacity-90 line-clamp-2">
                                {sector.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-16 gap-2">
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
                backgroundColor: index === current - 1 ? '#2356a3' : '#94a3b8',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default BusinessCreationAngolaCarousel
