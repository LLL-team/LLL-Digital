
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { i18n, type Locale } from '../../../next.config'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function FlagIcon({ code }: { code: string }) {
  if (code === 'en') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" viewBox="0 0 72 48">
        <path fill="#fff" d="M0 0h72v48H0z"/>
        <path fill="#b22234" d="M0 0h72v4.364H0zm0 8.727h72v4.364H0zm0 8.727h72v4.364H0zm0 8.727h72v4.364H0zm0 8.727h72v4.364H0zm0 8.727h72v4.364H0z"/>
        <path fill="#3c3b6e" d="M0 0h36v26.182H0z"/>
        <path fill="#fff" d="m7.2 3.74 1.342-4.126h-3.524L6.36 3.74 3.84 5.26l2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126H10.48l1.342 4.126L9.84 5.26l2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm-25.2 5.236 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.804-1.52-2.804.658-4.88zm7.2 0 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126H17.68l1.342 4.126L16.5 10.496l2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm-25.2 5.236 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.804-1.52-2.804.658-4.88zm7.2 0 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126H17.68l1.342 4.126L16.5 15.732l2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm-25.2 5.236 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126H17.68l1.342 4.126L16.5 20.968l2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88zm7.2 0 1.342-4.126h-3.524l1.342 4.126-2.52 1.52 2.804-1.52.658 4.88 1.52-2.805-1.52-2.805.658-4.88z"/>
      </svg>
    )
  }
  if (code === 'es') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" viewBox="0 0 72 48">
        <path fill="#c60b1e" d="M0 0h72v48H0z"/>
        <path fill="#ffc400" d="M0 12h72v24H0z"/>
        <path fill="#c60b1e" d="M31.5 21h-1.5v-1.5a4.5 4.5 0 1 1 9 0V21h-1.5v6h-6v-6z"/>
        <path fill="#ffc400" d="M31.5 21h6v4.5h-6z"/>
        <path fill="#c60b1e" d="M28.5 24a3 3 0 0 1 3-3V15a6 6 0 0 0-6 6v3h3zm15 0a3 3 0 0 0-3-3V15a6 6 0 0 1 6 6v3h-3z"/>
        <path fill="#ad1519" d="M36 14.25a.75.75 0 0 1-.75.75H31.5v-1.5h3.75a.75.75 0 0 1 .75.75zm0 9a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75z"/>
        <path fill="#fff" d="M28.5 24a3 3 0 0 1 3-3v-1.5a4.5 4.5 0 0 0-4.5 4.5V27h1.5v-3zm15 0a3 3 0 0 0-3-3v-1.5a4.5 4.5 0 0 1 4.5 4.5V27h-1.5v-3z"/>
      </svg>
    )
  }
  return null;
}

export function LanguageSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const getCurrentLocale = (): Locale => {
    if (!pathName) return i18n.defaultLocale as Locale;
    const segments = pathName.split('/');
    return (i18n.locales.find(l => l === segments[1]) || i18n.defaultLocale) as Locale;
  };

  const currentLocale = getCurrentLocale();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <FlagIcon code={currentLocale} />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => router.push(redirectedPathName(locale))}
            className="flex items-center gap-2"
          >
            <FlagIcon code={locale} />
            <span>{locale.toUpperCase()}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
