'use client'

import AnimatedDividerBar from '@/components/divide-bar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, MapPin } from 'lucide-react'
import { motion } from 'motion/react'

const destinations = [
  {
    name: 'Quedas de Kalandula',
    province: 'Malanje',
    description: 'Uma das maiores quedas de água de África, com 105 metros de altura.',
    season: 'Março - Maio',
    activities: ['Fotografia', 'Caminhadas', 'Observação'],
    image: '/placeholder.svg?height=300&width=400&text=Kalandula+Falls',
  },
  {
    name: 'Parque Nacional da Kissama',
    province: 'Bengo',
    description: 'Reserva natural com elefantes, girafas e outros animais selvagens.',
    season: 'Maio - Outubro',
    activities: ['Safari', 'Observação de animais', 'Fotografia'],
    image: '/placeholder.svg?height=300&width=400&text=Kissama+Park',
  },
  {
    name: 'Fenda da Tundavala',
    province: 'Huíla',
    description: 'Miradouro espetacular com vista panorâmica sobre o planalto.',
    season: 'Todo o ano',
    activities: ['Miradouro', 'Fotografia', 'Pôr do sol'],
    image: '/placeholder.svg?height=300&width=400&text=Tundavala+Gap',
  },
  {
    name: 'Ilha do Mussulo',
    province: 'Luanda',
    description: 'Península paradisíaca com praias de areia branca e águas cristalinas.',
    season: 'Maio - Setembro',
    activities: ['Praia', 'Desportos aquáticos', 'Relaxamento'],
    image: '/placeholder.svg?height=300&width=400&text=Mussulo+Island',
  },
  {
    name: 'Deserto do Namibe',
    province: 'Namibe',
    description: 'Paisagens desérticas únicas com dunas e formações rochosas.',
    season: 'Abril - Setembro',
    activities: ['Aventura', 'Fotografia', 'Exploração'],
    image: '/placeholder.svg?height=300&width=400&text=Namibe+Desert',
  },
  {
    name: 'Fortaleza de São Miguel',
    province: 'Luanda',
    description: 'Monumento histórico do século XVI com vista sobre a Baía de Luanda.',
    season: 'Todo o ano',
    activities: ['História', 'Cultura', 'Arquitetura'],
    image: '/placeholder.svg?height=300&width=400&text=Sao+Miguel+Fortress',
  },
]

export default function DestinationsCarousel() {
  return (
    <section className="pb-16">
      <div className="teext-center max-w-(--breakpoint-xl) teext-center mx-auto px-4">
        <AnimatedDividerBar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rotas Destino Angola
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore os destinos mais espetaculares de Angola, desde paisagens naturais deslumbrantes
            até sítios históricos únicos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{destination.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {destination.province}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{destination.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>Melhor época: {destination.season}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {destination.activities.map((activity) => (
                        <Badge key={activity} variant="outline" className="text-xs">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Explorar Destino</Button>
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
