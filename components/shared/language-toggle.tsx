"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full group relative"
      title={t('language.toggle')}
    >
      <div className="relative">
        <Languages className="h-[1.2rem] w-[1.2rem]" />
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-[10px] font-bold">
          {language.toUpperCase()}
        </span>
      </div>
      <span className="sr-only">{t('language.toggle')}</span>
    </Button>
  )
}
