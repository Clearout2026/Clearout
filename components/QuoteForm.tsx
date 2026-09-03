'use client'

import { useState } from 'react'

export default function QuoteForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: ''
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key as keyof typeof formData])
      })

      const response = await fetch('https://formspree.io/f/mjyvrdez', {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', phone: '', service: '', description: '' })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        console.error('Form submission failed:', response.status)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quote" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Obtenez votre devis gratuit</h2>
          <p className="text-blue-100">Envoyez vos photos, recevez notre proposition dans la journée</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-gray-900 p-8 rounded-lg max-w-md mx-auto">
          {success && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
              ✓ Votre demande a été envoyée avec succès! Nous vous contacterons dans les 24h.
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Nom complet</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Type de débarras</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            >
              <option value="">Sélectionnez un service...</option>
              <option value="meubles">Meubles & Encombrants</option>
              <option value="caves">Caves & Greniers</option>
              <option value="demenagement">Déménagement complet</option>
              <option value="electromenager">Électroménager</option>
              <option value="recyclables">Recyclables</option>
              <option value="entreprise">Services entreprises</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">Description (optionnel)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez précisément ce que vous souhaitez débarrasser..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 min-h-24"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Envoi...' : 'Envoyer ma demande'}
          </button>
        </form>
      </div>
    </section>
  )
}
