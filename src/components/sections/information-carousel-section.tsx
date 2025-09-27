'use client'
import AnimatedDividerBar from '@/components/divide-bar'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { PageSection } from '@/payload-types'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import SectionCard from '../../app/(frontend)/_components/section-card'



const InformationCarouselSection = ({ section }: { section: PageSection }) => {
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
    <div className="pb-20 px-4">
      <div className="max-w-(--breakpoint-xl) w-full  mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedDividerBar color="bg-[#2356a3]" maxHeight={70} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{section.heading}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{section.subheading}</p>
        </motion.div>

        {section.information_cards && (
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
                {section.information_cards.map((item, index) => (
                  <CarouselItem key={item.title} className="pl-6 sm:basis-1/2 md:basis-1/3 ">
                    <SectionCard item={item} index={index} />
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
        )}

        {/* Dots Navigation */}
        {section.information_cards && (
          <div className="flex justify-center mt-8 gap-2">
            {section.information_cards.map((_, index) => (
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
        )}
      </div>
    </div>
  )
}

export default InformationCarouselSection
