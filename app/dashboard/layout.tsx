'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPasswordForm, setShowPasswordForm] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem('clearout-admin-auth')
    if (auth) {
      setIsAuthenticated(true)
      setShowPasswordForm(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'

    if (password === correctPassword) {
      localStorage.setItem('clearout-admin-auth', 'true')
      setIsAuthenticated(true)
      setShowPasswordForm(false)
      setPassword('')
    } else {
      alert('Mot de passe incorrect')
    }
  }

  if (showPasswordForm && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ClearOut Admin</h1>
          <p className="text-gray-600 mb-6">Accès réservé</p>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Entrez votre mot de passe"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Chargement...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ClearOut Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem('clearout-admin-auth')
            router.push('/')
          }}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </nav>
      <div className="max-w-6xl mx-auto p-6">
        {children}
      </div>
    </div>
  )
}
