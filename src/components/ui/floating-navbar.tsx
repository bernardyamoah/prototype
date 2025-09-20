'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { JSX } from 'react'
import { Button } from './button'
import { User } from 'lucide-react'
const topNavItems = [
  { name: 'FALE CONNOSCO', href: '/contacto' },
  { name: 'SUPORTE AO TURISTA', href: '/suporte' },
]

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-(--breakpoint-xl)  absolute top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4',
          className,
        )}
      >
        {/* Top Navigation Bar */}
        <div className="lg:px-40 text-white py-2 max-w-(--breakpoint-xl)  mx-auto">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-brand-yellow transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-brand-yellow hover:bg-white/10"
            >
              <User className="w-4 h-4 mr-2" />
              LOGIN SESSÃO
            </Button>
          </div>
        </div>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500',
            )}
          >
            <span className="text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
