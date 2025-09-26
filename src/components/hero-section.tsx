'use client'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  className?: string
  textColor?: string
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage = '/placeholder-47bds.png',
  className = '',
  textColor = '',
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [particlePositions, setParticlePositions] = useState<Array<{ x: number; y: number }>>([])

  // Trigger animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Calculate particle positions on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const positions = Array.from({ length: 20 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 100,
      }))
      setParticlePositions(positions)
    }
  }, [])

  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  }

  const backgroundVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  }

  const subtitleVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  // Split title into words for staggered animation
  const titleWords = title.split(' ')

  return (
    <motion.section
      className={`relative min-h-[100dvh] h-full lg:rounded-b-[1.5rem] overflow-hidden flex items-center justify-center ${className}`}
      initial="hidden"
      animate={isLoaded ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        variants={backgroundVariants}
      >
        {/* Animated Overlay */}
        <motion.div className="absolute inset-0 bg-black/40" variants={overlayVariants} />
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="mt-20 relative z-10 text-white max-w-(--breakpoint-xl) mx-auto px-4"
        variants={containerVariants}
      >
        {/* Animated Subtitle */}
        <motion.p
          className={cn('text-xl md:text-2xl font-thin md:ml-3 text-pretty mb-2', textColor)}
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>

        {/* Animated Title with Staggered Words */}
        <div className="text-5xl sm:text-6xl md:text-[171px] md:mt-3 font-bold mb-8 text-balance">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              className={cn('inline-block capitalize lg:mr-8', textColor)}
              variants={{
                hidden: {
                  y: 200,
                  opacity: 0,
                  rotateX: 90,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: index * 0.1,
                  },
                },
              }}
              style={{ transformOrigin: 'center bottom ' }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 2,
        }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white/80 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: pos.x,
              y: pos.y,
            }}
            animate={{
              y: -100,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </motion.section>
  )
}
