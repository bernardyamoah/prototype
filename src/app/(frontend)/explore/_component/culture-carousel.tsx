'use client'

import AnimatedDividerBar from '@/components/divide-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'motion/react'

const culturalHighlights = [
  {
    title: 'Música Tradicional',
    description: 'Kizomba, Semba e outros ritmos que conquistaram o mundo.',
    icon: '🎵',
  },
  {
    title: 'Artesanato',
    description: 'Esculturas em madeira, cerâmica e tecidos tradicionais únicos.',
    icon: '🎨',
  },
  {
    title: 'Dança Folclórica',
    description: 'Expressões culturais ricas em movimento e tradição.',
    icon: '💃',
  },
  {
    title: 'Gastronomia',
    description: 'Sabores autênticos que refletem a diversidade cultural.',
    icon: '🍽️',
  },
]

export default function CultureCarousel() {
  return (
    <section className="pb-16">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4">
        <AnimatedDividerBar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Arte e Cultura</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mergulhe na rica herança cultural de Angola, com tradições milenares e expressões
            artísticas únicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {culturalHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="outline" size="sm">
                    Saiba Mais
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
