'use client'
import { Icon } from '@iconify/react'
import { motion } from 'motion/react'
import Image from 'next/image'
interface InformationStructureItem {
  title: string
  description: string
  icon: string
  image: string
}

const InformationCard = ({ item, index }: { item: InformationStructureItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-full object-cover object-top  group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Icon
          icon={item.icon} // Pass the Iconify string directly
          className="w-12 h-12 text-[#2356a3] mb-4"
          fallback={<div className="w-12 h-12 bg-gray-200 rounded" />} // Optional fallback for invalid icons
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default InformationCard
