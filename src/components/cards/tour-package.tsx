'use client'
import { TouristPackage } from '@/payload-types' // Adjust path to your types
import { MapPin } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

const TouristPackageCard = ({
  package: pkg,
  isActive,
}: {
  package: TouristPackage
  isActive: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Join location names for display
  const locationString = pkg.locations.map((loc) => loc.location).join(', ')

  return (
    <motion.div
      className="relative group rounded-2xl overflow-hidden h-[35rem] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        opacity: isActive || isHovered ? 1 : 0.85,
        scale: isActive ? 1.02 : 0.98,
        y: isActive ? -5 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <Image
          src={typeof pkg.image === 'string' ? pkg.image : pkg.image.url!}
          alt={pkg.name || 'Tourist package image'}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={
            typeof pkg.image === 'string' ? pkg.image : pkg.image.thumbnailURL! // Use thumbnail as placeholder
          }
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t"
        animate={{
          background: isHovered
            ? 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)'
            : 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)',
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
      />

      <div className="absolute p-6 bottom-0 left-0 right-0 text-white">
        {/* Location */}
        <motion.div
          className="flex items-center gap-1 text-sm opacity-90 mb-2"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <MapPin className="w-4 h-4" />
          <span>{locationString || 'Multiple Locations'}</span>
        </motion.div>

        {/* Package Name */}
        <motion.h3
          className="text-2xl font-bold mb-3 lg:line-clamp-1 group-hover:line-clamp-none"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {pkg.name}
        </motion.h3>

        {/* Package Details */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <motion.p
                className="text-sm opacity-90 mb-2 line-clamp-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {pkg.description}
              </motion.p>

              <motion.p
                className="text-sm font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                {pkg.duration} | ${pkg.price} USD
              </motion.p>

              <motion.a
                href={`/packages/${pkg.id}`} // Adjust link as needed
                className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors flex-1 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reservar Agora
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default TouristPackageCard
