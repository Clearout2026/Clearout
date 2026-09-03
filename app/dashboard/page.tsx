'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean@example.com',
      phone: '077 123 45 67',
      service: 'Meubles & Encombrants',
      description: 'Canapé et table',
      status: 'pending',
      createdAt: '2024-09-02',
      estimatedPrice: 'CHF 150-200'
    }
  ])

  const [selectedQuote, setSelectedQuote] = useState<any>(null)
  const [newStatus, setNewStatus] = useState('')

  const handleStatusChange = (id: number, status: string) => {
    setQuotes(quotes.map(q => q.id === id ? { ...q, status } : q))
  }

  const statuses = ['pending', 'quoted', 'scheduled', 'completed', 'cancelled']
  const statusColors: any = {
    pending: 'bg-yellow-100 text-yellow-800',
    quoted: 'bg-blue-100 text-blue-800',
    scheduled: 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-3xl font-bold text-blue-600">{quotes.length}</div>
          <div className="text-gray-600">Devis total</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-3xl font-bold text-yellow-600">
            {quotes.filter(q => q.status === 'pending').length}
          </div>
          <div className="text-gray-600">En attente</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-3xl font-bold text-green-600">
            {quotes.filter(q => q.status === 'completed').length}
          </div>
          <div className="text-gray-600">Complétés</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-3xl font-bold text-purple-600">CHF 1,250</div>
          <div className="text-gray-600">Revenus estimés</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Devis reçus</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Nom</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Service</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Email</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Téléphone</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Statut</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Date</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Prix</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id} className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedQuote(quote)}>
                  <td className="px-6 py-4 text-gray-900">{quote.name}</td>
                  <td className="px-6 py-4 text-gray-600">{quote.service}</td>
                  <td className="px-6 py-4 text-gray-600">{quote.email}</td>
                  <td className="px-6 py-4 text-gray-600">{quote.phone}</td>
                  <td className="px-6 py-4">
                    <select
                      value={quote.status}
                      onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className={`px-3 py-1 rounded-full font-semibold text-sm ${statusColors[quote.status]}`}
                    >
                      {statuses.map(s => (
                        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{quote.createdAt}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{quote.estimatedPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedQuote && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Détails du devis</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm">Nom</p>
              <p className="font-semibold">{selectedQuote.name}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Email</p>
              <p className="font-semibold">{selectedQuote.email}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Téléphone</p>
              <p className="font-semibold">{selectedQuote.phone}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Service</p>
              <p className="font-semibold">{selectedQuote.service}</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-600 text-sm">Description</p>
              <p className="font-semibold">{selectedQuote.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
