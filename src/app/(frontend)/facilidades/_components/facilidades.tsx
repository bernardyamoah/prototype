'use client'

import ActivityCard from '@/components/cards/activity-card'
import TouristSiteCard from '@/components/cards/tour-card'
import TouristPackageCard from '@/components/cards/tour-package'
import AnimatedDividerBar from '@/components/divide-bar'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { TouristPackage } from '@/payload-types'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function Facilidades({ touristPackages }: { touristPackages: TouristPackage[] }) {
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
  return (
    <>
      {' '}
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
              {touristPackages.map((pkg, index) => (
                <CarouselItem key={pkg.id} className="pl-8 md:basis-1/2 lg:basis-1/3">
                  <TouristPackageCard package={pkg} isActive={Math.abs(index - (current - 1)) <= 1} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {touristPackages.map((_, index) => (
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
    </>
  )
}
