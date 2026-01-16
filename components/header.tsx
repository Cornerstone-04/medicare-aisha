"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Schedule", href: "/schedule" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-semibold text-foreground">MediCare</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            (123) 456-7890
          </a>
          <Button asChild>
            <Link href="/book">Book Appointment</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col gap-6 pt-6">
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 border-t border-border pt-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 px-3 text-sm font-medium text-muted-foreground"
                >
                  <Phone className="h-4 w-4" />
                  (123) 456-7890
                </a>
                <Button asChild className="w-full">
                  <Link href="/book" onClick={() => setIsOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
