"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import MenuPreview from "@/components/menu-preview"

import image from "../tacoss.png";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Sezione Introduttiva */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Benvenuti a Hachmy Tacos</h2>
              <p className="text-lg text-gray-700 mb-6">
              Scopri un viaggio culinario esclusivo, dove i sapori autentici della cucina marocchina si fondono con l'eleganza della tradizione gastronomica, creando un'esperienza indimenticabile nel cuore di Firenze. Ogni piatto racconta una storia, una fusione perfetta tra ingredienti freschi e tecniche secolari, che ti trasporteranno in un angolo esotico e raffinato del Mediterraneo. Lasciati conquistare dalla nostra cucina, un'esperienza che stimola i sensi e lascia un ricordo indelebile.
              </p>
              <Link
                href="/menu"
                className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors"
              >
                Scopri il nostro menù <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt="Interno del ristorante"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Anteprima del Menu */}
        <MenuPreview />

        {/* Sezione Prenotazione */}
        <section className="bg-gray-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Prenota un Tavolo</h2>
              <p className="text-lg text-gray-700 mb-8">
                Vieni a trovarci e lasciati sorprendere dai nostri piatti fusion. Prenota ora per assicurarti
                un'esperienza culinaria indimenticabile.
              </p>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-6 py-3 text-black font-medium hover:bg-yellow-500 transition-colors"
              >
                Prenota Ora
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
