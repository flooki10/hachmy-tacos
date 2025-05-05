import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hachmy Tacos - Ristorante Marocchino in Italia",
  description:
    "Scopri i sapori autentici della cucina marocchina nel cuore di Firenze. Un'esperienza gastronomica indimenticabile con tacos, tajine e tanjia tradizionali.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
