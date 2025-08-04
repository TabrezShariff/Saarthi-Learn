"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Trophy, Clock } from "lucide-react"
import Link from "next/link"

export default function DashboardHomePage() {
  const { user } = useAuth()

  const quickLinks = {
    student: [
      { title: "Browse Courses", href: "/dashboard/courses", description: "Explore available courses" },
      { title: "Chat with Saarthi-Buddy", href: "/dashboard/saarthi-buddy", description: "AI learning assistant" },
      { title: "View Profile", href: "/dashboard/profile", description: "Manage your account" },
    ],
    teacher: [
      { title: "Upload Content", href: "/dashboard/upload", description: "Upload new course materials" },
      { title: "View Courses", href: "/dashboard/courses", description: "Manage your courses" },
      { title: "Chat with Saarthi-Buddy", href: "/dashboard/saarthi-buddy", description: "AI teaching assistant" },
    ],
    admin: [
      { title: "Upload Content", href: "/dashboard/upload", description: "Upload new course materials" },
      { title: "Manage Courses", href: "/dashboard/courses", description: "Oversee all courses" },
      {
        title: "Chat with Saarthi-Buddy",
        href: "/dashboard/saarthi-buddy",
        description: "Administrative AI assistant",
      },
    ],
  }

  const stats = [
    { title: "Courses Enrolled", value: user?.role === "student" ? "5" : "12", icon: BookOpen },
    { title: "Active Students", value: user?.role === "student" ? "1,234" : "156", icon: Users },
    { title: "Certificates Earned", value: user?.role === "student" ? "3" : "45", icon: Trophy },
    { title: "Study Hours", value: user?.role === "student" ? "48" : "120", icon: Clock },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl"
          >
            <CardContent className="p-6">
              <div className="flex items-center">
                <stat.icon className="w-8 h-8 text-indigo-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{stat.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks[user?.role || "student"].map((link) => (
            <Card
              key={link.title}
              className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl hover:scale-[1.02] transition-all duration-200"
            >
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-white">{link.title}</CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={link.href}>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <p className="text-zinc-600 dark:text-zinc-300">Completed &ldquo;Introduction to Programming&rdquo; lesson</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <p className="text-zinc-600 dark:text-zinc-300">Started new course &ldquo;Advanced Mathematics&rdquo;</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <p className="text-zinc-600 dark:text-zinc-300">Earned certificate in &ldquo;Basic Computer Science&rdquo;</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
