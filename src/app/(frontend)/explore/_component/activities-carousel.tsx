'use client'

import AnimatedDividerBar from '@/components/divide-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Camera, Car, Utensils } from 'lucide-react'
import { motion } from 'motion/react'

const activityCategories = [
  {
    category: 'Aventura',
    icon: <Camera className="w-8 h-8" />,
    activities: ['Safari fotográfico', 'Caminhadas', 'Desportos aquáticos', 'Escalada'],
    image: '/placeholder.svg?height=200&width=300&text=Adventure',
  },
  {
    category: 'Gastronomia',
    icon: <Utensils className="w-8 h-8" />,
    activities: [
      'Tours gastronómicos',
      'Aulas de culinária',
      'Mercados locais',
      'Restaurantes típicos',
    ],
    image: '/placeholder.svg?height=200&width=300&text=Food',
  },
  {
    category: 'Mobilidade',
    icon: <Car className="w-8 h-8" />,
    activities: ['Aluguer de carros', 'Tours guiados', 'Transporte público', 'Transfers'],
    image: '/placeholder.svg?height=200&width=300&text=Transport',
  },
]

export default function ActivitiesCarousel() {
  return (
    <section className="pb-16">
      <div className="text-center max-w-(--breakpoint-xl) mx-auto px-4">
        <AnimatedDividerBar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Atividades e Experiências
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde aventuras na natureza até experiências culturais autênticas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {activityCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {category.activities.map((activity) => (
                      <li
                        key={activity}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver Opções
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
