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
import { Award, Building2, MapPin, Users } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import SectionCard from './section-card'

const governmentStructure = [
  {
    title: 'Presidente da República',
    description: 'Chefe de Estado e do Executivo, eleito por sufrágio universal direto.',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
  },
  {
    title: 'Assembleia Nacional',
    description: 'Órgão legislativo unicameral com 220 deputados eleitos por 5 anos.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
  },
  {
    title: 'Tribunal Supremo',
    description: 'Órgão superior da hierarquia dos tribunais judiciais.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop',
  },
  {
    title: 'Províncias',
    description: '18 províncias com governadores nomeados pelo Presidente.',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  },
]

const SectionStructureCarousel = ({ section }: { section: PageSection }) => {
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

      {section.governmentCards && (
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
              {section.governmentCards.map((item, index) => (
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
      {section.governmentCards && (
        <div className="flex justify-center mt-8 gap-2">
          {section.governmentCards.map((_, index) => (
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
  )
}

export default SectionStructureCarousel
