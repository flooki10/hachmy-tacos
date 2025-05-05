"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menù", href: "/menu" },
  { name: "Contatti", href: "/contatti" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Hachmy Tacos
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-black font-medium hover:bg-yellow-500 transition-colors"
          >
            Prenota Ora
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Apri menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="text-2xl font-bold text-yellow-400">
              Hachmy Tacos
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Chiudi menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-amber-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contatti"
                className="block mt-4 text-center rounded-md bg-yellow-400 px-4 py-3 text-black font-medium hover:bg-yellow-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prenota Ora
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
