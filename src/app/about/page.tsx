"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe, BookOpen, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-zinc-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              About Saarthi-Learn
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
              We are dedicated to breaking down language barriers in education and making quality learning accessible to everyone, regardless of their native language.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Saarthi-Learn was founded with a simple yet powerful vision: to bridge educational gaps through native-language learning. 
                We believe that language should never be a barrier to acquiring knowledge and skills. Our platform leverages advanced 
                technology to provide high-quality educational content in multiple languages, ensuring that learners can study in their 
                preferred language while maintaining the quality and depth of their education.
              </p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-8 h-8 text-indigo-600" />
                    <CardTitle className="text-xl font-semibold text-zinc-900 dark:text-white">Inclusivity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    We believe education should be accessible to everyone, regardless of their native language or background.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-8 h-8 text-emerald-500" />
                    <CardTitle className="text-xl font-semibold text-zinc-900 dark:text-white">Quality</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    We maintain the highest standards of educational content while making it accessible in multiple languages.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-indigo-600" />
                    <CardTitle className="text-xl font-semibold text-zinc-900 dark:text-white">Community</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    We foster a global community of learners and educators who support each other&apos;s growth and development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-emerald-500" />
                    <CardTitle className="text-xl font-semibold text-zinc-900 dark:text-white">Excellence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    We strive for excellence in everything we do, from content creation to user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Our team consists of passionate educators, technologists, and language experts who are committed to 
                revolutionizing the way people learn. We come from diverse backgrounds and bring together expertise in 
                education, artificial intelligence, linguistics, and user experience design to create a platform that 
                truly serves the needs of global learners.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 