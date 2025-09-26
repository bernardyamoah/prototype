'use client'
import TouristSiteCard from '@/components/cards/tour-card'
import AnimatedDividerBar from '@/components/divide-bar'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Event } from '@/payload-types'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const UniqueExperiencesInAngolaCarousel = ({ events }: { events: Event[] }) => {
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
    <div className="max-w-(--breakpoint-xl) w-full mx-auto  py-2">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <AnimatedDividerBar />
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experiências únicas em Angola
        </motion.h2>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: 'start',
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="-ml-6">
            {events.map((site, index) => (
              <CarouselItem key={site.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="h-full rounded-2xl overflow-hidden">
                  <TouristSiteCard event={site} isActive={Math.abs(index - (current - 1)) <= 1} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="left-0 bg-white/90 border-white/30 backdrop-blur-sm hover:bg-white text-gray-900 shadow-lg" />
            <CarouselNext className="right-0 bg-white/90 border-white/30 backdrop-blur-sm hover:bg-white text-gray-900 shadow-lg" /> */}
        </Carousel>

        {/* Navigation Dots */}
        <motion.div
          className="flex justify-center mt-12 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {events.map((_, index) => (
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
                backgroundColor: index === current - 1 ? '#000' : '#333',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default UniqueExperiencesInAngolaCarousel
