'use client'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Débarrassez-vous sans effort
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Récupérez votre espace en quelques heures. Devis gratuit en une photo.
        </p>
        <div className="flex gap-6 justify-center mb-12 flex-wrap">
          <a href="#quote" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800">
            Commencer
          </a>
          <a href="#services" className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50">
            En savoir plus
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">★★★★★</span>
          <span className="text-gray-600">4.9/5 basé sur 450+ avis</span>
        </div>
      </div>
    </section>
  )
}
