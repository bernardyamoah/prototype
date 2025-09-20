'use client'
import { Calendar, MapPin, Star, Users } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
const TouristSiteCard = ({ site, isActive }: { site: any; isActive: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden h-[35rem] cursor-pointer shadow-lg`}
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
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${site.image})`,
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      {/* Rating Badge */}
      {site.rating && (
        <motion.div
          className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-white text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{site.rating}</span>
        </motion.div>
      )}

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
          <span>{site.location}</span>
        </motion.div>

        <motion.h3
          className="text-2xl font-bold mb-3"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {site.title}
        </motion.h3>

        {/* Tour Details */}
        <motion.div
          className="flex items-center gap-4 text-sm opacity-90 mb-3"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
        >
          {site.duration && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{site.duration}</span>
            </div>
          )}
          {site.groupSize && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{site.groupSize}</span>
            </div>
          )}
        </motion.div>

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
                {site.description}
              </motion.p>

              {/* Highlights */}
              {site.highlights && (
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {site.highlights.slice(0, 3).map((highlight: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.button
                className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reservar Agora
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default TouristSiteCard
