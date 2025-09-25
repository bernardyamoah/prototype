'use client'

import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Check, ChevronDown, Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { locale, setLocale, availableLocales } = useLocale()

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale)
    // Reload the page to fetch new content
    window.location.reload()
  }

  const currentLanguageName = availableLocales[locale as keyof typeof availableLocales]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 hover:bg-gray-100 transition-all duration-200 group"
        >
          <Globe className="w-4 h-4   transition-colors duration-200" />
          <span className="hidden sm:inline font-medium  ">
            {currentLanguageName}
          </span>
          <span className="sm:hidden font-medium  ">
            {locale.toUpperCase()}
          </span>
          <ChevronDown className="w-3 h-3   transition-all duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 shadow-lg border-gray-200">
        <DropdownMenuLabel className="flex items-center gap-2 ">
          <Globe className="w-4 h-4" />
          Selecionar Idioma
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {Object.entries(availableLocales).map(([code, name]) => {
          const isActive = locale === code

          return (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`flex items-center justify-between cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                  : 'hover:bg-gray-50 hover:text-orange-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-medium ${isActive ? 'text-orange-700' : ''}`}>
                  {name}
                </span>
              
              </div>

              {isActive && <Check className="w-4 h-4 text-orange-600" />}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
