'use client'
import { Event } from '@/payload-types'
import { MapPin } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
const TouristSiteCard = ({ event, isActive }: { event: Event; isActive: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative group  overflow-hidden h-[30rem] cursor-pointer `}
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
          src={typeof event.image === 'string' ? event.image : event.image.url!}
          alt={event.title || 'Tourist site image'}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={
            typeof event.image === 'string' ? event.image : event.image.thumbnailURL! // Use the same image as a low-quality placeholder
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
          <span>{event.location}</span>
        </motion.div>

        <motion.h3
          className="text-2xl font-bold mb-3 lg:line-clamp-1 group-hover:line-clamp-none"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {event.title}
        </motion.h3>

        {/* Tour Details */}

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
                className="text-sm opacity-90 mb-4 line-clamp-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {event.description}
              </motion.p>

              <motion.a
                href={event.link}
                target="_blank"
                className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors flex-1 text-center "
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

export default TouristSiteCard
