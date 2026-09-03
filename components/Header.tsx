'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">ClearOut</div>
        <nav className="flex gap-8 items-center">
          <a href="#services" className="text-gray-900 hover:text-blue-600">Services</a>
          <a href="#quote" className="text-gray-900 hover:text-blue-600">Devis</a>
          <a href="#faq" className="text-gray-900 hover:text-blue-600">FAQ</a>
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800">
            Contact
          </a>
          <Link href="/dashboard" className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-700">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  )
}
