"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import image1 from "../tacos-de-poulet.jpeg"
import image2 from "../41JIglkOGlL._AC_SY580_.jpg"
import image3 from "../Tanjia_93ece5e9f0.jpg"

// Dati di esempio per l'anteprima del menu
const previewItems = [
  {
    id: 1,
    name: "Tacos au Canard",
    category: "Tacos Francesi",
    image: image1,
  },
  {
    id: 2,
    name: "Tajine di Agnello",
    category: "Tajine Marocchina",
    image: image2,
  },
  {
    id: 3,
    name: "Tanjia Marrakech",
    category: "Tanjia Marocchina",
    image: image3,
  },
]

export default function MenuPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            I Nostri Piatti Speciali
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Assapora l'incontro tra la raffinatezza francese e i sapori intensi della cucina marocchina
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium text-yellow-400 mb-1">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center text-yellow-400 font-medium hover:text-yellow-500 transition-colors"
          >
            Scopri il menu completo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
