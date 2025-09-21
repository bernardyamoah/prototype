'use client'
import AnimatedDividerBar from '@/components/divide-bar'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const culturalHighlights = [
  {
    title: 'Diversidade Étnica',
    description:
      'Angola é lar de diversos grupos étnicos, incluindo Ovimbundu, Kimbundu, Bakongo e muitos outros.',
    image:
      'https://unsplash.com/photos/two-women-in-colorful-dresses-walking-down-a-street-zloPCBwUyN8',
  },
  {
    title: 'Música e Dança',
    description: 'Berço do Semba, Kizomba e outros ritmos que conquistaram o mundo.',
    image:
      'https://www.shutterstock.com/shutterstock/photos/429851071/display_1500/stock-photo-angola-luanda-march-group-of-the-angolan-women-improvise-a-street-concert-in-angola-429851071.jpg',
  },
  {
    title: 'Artesanato',
    description: 'Rica tradição em esculturas, máscaras, cerâmica e tecidos tradicionais.',
    image: 'https://i.pinimg.com/1200x/ab/02/bd/ab02bd5049eedfa224e32d70fdb4e839.jpg',
  },
  {
    title: 'Gastronomia',
    description: 'Culinária única com pratos como Muamba de Galinha, Calulu e Funge.',
    image: 'https://i.pinimg.com/1200x/39/a6/36/39a636d30b13f94a7b7f41292b360e8a.jpg',
  },
  {
    title: 'Arquitetura Colonial',
    description: 'Patrimônio arquitetônico único que conta a história de Angola.',
    image: 'https://i.pinimg.com/1200x/47/23/4b/47234b059434dbb0313fc451b3fe8bf4.jpg',
  },
  {
    title: 'Festivais Tradicionais',
    description: 'Celebrações culturais que preservam as tradições ancestrais.',
    image: 'https://i.pinimg.com/736x/7c/e3/35/7ce335d63349b362f296d2baf349b0a8.jpg',
  },
]

const PatrimonioCulturalCarousel = () => {
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
    <section className="max-w-(--breakpoint-xl) mx-auto w-full">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <AnimatedDividerBar color="bg-[#2356a3]" maxHeight={70} />
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#2356a3] mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Patrimônio Cultural
        </motion.h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <div className="flex gap-4 lg:grid grid-cols-4 flex-col">
          <div className="lg:col-span-1 w-full">
            {/* Navigation arrows */}
            <div className="mb-30">
              <div className="flex gap-4">
                <Button
                  disabled={!api?.canScrollPrev}
                  onClick={handlePrevious}
                  variant={'ghost'}
                  size={'icon'}
                  className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant={'ghost'}
                  size={'icon'}
                  disabled={!api?.canScrollNext}
                  onClick={handleNext}
                  className="bg-[#2356a3] p-3 rounded-full hover:bg-[#2356a3]/80 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>

            <motion.h3
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Rica Herança Cultural
            </motion.h3>

            <p className="text-gray-600 mb-6">
              A riqueza cultural de Angola reflete-se na sua música, dança, artesanato e tradições
              que atravessaram gerações.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            className="flex lg:col-span-3"
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
            <CarouselContent className="-ml-6 h-full p-3">
              {culturalHighlights.map((item, index) => (
                <CarouselItem key={item.title} className="pl-6 sm:basis-1/2 md:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl bg-gray-100  h-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {culturalHighlights.map((_, index) => (
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
    </section>
  )
}

export default PatrimonioCulturalCarousel
