"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

import Header from "@/components/header"
import Footer from "@/components/footer"
import MenuCard from "@/components/menu-card"

// Dati di esempio per il menu
const menuItems = {
  tacos: [
    {
      id: 1,
      name: "Tacos au Canard",
      description: "Anatra confit con salsa di arance e spezie marocchine",
      price: "€14.50",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Tacos Ratatouille",
      description: "Verdure provenzali con harissa e formaggio di capra",
      price: "€12.00",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Tacos Bouillabaisse",
      description: "Frutti di mare con zafferano e aioli al limone",
      price: "€16.50",
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  tajine: [
    {
      id: 4,
      name: "Tajine di Agnello",
      description: "Agnello con prugne, mandorle e spezie berbere",
      price: "€18.50",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Tajine di Pollo al Limone",
      description: "Pollo con olive, limone confit e erbe provenzali",
      price: "€16.00",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Tajine Vegetariana",
      description: "Verdure di stagione, ceci e albicocche secche",
      price: "€14.00",
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  tanjia: [
    {
      id: 7,
      name: "Tanjia Marrakech",
      description: "Manzo marinato con cumino, zafferano e limone preservato",
      price: "€19.50",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "Tanjia di Vitello",
      description: "Vitello con funghi porcini e erbe aromatiche",
      price: "€21.00",
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  bevande: [
    {
      id: 9,
      name: "Tè alla Menta Marocchino",
      description: "Tè verde con menta fresca e zucchero",
      price: "€4.50",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 10,
      name: "Vino Rosso della Casa",
      description: "Blend di uve italiane e francesi",
      price: "€6.00 (bicchiere) / €24.00 (bottiglia)",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 11,
      name: "Limonata alla Rosa",
      description: "Limonata fresca con acqua di rose e menta",
      price: "€5.00",
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
}

const categories = [
  { key: "tacos", name: "Tacos Francesi" },
  { key: "tajine", name: "Tajine Marocchina" },
  { key: "tanjia", name: "Tanjia Marocchina" },
  { key: "bevande", name: "Bevande" },
]

export default function Menu() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Il Nostro Menù
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Esplora la nostra selezione di piatti fusion che combinano la raffinatezza francese con i sapori intensi
              della cucina marocchina.
            </motion.p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex space-x-1 rounded-xl bg-amber-100 p-1 mb-8">
              {categories.map((category) => (
                <Tab
                  key={category.key}
                  className={({ selected }) =>
                    cn(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                      "ring-white ring-opacity-60 ring-offset-2 focus:outline-none",
                      selected
                        ? "bg-yellow-400 shadow text-black"
                        : "text-gray-400 hover:bg-gray-800 hover:text-yellow-400",
                    )
                  }
                >
                  {category.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {categories.map((category) => (
                <Tab.Panel key={category.key}>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {menuItems[category.key as keyof typeof menuItems].map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </section>
      </main>
      <Footer />
    </div>
  )
}
