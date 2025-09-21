'use client'

import AnimatedDividerBar from '@/components/divide-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'motion/react'
import Link from 'next/link'

const tips = [
  {
    title: 'Melhor Época para Visitar',
    content:
      'Angola tem clima tropical. A estação seca (maio-outubro) é ideal para turismo, com temperaturas amenas e pouca chuva.',
    icon: '🌤️',
  },
  {
    title: 'O que Levar na Bagagem',
    content:
      'Roupas leves, protetor solar, repelente, calçado confortável e câmara fotográfica são essenciais.',
    icon: '🎒',
  },
  {
    title: 'Experiências Únicas',
    content:
      'Não perca o pôr do sol na Tundavala, um safari no Kissama e a gastronomia local em Luanda.',
    icon: '⭐',
  },
]

export default function TipsCarousel() {
  return (
    <section className="pb-16">
      <div className=" text-center max-w-(--breakpoint-xl) mx-auto px-4">
        <AnimatedDividerBar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dicas e Inspirações
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conselhos úteis e inspiração para tornar a sua viagem inesquecível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-0">
                  <div className="text-3xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/facilidades">Ver Todas as Dicas</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
