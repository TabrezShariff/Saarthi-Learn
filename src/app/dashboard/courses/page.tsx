"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Introduction to Programming",
    description: "Learn the fundamentals of programming with Python",
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    students: 1234,
    rating: 4.8,
    level: "Beginner",
    progress: 75,
  },
  {
    id: 2,
    title: "Advanced Mathematics",
    description: "Calculus, Linear Algebra, and Differential Equations",
    instructor: "Prof. Michael Chen",
    duration: "12 weeks",
    students: 856,
    rating: 4.9,
    level: "Advanced",
    progress: 30,
  },
  {
    id: 3,
    title: "Digital Marketing Essentials",
    description: "Master the art of digital marketing and social media",
    instructor: "Emma Rodriguez",
    duration: "6 weeks",
    students: 2156,
    rating: 4.7,
    level: "Intermediate",
    progress: 0,
  },
  {
    id: 4,
    title: "Data Science Fundamentals",
    description: "Introduction to data analysis, statistics, and machine learning",
    instructor: "Dr. James Wilson",
    duration: "10 weeks",
    students: 987,
    rating: 4.9,
    level: "Intermediate",
    progress: 45,
  },
]

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Courses</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2">Explore and manage your learning journey</p>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl hover:scale-[1.02] transition-all duration-200"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge
                    variant={
                      course.level === "Beginner"
                        ? "default"
                        : course.level === "Intermediate"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-300">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-zinc-900 dark:text-white">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-zinc-600 dark:text-zinc-300">
                  <p>Instructor: {course.instructor}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-300">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                {course.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600 dark:text-zinc-300">Progress</span>
                      <span className="text-zinc-900 dark:text-white">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
