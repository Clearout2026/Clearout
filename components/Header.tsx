'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-green-600 sticky top-0 z-100 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">🌱 ClearOut</div>
        <nav className="flex gap-8 items-center">
          <a href="#services" className="text-gray-900 hover:text-green-600 font-semibold transition">Services</a>
          <a href="#quote" className="text-gray-900 hover:text-green-600 font-semibold transition">Devis</a>
          <a href="#faq" className="text-gray-900 hover:text-green-600 font-semibold transition">FAQ</a>
          <a href="#contact" className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-green-700 shadow-md">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
