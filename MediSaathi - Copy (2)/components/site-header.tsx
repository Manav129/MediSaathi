"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Activity, Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center size-10 rounded-lg bg-primary text-primary-foreground">
            <Activity className="size-6" />
          </div>
          <span className="font-bold text-xl">MediSaathi</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/patient"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            For Patients
          </Link>
          <Link
            href="/doctor"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            For Doctors
          </Link>
          <Link
            href="/hospital"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            For Hospitals
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/patient"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              For Patients
            </Link>
            <Link
              href="/doctor"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              For Doctors
            </Link>
            <Link
              href="/hospital"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              For Hospitals
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
