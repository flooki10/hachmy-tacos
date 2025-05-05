"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
}

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <span className="text-yellow-400 font-medium">{item.price}</span>
        </div>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </motion.div>
  )
}
