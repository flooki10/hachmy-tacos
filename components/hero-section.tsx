"use client"
import image from "../2.png";

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Immagine di sfondo */}
      <div className="absolute inset-1">
        <Image
          src={image}
          alt="Piatti fusion"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Contenuto Hero */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hachmy Tacos
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Autentica cucina marocchina nel cuore di Firenze
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-6 py-3 text-black font-medium hover:bg-yellow-500 transition-colors"
              >
                Prenota Ora
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-black font-medium hover:bg-gray-100 transition-colors"
              >
                Sfoglia il Menù
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
