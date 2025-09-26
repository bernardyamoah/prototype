'use client'

import ActivityCard from '@/components/cards/activity-card'
import TouristSiteCard from '@/components/cards/tour-card'
import AnimatedDividerBar from '@/components/divide-bar'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Event } from '@/payload-types'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function Facilidades({ featuredEvents }: { featuredEvents: Event[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on('select', () => setCurrent(api.selectedScrollSnap()))
  }, [api])

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
  return (
    <>
      {featuredEvents && featuredEvents.length > 0 && (
        <section className="relative  pb-20 overflow-hidden">
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
                {featuredEvents.map((site, index) => (
                  <CarouselItem key={site.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <TouristSiteCard
                        event={site}
                        isActive={Math.abs(index - (current - 1)) <= 1}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {featuredEvents.map((_, index) => (
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
      )}
    
    </>
  )
}
