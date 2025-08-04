"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Users, Globe, Award } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function HomePage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/dashboard/home")
    }
  }, [user, router])

  return (
    <div className="bg-gradient-to-br from-zinc-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-zinc-900 dark:text-white">Saarthi-Learn</h1>
            <p className="text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
              Bridging Educational Gaps with Native-Language Learning
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-200"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-200 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 bg-transparent"
              >
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Features Section */}
          <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-200">
              <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Native Language Support</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Learn in your preferred language with our multilingual platform
              </p>
            </Card>

            <Card className="p-6 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-200">
              <Users className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Collaborative Learning</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Connect with peers and instructors in an interactive environment
              </p>
            </Card>

            <Card className="p-6 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-200">
              <Globe className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Global Access</h3>
              <p className="text-zinc-600 dark:text-zinc-300">Access quality education from anywhere in the world</p>
            </Card>

            <Card className="p-6 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-200">
              <Award className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Certified Courses</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Earn certificates and advance your career with verified skills
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
