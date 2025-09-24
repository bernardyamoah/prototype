'use client'

import { LanguageSwitcher } from '@/components/language-switcher'
import { Button } from '@/components/ui/button'
import { Menu, User, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const mainNavItems = [
  { name: 'INSTITUCIONAL', link: '/institucional' },
  { name: 'INVESTE EM ANGOLA', link: '/investe' },
  { name: 'EXPLORE ANGOLA', link: '/' },
  { name: 'FACILIDADES', link: '/facilidades' },
  { name: 'RECURSOS', link: '/recursos' },
]

const topNavItems = [
  { name: 'FALE CONNOSCO', href: '/contacto' },
  { name: 'SUPORTE AO TURISTA', href: '/suporte' },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  return (
    <>
      <nav className="w-full bg-transparent absolute isolate z-10 px-2">
        {/* Top Navigation Bar - Hidden on mobile */}
        <div className="hidden md:block px-8 lg:px-25 text-white py-2 max-w-(--breakpoint-xl) mx-auto">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs">
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
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
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
        </div>

        {/* Main Navigation */}
        <div className="mt-4 md:mt-10 mx-2 md:mx-0 px-3 md:px-8 lg:px-25 text-white py-3 md:py-2 max-w-(--breakpoint-xl) md:mx-auto rounded-full bg-white border-b border shadow-sm">
          <div className="container mx-auto px-2 md:px-4">
            <div className="flex items-center justify-between">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href={'/institucional'}
                  className={`text-xs font-medium transition-colors border-b-2 ${
                    pathname === '/institucional'
                      ? 'text-brand-orange border-brand-orange'
                      : 'text-gray-800 hover:text-brand-orange border-transparent hover:border-brand-orange'
                  }`}
                >
                  INSTITUCIONAL
                </Link>
                <Link
                  href={'/investe'}
                  className={`text-xs font-medium transition-colors border-b-2 ${
                    pathname === '/investe'
                      ? 'text-brand-orange border-brand-orange'
                      : 'text-gray-800 hover:text-brand-orange border-transparent hover:border-brand-orange'
                  }`}
                >
                  INVESTE EM ANGOLA
                </Link>
              </div>

              {/* Logo - Always visible */}
              <Link href="/" className="flex flex-col text-center">
                <div className="font-bold text-brand-orange text-base md:text-lg lg:text-xl">
                  VISIT ANGOLA
                </div>
                <div className="text-xs text-brand-green font-medium -mt-1">The rhythm of life</div>
              </Link>

              {/* Desktop Navigation Right */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href={'/'}
                  className={`text-xs font-medium transition-colors border-b-2 ${
                    pathname === '/'
                      ? 'text-brand-orange border-brand-orange'
                      : 'text-gray-800 hover:text-brand-orange border-transparent hover:border-brand-orange'
                  }`}
                >
                  EXPLORE ANGOLA
                </Link>
                <Link
                  href={'/facilidades'}
                  className={`text-xs font-medium transition-colors border-b-2 ${
                    pathname === '/facilidades'
                      ? 'text-brand-orange border-brand-orange'
                      : 'text-gray-800 hover:text-brand-orange border-transparent hover:border-brand-orange'
                  }`}
                >
                  FACILIDADES
                </Link>
                <Link
                  href={'/recursos'}
                  className={`text-xs font-medium transition-colors border-b-2 ${
                    pathname === '/recursos'
                      ? 'text-brand-orange border-brand-orange'
                      : 'text-gray-800 hover:text-brand-orange border-transparent hover:border-brand-orange'
                  }`}
                >
                  RECURSOS
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-brand-orange hover:bg-brand-orange/10 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-72 sm:w-80 max-w-[85vw] h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-white sticky top-0">
              <div className="flex flex-col">
                <div className="font-bold text-brand-orange text-base sm:text-lg">VISIT ANGOLA</div>
                <div className="text-xs text-brand-green font-medium">The rhythm of life</div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-4 sm:px-6 py-6 pb-8">
              {/* Main Navigation Items */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Menu Principal
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {mainNavItems.map((item) => {
                    const isActive =
                      pathname === item.link || (item.link === '/explore' && pathname === '/')
                    return (
                      <Link
                        key={item.name}
                        href={item.link}
                        className={`block text-base sm:text-lg font-medium transition-colors py-2 px-3 -mx-3 rounded-lg ${
                          isActive
                            ? 'text-brand-orange bg-brand-orange/10 border-l-4 border-brand-orange'
                            : 'text-gray-800 hover:text-brand-orange hover:bg-brand-orange/5'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Secondary Navigation */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Suporte
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {topNavItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block text-sm sm:text-base font-medium transition-colors py-2 px-3 -mx-3 rounded-lg ${
                          isActive
                            ? 'text-brand-orange bg-brand-orange/10 border-l-4 border-brand-orange'
                            : 'text-gray-600 hover:text-brand-orange hover:bg-brand-orange/5'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Language Switcher */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Idioma
                </h3>
                <div className="px-3 py-2">
                  <LanguageSwitcher />
                </div>
              </div>

              {/* Login Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="w-full text-brand-orange border-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-200 h-12 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4 mr-2" />
                  LOGIN SESSÃO
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
