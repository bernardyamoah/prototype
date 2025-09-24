'use client'

import { Button } from '@/components/ui/button'
import AnimatedDividerBar from '@/components/divide-bar'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'
export default function NotFoundContent() {
    return (
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-9xl font-bold text-primary">404</span>
        </motion.div>

        <AnimatedDividerBar width={120} maxHeight={6} color="bg-primary" className="mb-8" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Página não encontrada
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Parece que você se perdeu na sua jornada. A página que procura não existe ou foi movida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2" />
              Voltar para a página inicial
            </Link>
          </Button> */}

          <Button variant="outline" asChild size="lg">
            <Link href="/">
              <MapPin className="mr-2" />
              Explorar destinos
            </Link>
          </Button>
        </motion.div>
      </div>
    )
}