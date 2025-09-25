'use client'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { Vision } from '@/payload-types'


export default function VisionSection({vision}:{vision:Vision}) {

  if (!vision) {
    return (
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">No vision data available</div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{vision.title}</h2>
          <p className="text-xl leading-relaxed mb-8">{vision.description}</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {vision.timeline.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{item.year}</div>
                <div className="text-yellow-200">{item.goal}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
