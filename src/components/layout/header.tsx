"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Calendar, Bell, Search, MessageSquare, GraduationCap } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface HeaderProps {
  variant?: "landing" | "dashboard"
}

export default function Header({ variant = "landing" }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const navigationItems = [
    { name: "Home", href: variant === "dashboard" ? "/dashboard/home" : "/" },
    { name: "About", href: variant === "dashboard" ? "/dashboard/about" : "/about" },
    { name: "Contact Us", href: variant === "dashboard" ? "/dashboard/contact" : "/contact" },
  ]

  return (
    <header className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href={variant === "dashboard" ? "/dashboard/home" : "/"} className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-zinc-900 dark:text-white">Saarthi-Learn</span>
            </Link>

            {/* Navigation tabs */}
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400",
                    pathname === item.href
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-600 dark:text-zinc-300"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Icons and theme toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Button variant="ghost" size="sm" className="rounded-lg">
              <Search className="h-4 w-4" />
            </Button>

            {/* Message Icon */}
            <Button variant="ghost" size="sm" className="rounded-lg">
              <MessageSquare className="h-4 w-4" />
            </Button>

            {/* Calendar Icon */}
            <Button variant="ghost" size="sm" className="rounded-lg">
              <Calendar className="h-4 w-4" />
            </Button>

            {/* Notification Icon */}
            <Button variant="ghost" size="sm" className="rounded-lg">
              <Bell className="h-4 w-4" />
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 