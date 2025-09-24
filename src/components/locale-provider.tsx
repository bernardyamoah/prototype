'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface LocaleContextType {
  locale: string
  setLocale: (locale: string) => void
  availableLocales: { [key: string]: string }
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const availableLocales = {
  pt: 'Português (Angola)',
  en: 'English',
}

export function LocaleProvider({
  children,
  defaultLocale = 'pt',
}: {
  children: React.ReactNode
  defaultLocale?: string
}) {
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    // Check if locale is stored in localStorage
    const storedLocale = localStorage.getItem('locale')
    if (storedLocale && availableLocales[storedLocale as keyof typeof availableLocales]) {
      setLocale(storedLocale)
    }
  }, [])

  const handleSetLocale = (newLocale: string) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)

    // Update the URL with the new locale as a query parameter
    const url = new URL(window.location.href)
    url.searchParams.set('locale', newLocale)
    window.history.pushState({}, '', url)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale, availableLocales }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
