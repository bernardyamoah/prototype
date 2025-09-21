'use client'

import AnimatedDividerBar from '@/components/divide-bar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bed } from 'lucide-react'
import { motion } from 'motion/react'

const accommodationTypes = [
  {
    type: 'Hotéis de Luxo',
    description: 'Conforto e elegância nos melhores hotéis do país.',
    locations: ['Luanda', 'Benguela', 'Lubango'],
  },
  {
    type: 'Pousadas',
    description: 'Acomodações acolhedoras com toque local autêntico.',
    locations: ['Huambo', 'Malanje', 'Namibe'],
  },
  {
    type: 'Lodges Safari',
    description: 'Experiência única em contacto direto com a natureza.',
    locations: ['Kissama', 'Iona', 'Bicuar'],
  },
  {
    type: 'Apartamentos',
    description: 'Flexibilidade e independência para estadias prolongadas.',
    locations: ['Luanda', 'Benguela', 'Huambo'],
  },
]

export default function AccommodationsCarousel() {
  return (
    <section className="pb-16">
      <div className="max-w-(--breakpoint-xl) text-center mx-auto px-4">
        <AnimatedDividerBar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lugares para Ficar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Encontre a acomodação perfeita para a sua estadia em Angola.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {accommodationTypes.map((accommodation, index) => (
            <motion.div
              key={accommodation.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{accommodation.type}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{accommodation.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Bed className="w-4 h-4 mr-2 text-primary" />
                      <span>Disponível em:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {accommodation.locations.map((location) => (
                        <Badge key={location} variant="secondary" className="text-xs">
                          {location}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Ver Opções</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
