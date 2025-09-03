'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';

type Dictionary = {
  services: string;
  portfolio: string;
  team: string;
  contact: string;
  requestQuote: string;
  toggleMenu: string;
};

export function Header({ dictionary }: { dictionary: Dictionary }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: dictionary.services, href: '#services' },
    { label: dictionary.portfolio, href: '#portfolio' },
    { label: dictionary.team, href: '#team' },
    { label: dictionary.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold hidden sm:inline-block">LLL Digital</span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <LanguageSwitcher />
           <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="#contact">{dictionary.requestQuote}</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{dictionary.toggleMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="p-4">
                <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setMenuOpen(false)}>
                  <Code className="h-6 w-6 text-primary" />
                  <span className="font-bold">LLL Digital</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="transition-colors hover:text-primary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="mt-8 w-full">
                  <Link href="#contact" onClick={() => setMenuOpen(false)}>{dictionary.requestQuote}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
