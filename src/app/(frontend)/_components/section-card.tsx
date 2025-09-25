'use client'
import { Media } from '@/payload-types'
import { AlertCircle, Building2 } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

interface SectionStructureItem {
  title: string
  description: string
  icon?: string | null | undefined
  image: string | Media
  id?: string | null
}

const SectionCard = ({ item, index }: { item: SectionStructureItem; index: number }) => {
  // Handle image as string or Media object
  const imageSrc =
    typeof item.image === 'string'
      ? item.image
      : item.image?.url || '/placeholder.svg?height=300&width=400&text=No+Image'
  // Default to Building2 if no icon is provided
  const IconComponent = item.icon ? dynamicIcon(item.icon) : Building2

  // Function to map string icon names to Lucide icons (extend as needed)
  function dynamicIcon(iconName: string) {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      building: Building2,
      // Add more mappings for other icons as needed
    }
    return iconMap[iconName] || Building2
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow group h-full"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={imageSrc}
          alt={item.title || 'Section Structure'}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {/* <IconComponent className="absolute bottom-4 left-4 w-8 h-8 text-white" /> */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title || 'Untitled'}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description || 'No description available.'}
        </p>
      </div>
    </motion.div>
  )
}

interface SectionCardsListProps {
  items: SectionStructureItem[]
}

const SectionCardsList = ({ items }: SectionCardsListProps) => {
  if (!items || items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-16 text-center bg-gray-50 rounded-xl"
      >
        <AlertCircle className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No Section Structures Available
        </h3>
        <p className="text-gray-600 max-w-md">
          There are currently no government structures or departments listed. Check back soon for
          updates or contact support for more information.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <SectionCard key={item.id || `card-${index}`} item={item} index={index} />
      ))}
    </div>
  )
}

export { SectionCard, SectionCardsList }
export default SectionCard
