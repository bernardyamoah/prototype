'use client'

import { LanguageSwitcher } from '@/components/language-switcher'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ChevronRight, Menu, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const mainNavItems = [
  { name: 'INSTITUCIONAL', link: '/institucional' },
  { name: 'INVESTE EM ANGOLA', link: '/investe' },
  { name: 'Informações', link: '/information' },
  { name: 'FALE CONNOSCO', link: '/contacto' },
]

const topNavItems = [{ name: 'SUPORTE AO TURISTA', link: '/suporte' }]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const NavLink = ({
    href,
    children,
    isActive,
    className = '',
    onClick = () => {},
  }: {
    href: string
    children: React.ReactNode
    isActive: boolean
    className?: string
    onClick?: () => void
  }) => (
    <Link
      href={href!}
      onClick={() => {
        onClick()
        setIsMenuOpen(false)
      }}
      className={`
        group relative flex items-center justify-between p-4  transition-all duration-300 ease-out
        ${
          isActive
            ? 'text-brand-orange border-l-4 border-brand-orange'
            : 'text-gray-700  group-hover:text-primary hover:translate-x-1'
        }
        ${className}
      `}
    >
      <span className="font-medium">{children}</span>
      <div className="flex items-center space-x-2">
        <ChevronRight
          className={`w-4 h-4 transition-all duration-300 ${
            isActive
              ? 'text-brand-orange translate-x-1'
              : 'text-gray-400 group-hover:text-primary group-hover:translate-x-1'
          }`}
        />
      </div>
    </Link>
  )

  return (
    <>
      <nav className="w-full bg-transparent absolute isolate pt-4 z-10 px-2">
        {/* Top Navigation Bar - Hidden on mobile */}
        <div className="hidden md:block px-8 lg:px-25 text-white py-0 max-w-(--breakpoint-xl) mx-auto">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs">
            <div className="flex space-x-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
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
        <div className="mt-4 md:mt-6 mx-2 px-3 md:px-8 lg:px-25 text-white py-1 md:py-2 max-w-(--breakpoint-xl) md:mx-auto rounded-full bg-white border-b border shadow-sm">
          <div className="container mx-auto px-2 md:px-4">
            <div className="flex items-center justify-between">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8 ">
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
              </div>{' '}
              <Link href="/" className="flex flex-col text-center">
                <Image
                  src="/angola-vertical-logo.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="h-13 w-18 object-cover"
                />
              </Link>
              {/* Desktop Navigation Right */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href={'/information'}
                  className={`text-xs font-medium uppercase transition-colors border-b-2 ${
                    pathname === '/information'
                      ? 'text-brand-orange border-brand-orange'
                      : 'text-gray-800 hover:text-brand-orange border-transparent hover:border-brand-orange'
                  }`}
                >
                  INFORMAÇÕES
                </Link>
                <Link
                  href={'/contacto'}
                  className={`text-xs font-medium transition-colors border-b-2 ${
                    pathname === '/contacto'
                      ? 'text-brand-orange border-brand-orange'
                      : 'text-gray-800 hover:text-brand-orange border-transparent hover:border-brand-orange'
                  }`}
                >
                  FALE CONNOSCO
                </Link>
              </div>
              {/* Mobile Menu using shadcn Sheet */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden text-brand-orange hover:bg-brand-orange/10 p-2 transition-all duration-200 hover:scale-105"
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 sm:w-96 p-0 overflow-hidden">
                  <SheetHeader className="p-6 pb-4 bg-gradient-to-r from-white via-orange-50/30 to-white border-b">
                    <SheetTitle className="flex items-center space-x-3">
                      <Image
                        src="/angola-vertical-logo.svg"
                        alt="Visit Angola Logo"
                        width={148}
                        height={148}
                        className="h-20 w-20 "
                      />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {/* Main Navigation */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm  text-[#446D55] uppercase tracking-wide">
                          Menu Principal
                        </h3>
                      </div>

                      <div className="space-y-2">
                        {mainNavItems.map((item) => {
                          const isActive =
                            pathname === item.link || (item.link === '/' && pathname === '/')
                          return (
                            <NavLink
                              key={item.name}
                              href={item.link!}
                              isActive={isActive}
                              className="text-base"
                            >
                              {item.name}
                            </NavLink>
                          )
                        })}
                      </div>
                    </div>

                    <Separator className="my-6" />

                    {/* Support Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm  text-[#446D55] uppercase tracking-wide">
                          Suporte & Contacto
                        </h3>
                      </div>

                      <div className="space-y-2">
                        {topNavItems.map((item) => {
                          const isActive = pathname === item.link
                          return (
                            <NavLink
                              key={item.name}
                              href={item.link}
                              isActive={isActive}
                              className="text-sm"
                            >
                              {item.name}
                            </NavLink>
                          )
                        })}
                      </div>
                    </div>

                    <Separator className="my-6" />

                    {/* Language Switcher */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm  text-[#446D55] uppercase tracking-wide">Idioma</h3>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                        <LanguageSwitcher />
                      </div>
                    </div>

                    <Separator className="my-6" />

                    {/* Login Button */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm  text-[#446D55] uppercase tracking-wide">Conta</h3>
                      </div>

                      <Button
                        variant="outline"
                        size="lg"
                        className="transition-all duration-300 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <User className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium">LOGIN SESSÃO</span>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
