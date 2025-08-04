"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-zinc-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              Contact Us
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
              Have questions or need support? We&apos;re here to help! Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-zinc-700 dark:text-zinc-300">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-zinc-700 dark:text-zinc-300">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-700 dark:text-zinc-300">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-zinc-700 dark:text-zinc-300">Subject</Label>
                  <Input id="subject" placeholder="What is this about?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-zinc-700 dark:text-zinc-300">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Email</h3>
                      <p className="text-zinc-600 dark:text-zinc-300">support@saarthi-learn.com</p>
                      <p className="text-zinc-600 dark:text-zinc-300">info@saarthi-learn.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Phone</h3>
                      <p className="text-zinc-600 dark:text-zinc-300">+1 (555) 123-4567</p>
                      <p className="text-zinc-600 dark:text-zinc-300">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Address</h3>
                      <p className="text-zinc-600 dark:text-zinc-300">123 Learning Street</p>
                      <p className="text-zinc-600 dark:text-zinc-300">Education City, EC 12345</p>
                      <p className="text-zinc-600 dark:text-zinc-300">United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Business Hours</h3>
                      <p className="text-zinc-600 dark:text-zinc-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-zinc-600 dark:text-zinc-300">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-zinc-600 dark:text-zinc-300">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">How do I get started?</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">Simply sign up for an account and choose your preferred language to begin learning.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">What languages are supported?</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">We support multiple languages including English, Spanish, French, German, Hindi, and more.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Is the platform free?</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">We offer both free and premium plans. Basic features are free, while advanced features require a subscription.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 