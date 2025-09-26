'use client'
import { Icon } from '@iconify/react'
import { motion } from 'motion/react'

interface KeyFactItem {
  label: string
  value: string
  icon: string
  image?: string
}

const KeyFactCard = ({ item, index }: { item: KeyFactItem; index: number }) => {
  const bgColors = ['bg-gray-200', 'bg-[#2356a3]']
  const textColors = ['text-gray-800', 'text-white']

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${bgColors[index % 2]} ${textColors[index % 2]} w-full rounded-2xl p-8 h-full flex flex-col justify-between`}
    >
      <Icon icon={item.icon} className="text-4xl mb-4" />
      <h3 className="font-semibold">{item.label}</h3>
      <p className="">{item.value}</p>
    </motion.div>
  )
}

export default KeyFactCard
