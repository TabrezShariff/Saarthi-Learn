"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Shield, Edit, Save, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "destructive"
      case "teacher":
        return "default"
      case "student":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const handleSave = () => {
    // In a real app, you would update the user data here
    setIsEditing(false)
  }

  const handleCancel = () => {
    setName(user?.name || "")
    setEmail(user?.email || "")
    setIsEditing(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Profile</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2">Manage your account settings and preferences</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Profile Card */}
        <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-zinc-900 dark:text-white">Profile Information</span>
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} variant="outline" size="sm" className="rounded-lg">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button
                    onClick={handleSave}
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm" className="rounded-lg bg-transparent">
                    Cancel
                  </Button>
                </div>
              )}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-2xl">
                  {user && getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{user?.name}</h3>
                <Badge variant={getRoleColor(user?.role || "")}>{user?.role?.toUpperCase()}</Badge>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                    className="pl-10 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditing}
                    className="pl-10 rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Role & Permissions</Label>
              <div className="flex items-center space-x-3 p-3 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg">
                <Shield className="w-5 h-5 text-zinc-500" />
                <div>
                  <p className="font-medium text-zinc-900 dark:text-white capitalize">{user?.role} Account</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    {user?.role === "admin" && "Full system access and management privileges"}
                    {user?.role === "teacher" && "Can upload content and manage courses"}
                    {user?.role === "student" && "Access to courses and learning materials"}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Stats */}
        <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-zinc-900 dark:text-white">Account Statistics</CardTitle>
            <CardDescription>Your learning journey overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg">
                <p className="text-2xl font-bold text-indigo-600">
                  {user?.role === "student" ? "5" : user?.role === "teacher" ? "12" : "25"}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {user?.role === "student" ? "Courses Enrolled" : "Courses Created"}
                </p>
              </div>
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg">
                <p className="text-2xl font-bold text-emerald-500">
                  {user?.role === "student" ? "3" : user?.role === "teacher" ? "45" : "120"}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {user?.role === "student" ? "Certificates" : "Total Students"}
                </p>
              </div>
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg">
                <p className="text-2xl font-bold text-orange-500">
                  {user?.role === "student" ? "48" : user?.role === "teacher" ? "180" : "500"}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Hours Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="bg-white/80 dark:bg-zinc-800/80 border border-red-200 dark:border-red-800 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-red-600 dark:text-red-400">Account Actions</CardTitle>
            <CardDescription>Manage your account session</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={logout} variant="destructive" className="rounded-lg">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
