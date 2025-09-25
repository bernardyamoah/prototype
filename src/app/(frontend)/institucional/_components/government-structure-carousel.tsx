'use client'
import GovernmentCard from '@/components/cards/government-card'
import AnimatedDividerBar from '@/components/divide-bar'
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

const governmentStructure = [
  {
    title: 'Presidente da República',
    description: 'Chefe de Estado e do Executivo, eleito por sufrágio universal direto.',
    icon: 'building-2',
    image: '/angolan-president.jpg',
  },
  {
    title: 'Assembleia Nacional',
    description: 'Órgão legislativo unicameral com 220 deputados eleitos por 5 anos.',
    icon: 'users',
    image: '/assemblia.jpg',
  },
  {
    title: 'Tribunal Supremo',
    description: 'Órgão superior da hierarquia dos tribunais judiciais.',
    icon: 'award',
    image: '/supreme-tribunal.jpg',
  },
  {
    title: 'Províncias',
    description: '18 províncias com governadores nomeados pelo Presidente.',
    icon: 'map-pin',
    image: '/angola-provinces.png',
  },
]

const GovernmentStructureCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [_, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const goToSlide = (index: number) => {
    api?.scrollTo(index)
  }

  // Map icon string to Lucide icon component

  return (
    <section className="pb-20 bg-[#f7f0df]">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedDividerBar color="bg-[#2356a3]" maxHeight={70} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Estrutura Governamental
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Angola é uma república presidencialista com separação de poderes e descentralização
            administrativa através das suas 18 províncias.
          </p>
        </motion.div>

        <div className="w-full flex flex-col">
          <Carousel
            setApi={setApi}
            className="flex"
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
              {governmentStructure.map((item, index) => (
                <CarouselItem key={item.title} className="pl-6 sm:basis-1/2 md:basis-1/3 ">
                  <GovernmentCard item={{ ...item }} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-10 border-2 border-[#2356a3] text-[#2356a3] hover:bg-[#2356a3] hover:text-white" />
            <CarouselNext className="hidden lg:flex -right-10 border-2 border-[#2356a3] text-[#2356a3] hover:bg-[#2356a3] hover:text-white" />
          </Carousel>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {governmentStructure.map((_, index) => (
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
                backgroundColor: index === current - 1 ? '#f97316' : '#f97316',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GovernmentStructureCarousel
