'use client'

import { useLocale } from '@/components/locale-provider'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { useState } from 'react'

export function LanguageSwitcher() {
  const { locale, setLocale, availableLocales } = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale)
    setIsOpen(false)
    // Reload the page to fetch new content
    window.location.reload()
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {availableLocales[locale as keyof typeof availableLocales]}
        </span>
        <span className="sm:hidden">
          {locale.toUpperCase()}
        </span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
          <div className="py-1">
            {Object.entries(availableLocales).map(([code, name]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between ${
                  locale === code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span>{name}</span>
                {locale === code && (
                  <span className="text-blue-600">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
