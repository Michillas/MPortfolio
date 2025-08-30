"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionary
const translations = {
  es: {
    'status.status': 'Disponible para trabajar',

    // Theme toggle
    'theme.toggle': 'Cambiar tema',
    'language.toggle': 'Cambiar idioma',
    
    // Hero section
    'hero.name': 'Miguel Ángel Montilla Garcia',
    'hero.role': 'Desarrollador Web | Fullstack | DevOps',
    'hero.location': 'Profesional en soluciones IT, situado en Madrid, España 🇪🇸.',
    'hero.email': 'michasmont@gmail.com',
    'hero.linkedin': 'Linkedin',
    'hero.github': 'GitHub',
    
    // Experience section
    'experience.title': 'Experiencia',
    'experience.freelance.title': 'Full Stack Developer',
    'experience.freelance.company': 'Freelance',
    'experience.freelance.period': '2025 Jul - Presente',
    'experience.freelance.description': 'Desarrollé y mantuve aplicaciones web para varios clientes, enfocándome en la experiencia del usuario y el rendimiento.',
    'experience.kyndryl.title': 'Desarrollador de Automatizaciones',
    'experience.kyndryl.company': 'Kyndryl',
    'experience.kyndryl.period': '2025 Mar - 2025 Jun',
    'experience.kyndryl.description': 'Implementé soluciones de automatización para mejorar la eficiencia operativa.',
    'experience.infortec.title': 'Prácticas DevOps',
    'experience.infortec.company': 'Infortec Consultores',
    'experience.infortec.period': '2025 Mar - 2025 Jun',
    'experience.infortec.description': 'Asistí en el despliegue y monitoreo de aplicaciones, colaboré con equipos de desarrollo para optimizar pipelines CI/CD.',
    
    // Projects section
    'projects.title': 'Proyectos',
    'projects.forms.name': 'Gestor de Formularios',
    'projects.forms.description': 'NextJS, Tailwind CSS, Supabase.',
    'projects.forms.cta': 'Ver proyecto',
    'projects.finance.name': 'Web de Finanzas',
    'projects.finance.description': 'NextJS, Spring Boot, Tailwind CSS, Docker, IA.',
    'projects.finance.cta': 'Ver proyecto',
    'projects.personality.name': 'Test de Personalidad',
    'projects.personality.description': 'NextJS, Spring Boot, Tailwind CSS.',
    'projects.personality.cta': 'Ver proyecto',
    'projects.yours.name': 'Tu proyecto',
    'projects.yours.description': 'Contacta conmigo para más información.',
    'projects.yours.cta': 'Más información',
    
    // Contact section
    'contact.title': 'Contáctame',
    'contact.subtitle': '¿Quieres contactarme? Me encantaría saber de ti.',
    'contact.name.label': 'Nombre',
    'contact.name.placeholder': 'Tu nombre',
    'contact.name.required': 'El nombre es obligatorio',
    'contact.email.label': 'Email',
    'contact.email.placeholder': 'tu.email@ejemplo.com',
    'contact.email.required': 'El email es obligatorio',
    'contact.email.invalid': 'Por favor, introduce un email válido',
    'contact.subject.label': 'Asunto',
    'contact.subject.placeholder': '¿De qué quieres hablar?',
    'contact.subject.required': 'El asunto es obligatorio',
    'contact.message.label': 'Mensaje',
    'contact.message.placeholder': 'Cuéntame sobre tu proyecto o pregúntame lo que quieras...',
    'contact.message.required': 'El mensaje es obligatorio',
    'contact.sending': 'Enviando...',
    'contact.send': 'Enviar mensaje',
    'contact.success': '¡Mensaje enviado correctamente! Te responderé pronto.',
    'contact.error': 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    
    // Testimonials section
    'testimonials.title': 'Reviews',
    'testimonials.john.name': 'Jhon Doe',
    'testimonials.john.designation': 'Ingeniero de Software',
    'testimonials.john.testimonial': 'Una experiencia increible, gran trabajador, muy profesional y cumplidor con los plazos. Disciplina y dedicación son sus principales características.',
    'testimonials.you.name': 'Tú',
    'testimonials.you.designation': 'Empresario',
    'testimonials.you.testimonial': 'Aportó una solución innovadora acorde a nuestras necesidades. Su capacidad para entender nuestras necesidades y proponer mejoras fue invaluable.',
    
    // Email template
    'email.title': 'Nueva consulta desde tu Portfolio',
    'email.contact.info': 'Información del contacto:',
    'email.name': 'Nombre:',
    'email.email': 'Email:',
    'email.subject': 'Asunto:',
    'email.message': 'Mensaje:',
    'email.footer.sent': 'Este mensaje fue enviado desde tu portfolio personal.',
    'email.footer.reply': 'Puedes responder directamente a este email para contactar con',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    'status.status': 'Open and ready to work',

    // Theme toggle
    'theme.toggle': 'Toggle theme',
    'language.toggle': 'Toggle language',
    
    // Hero section
    'hero.name': 'Miguel Ángel Montilla Garcia',
    'hero.role': 'Web Developer | Fullstack | DevOps',
    'hero.location': 'IT Solutions Professional, located in Madrid, Spain 🇪🇸.',
    'hero.email': 'michasmont@gmail.com',
    'hero.linkedin': 'LinkedIn',
    'hero.github': 'GitHub',
    
    // Experience section
    'experience.title': 'Experience',
    'experience.freelance.title': 'Full Stack Developer',
    'experience.freelance.company': 'Freelance',
    'experience.freelance.period': '2025 Jul - Present',
    'experience.freelance.description': 'Developed and maintained web applications for various clients, focusing on user experience and performance.',
    'experience.kyndryl.title': 'Automations Developer',
    'experience.kyndryl.company': 'Kyndryl',
    'experience.kyndryl.period': '2025 Mar - 2025 Jun',
    'experience.kyndryl.description': 'Implemented automation solutions to improve operational efficiency.',
    'experience.infortec.title': 'DevOps Internship',
    'experience.infortec.company': 'Infortec Consultores',
    'experience.infortec.period': '2025 Mar - 2025 Jun',
    'experience.infortec.description': 'Assisted in the deployment and monitoring of applications, collaborated with development teams to streamline CI/CD pipelines.',
    
    // Projects section
    'projects.title': 'Projects',
    'projects.forms.name': 'Forms Manager',
    'projects.forms.description': 'NextJS, Tailwind CSS, Supabase.',
    'projects.forms.cta': 'View project',
    'projects.finance.name': 'Finance Web',
    'projects.finance.description': 'NextJS, Spring Boot, Tailwind CSS, Docker, AI.',
    'projects.finance.cta': 'View project',
    'projects.personality.name': 'Personality Test',
    'projects.personality.description': 'NextJS, Spring Boot, Tailwind CSS.',
    'projects.personality.cta': 'View project',
    'projects.yours.name': 'Your project',
    'projects.yours.description': 'Contact me for more information.',
    'projects.yours.cta': 'More info',
    
    // Contact section
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Want to get in touch? I\'d love to hear from you.',
    'contact.name.label': 'Name',
    'contact.name.placeholder': 'Your name',
    'contact.name.required': 'Name is required',
    'contact.email.label': 'Email',
    'contact.email.placeholder': 'your.email@example.com',
    'contact.email.required': 'Email is required',
    'contact.email.invalid': 'Please enter a valid email',
    'contact.subject.label': 'Subject',
    'contact.subject.placeholder': 'What do you want to talk about?',
    'contact.subject.required': 'Subject is required',
    'contact.message.label': 'Message',
    'contact.message.placeholder': 'Tell me about your project or ask me anything...',
    'contact.message.required': 'Message is required',
    'contact.sending': 'Sending...',
    'contact.send': 'Send message',
    'contact.success': 'Message sent successfully! I\'ll get back to you soon.',
    'contact.error': 'There was an error sending the message. Please try again.',
    
    // Testimonials section
    'testimonials.title': 'Reviews',
    'testimonials.john.name': 'John Doe',
    'testimonials.john.designation': 'Software Engineer',
    'testimonials.john.testimonial': 'An incredible experience, great worker, very professional and meets deadlines. Discipline and dedication are his main characteristics.',
    'testimonials.you.name': 'You',
    'testimonials.you.designation': 'Entrepreneur',
    'testimonials.you.testimonial': 'He provided an innovative solution according to our needs. His ability to understand our needs and propose improvements was invaluable.',
    
    // Email template
    'email.title': 'New inquiry from your Portfolio',
    'email.contact.info': 'Contact information:',
    'email.name': 'Name:',
    'email.email': 'Email:',
    'email.subject': 'Subject:',
    'email.message': 'Message:',
    'email.footer.sent': 'This message was sent from your personal portfolio.',
    'email.footer.reply': 'You can reply directly to this email to contact',
    
    // Footer
    'footer.rights': 'All rights reserved',
  }
}

// Function to detect system language
const getSystemLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en'
  
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('es')) return 'es'
  return 'en'
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Get language from localStorage or system
    const storedLanguage = localStorage.getItem('language') as Language | null
    const systemLanguage = getSystemLanguage()
    
    const initialLanguage = storedLanguage || systemLanguage
    setLanguageState(initialLanguage)
    setIsInitialized(true)
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[language]?.[key as keyof typeof translations[typeof language]] || key
  }

  // Don't render until initialized to prevent hydration mismatch
  if (!isInitialized) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
