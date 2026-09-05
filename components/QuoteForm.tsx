'use client'

import { useState } from 'react'

export default function QuoteForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: ''
  })
  const [files, setFiles] = useState<File[]>([])

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    if (!formData.name.trim()) newErrors.name = 'Nom requis'
    if (!formData.email.trim()) newErrors.email = 'Email requis'
    if (!formData.phone.trim()) newErrors.phone = 'Téléphone requis'
    if (!formData.service) newErrors.service = 'Service requis'
    if (!formData.description.trim()) newErrors.description = 'Description requise'
    if (files.length === 0) newErrors.photos = 'Au moins une photo requise'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: any) => {
    setFiles(Array.from(e.target.files || []))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key as keyof typeof formData])
      })

      files.forEach((file, index) => {
        formDataToSend.append(`photo_${index}`, file)
      })

      const response = await fetch('https://formspree.io/f/mjyvrdez', {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', phone: '', service: '', description: '' })
        setFiles([])
        setErrors({})
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
    <section id="quote" className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Obtenez votre devis gratuit</h2>
          <p className="text-green-100">Envoyez votre demande, recevez notre proposition dans les 24h</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-gray-900 p-8 rounded-xl max-w-md mx-auto shadow-2xl">
          {success && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg font-semibold">
              ✓ Votre demande a été envoyée avec succès! Nous vous contacterons dans les 24h.
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-800">Nom complet</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${errors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-green-600'}`}
            />
            {errors.name && <p className="text-red-600 text-sm font-semibold mt-1">⚠️ {errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${errors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-green-600'}`}
            />
            {errors.email && <p className="text-red-600 text-sm font-semibold mt-1">⚠️ {errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-800">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${errors.phone ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-green-600'}`}
            />
            {errors.phone && <p className="text-red-600 text-sm font-semibold mt-1">⚠️ {errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-800">Type de débarras</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${errors.service ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-green-600'}`}
            >
              <option value="">Sélectionnez un service...</option>
              <option value="meubles">Meubles & Encombrants</option>
              <option value="caves">Caves & Greniers</option>
              <option value="demenagement">Déménagement complet</option>
              <option value="electromenager">Électroménager</option>
              <option value="recyclables">Recyclables</option>
              <option value="entreprise">Services entreprises</option>
            </select>
            {errors.service && <p className="text-red-600 text-sm font-semibold mt-1">⚠️ {errors.service}</p>}
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Description + Photos</label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez précisément ce que vous souhaitez débarrasser..."
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none min-h-20 mb-3 ${errors.description ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-green-600'}`}
            />
            {errors.description && <p className="text-red-600 text-sm font-semibold mt-1">⚠️ {errors.description}</p>}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 mt-3">Joindre vos photos</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${errors.photos ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-green-600'}`}
              />
              {errors.photos && <p className="text-red-600 text-sm font-semibold mt-1">⚠️ {errors.photos}</p>}
              {files.length > 0 && (
                <p className="text-sm text-green-600 mt-2 font-semibold">✓ {files.length} photo(s) sélectionnée(s)</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 disabled:opacity-50 transition"
          >
            {loading ? 'Envoi...' : 'Envoyer ma demande'}
          </button>
        </form>
      </div>
    </section>
  )
}
