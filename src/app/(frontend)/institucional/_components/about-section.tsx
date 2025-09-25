'use client'

import AnimatedDividerBar from '@/components/divide-bar'
import { motion } from 'motion/react'
import KeyFactsCarousel from '../_components/key-facts-carousel'

export default function AboutSection() {
  return (
    <section className="pb-20 bg-[#f2f7fc]">
      <div className=" mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-(--breakpoint-xl)  mx-auto text-center mb-16"
        >
          <AnimatedDividerBar color="bg-[#2356a3]" maxHeight={70} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">República de Angola</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Angola é um país da África Austral, rico em recursos naturais e diversidade cultural.
            Com uma história milenar e um futuro promissor, Angola oferece oportunidades únicas para
            investimento, turismo e cooperação internacional.
          </p>
        </motion.div>

        {/* Key Facts Carousel */}
        <KeyFactsCarousel />
      </div>
    </section>
  )
}
