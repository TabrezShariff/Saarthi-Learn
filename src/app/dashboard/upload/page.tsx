"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Upload, Video, CheckCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function UploadPage() {
  const { user } = useAuth()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [subject, setSubject] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile)
    } else {
      alert("Please select a valid video file (.mp4, .mov, .avi, etc.)")
    }
  }

  const handleUpload = async () => {
    if (!file || !title || !subject) {
      alert("Please fill in all required fields and select a video file")
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setUploadComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setSubject("")
    setFile(null)
    setUploadProgress(0)
    setUploadComplete(false)
  }

  // Check if user has upload permissions
  if (user?.role !== "teacher" && user?.role !== "admin") {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <Card className="w-full max-w-md bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Access Restricted</h2>
            <p className="text-zinc-600 dark:text-zinc-300">You need teacher or admin privileges to upload content.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Upload Content</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2">Share your knowledge by uploading educational videos</p>
      </div>

      <div className="max-w-2xl">
        <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Video className="w-6 h-6 text-indigo-600" />
              <span className="text-zinc-900 dark:text-white">Upload Video Content</span>
            </CardTitle>
            <CardDescription>Upload educational videos to share with students</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {uploadComplete ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Upload Successful!</h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  Your video &ldquo;{title}&rdquo; has been uploaded successfully.
                </p>
                <Button onClick={resetForm} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                  Upload Another Video
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="title">Video Title *</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter video title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what students will learn from this video"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="rounded-lg min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="language">Language Arts</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video">Video File *</Label>
                  <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-600 rounded-lg p-8 text-center">
                    <input id="video" type="file" accept="video/*" onChange={handleFileChange} className="hidden" />
                    <label htmlFor="video" className="cursor-pointer flex flex-col items-center space-y-2">
                      <Upload className="w-12 h-12 text-zinc-400" />
                      <p className="text-zinc-600 dark:text-zinc-300">
                        {file ? file.name : "Click to select video file"}
                      </p>
                      <p className="text-sm text-zinc-500">Supported formats: MP4, MOV, AVI, WMV</p>
                    </label>
                  </div>
                </div>

                {isUploading && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600 dark:text-zinc-300">Uploading...</span>
                      <span className="text-zinc-900 dark:text-white">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}

                <Button
                  onClick={handleUpload}
                  disabled={!file || !title || !subject || isUploading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                >
                  {isUploading ? "Uploading..." : "Upload Video"}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
