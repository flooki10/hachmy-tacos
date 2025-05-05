"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Hachmy Tacos</h3>
            <p className="text-gray-400 mb-4">Autentica cucina marocchina nel cuore di Firenze.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Orari di Apertura</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Martedì - Venerdì: 12:00 - 15:00, 19:00 - 23:00</li>
              <li>Sabato - Domenica: 12:00 - 23:00</li>
              <li>Lunedì: Chiuso</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Via del barcoa N40 o 6R, Firenze, Italia</li>
              <li>Telefono: +39 055 1234567</li>
              <li>Email: info@hachmytacos.it</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Fusion Delizie. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/termini" className="text-gray-400 hover:text-white text-sm transition-colors">
              Termini e Condizioni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
