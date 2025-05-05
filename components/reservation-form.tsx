"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    persone: "2",
    data: "",
    ora: "",
    messaggio: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Qui andrebbe implementata la logica per inviare i dati del form
    console.log("Form inviato:", formData)
    alert("Grazie per la tua prenotazione! Ti contatteremo presto per confermare.")
    // Reset del form
    setFormData({
      nome: "",
      email: "",
      telefono: "",
      persone: "2",
      data: "",
      ora: "",
      messaggio: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
            Telefono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label htmlFor="persone" className="block text-sm font-medium text-gray-700 mb-1">
            Numero di Persone *
          </label>
          <select
            id="persone"
            name="persone"
            value={formData.persone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="1">1 persona</option>
            <option value="2">2 persone</option>
            <option value="3">3 persone</option>
            <option value="4">4 persone</option>
            <option value="5">5 persone</option>
            <option value="6">6 persone</option>
            <option value="7+">7+ persone</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">
            Data *
          </label>
          <div className="relative">
            <input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Calendar
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
          </div>
        </div>

        <div>
          <label htmlFor="ora" className="block text-sm font-medium text-gray-700 mb-1">
            Ora *
          </label>
          <select
            id="ora"
            name="ora"
            value={formData.ora}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Seleziona un orario</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
          Note o Richieste Speciali
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          value={formData.messaggio}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-medium py-3 px-4 rounded-md hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          Invia Prenotazione
        </button>
      </div>

      <p className="text-sm text-gray-500">* Campi obbligatori</p>
    </form>
  )
}
