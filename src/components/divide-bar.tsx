import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface AnimatedDividerBarProps {
  className?: string
  width?: string | number
  maxHeight?: string | number
  color?: string
  animationDelay?: number
  duration?: number
}

const AnimatedDividerBar = ({
  className,
  width = 6,
  maxHeight = 100,
  color = 'bg-foreground',
  animationDelay = 0,
  duration = 0.8,
}: AnimatedDividerBarProps) => {
  return (
    <motion.div
      className={cn('inline-block mx-auto rounded-full', color, className)}
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
      initial={{
        height: 0,
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        height: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration,
        delay: animationDelay,
        ease: [0.4, 0, 0.2, 1],
        height: {
          duration: duration * 1.2,
          ease: [0.2, 0, 0.1, 1],
        },
      }}
    />
  )
}

export default AnimatedDividerBar
