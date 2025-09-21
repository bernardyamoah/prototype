'use client'
import KeyFactCard from '@/components/cards/key-fact-card'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Award, Calendar, Flag, Globe, MapPin, Users } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const keyFacts = [
  {
    label: 'Independência',
    value: '11 de Novembro de 1975',
    icon: Calendar,
  },
  {
    label: 'Capital',
    value: 'Luanda',
    icon: MapPin,
  },
  {
    label: 'População',
    value: '35+ milhões',
    icon: Users,
  },
  {
    label: 'Área',
    value: '1.246.700 km²',
    icon: Globe,
  },
  {
    label: 'Língua Oficial',
    value: 'Português',
    icon: Flag,
  },
  {
    label: 'Moeda',
    value: 'Kwanza (AOA)',
    icon: Award,
  },
]

const KeyFactsCarousel = () => {
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
    <div className="mb-16 max-w-(--breakpoint-xl) mx-auto">
      <div className="w-full flex flex-col">
        <Carousel
          setApi={setApi}
          className="flex justify-center"
          plugins={[
            Autoplay({
              delay: 4000,
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
          <CarouselContent className="-ml-6 h-full w-full p-3">
            {keyFacts.map((fact, index) => (
              <CarouselItem key={fact.label} className="pl-6 sm:basis-1/3 md:basis-1/4 ">
                <KeyFactCard item={fact} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="hidden lg:flex -left-0 border-2 border-[#2356a3] text-[#2356a3] hover:bg-[#2356a3] hover:text-white 
          "
          />
          <CarouselNext className="hidden lg:flex -right-0 border-2 border-[#2356a3] text-[#2356a3] hover:bg-[#2356a3] hover:text-white" />
        </Carousel>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 gap-2">
        {keyFacts.map((_, index) => (
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
    </div>
  )
}

export default KeyFactsCarousel
