"use client"

import { motion } from "framer-motion"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ReservationForm from "@/components/reservation-form"

export default function Contatti() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-amber-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contatti & Prenotazioni
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Prenota un tavolo o contattaci per qualsiasi informazione. Siamo qui per rendere la tua esperienza
              indimenticabile.
            </motion.p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold mb-6">Prenota un Tavolo</h2>
              <ReservationForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Informazioni</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Indirizzo</h3>
                    <p>Via del barcoa N40 o 6R, Firenze, Italia</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Orari di Apertura</h3>
                    <p>Martedì - Domenica: 12:00 - 15:00, 19:00 - 23:00</p>
                    <p>Lunedì: Chiuso</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Contatti</h3>
                    <p>Telefono: +39 055 1234567</p>
                    <p>Email: info@hachmytacos.it</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Dove Siamo</h2>
                <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Qui andrebbe integrata una mappa interattiva (Google Maps, ecc.) */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">Mappa interattiva</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
