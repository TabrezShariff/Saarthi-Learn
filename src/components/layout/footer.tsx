"use client"

import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-800 border-t border-zinc-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-zinc-900 dark:text-white">Saarthi-Learn</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300">
              Bridging Educational Gaps with Native-Language Learning
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-indigo-600" />
                <span className="text-zinc-600 dark:text-zinc-300">support@saarthi-learn.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-indigo-600" />
                <span className="text-zinc-600 dark:text-zinc-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span className="text-zinc-600 dark:text-zinc-300">123 Learning Street, Education City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-700 mt-8 pt-8 text-center">
          <p className="text-zinc-600 dark:text-zinc-300">
            © 2024 Saarthi-Learn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 