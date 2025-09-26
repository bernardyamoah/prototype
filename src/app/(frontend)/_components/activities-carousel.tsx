'use client'

import ActivityCard from '@/components/cards/activity-card'
import AnimatedDividerBar from '@/components/divide-bar'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function ActivitiesCarousel({ activities }: { activities: any[] }) {
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

  if (!activities || activities.length == 0) return null
  return (
    <section className="pb-20">
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
        <Carousel setApi={setApi} className="w-full" opts={{ align: 'center', loop: true }}>
          <CarouselContent className="-ml-8">
            {activities.map((activity, index) => (
              <CarouselItem key={activity.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <ActivityCard item={activity} isActive={Math.abs(index - (current - 1)) <= 1} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots Navigation */}
        <motion.div
          className="flex justify-center mt-12 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {activities.map((_, index) => (
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
    </section>
  )
}
