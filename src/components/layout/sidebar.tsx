"use client"

import { useAuth } from "@/contexts/auth-context"
import { cn } from "@/lib/utils"
import { Home, BookOpen, MessageCircle, Upload, User, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navigationItems = [
  { name: "Home", href: "/dashboard/home", icon: Home },
  { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Saarthi-Buddy", href: "/dashboard/saarthi-buddy", icon: MessageCircle },
  { name: "Profile", href: "/dashboard/profile", icon: User },
]

export default function Sidebar() {
  const { user } = useAuth()
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const canUpload = user?.role === "teacher" || user?.role === "admin"

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={cn(
      "bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 flex flex-col transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            {!isCollapsed && (
              <span className="text-xl font-bold text-zinc-900 dark:text-white">Saarthi-Learn</span>
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
            )}
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200",
                    isActive
                      ? "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700",
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span className="font-medium">{item.name}</span>}
                </Link>
              </li>
            )
          })}

          {canUpload && (
            <li>
              <Link
                href="/dashboard/upload"
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200",
                  pathname === "/dashboard/upload"
                    ? "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                    : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700",
                )}
                title={isCollapsed ? "Upload" : undefined}
              >
                <Upload className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">Upload</span>}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
} 