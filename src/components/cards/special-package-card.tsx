'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
const SpecialPackageCard = ({ item, isActive }: { item: any; isActive: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg h-80"
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.8,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default SpecialPackageCard
