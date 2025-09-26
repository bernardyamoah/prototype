'use client'

import AnimatedDividerBar from '@/components/divide-bar'
import { PageSection } from '@/payload-types'
import { motion } from 'motion/react'
import KeyFactsCarousel from '../../app/(frontend)/institucional/_components/key-facts-carousel'

export default function StatsCarouselSection({ section }: { section: PageSection }) {
  return (
    <section className="pb-20 bg-[#f2f7fc]  px-4">
      <div className="max-w-(--breakpoint-xl) mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-(--breakpoint-xl)  mx-auto text-center mb-16"
        >
          <AnimatedDividerBar color="bg-[#2356a3]" maxHeight={70} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{section.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {section.subheading}
          </p>
        </motion.div>

        {/* Key Facts Carousel */}
        <KeyFactsCarousel keyFacts={section.stats} />
      </div>
    </section>
  )
}
