'use client'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-600 via-green-500 to-teal-500 py-24 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">
          Débarras & Nettoyage à Fribourg
        </h1>
        <p className="text-xl mb-3 max-w-2xl mx-auto">
          Récupérez votre espace en quelques heures. <strong>Nettoyage inclus!</strong>
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto font-semibold">
          ♻️ Engagement écolo: tri, réutilisation, recyclage responsable
        </p>
        <div className="flex gap-6 justify-center mb-12 flex-wrap">
          <a href="#quote" className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-50 shadow-lg">
            Commencer
          </a>
          <a href="#services" className="bg-green-700 text-white px-8 py-3 rounded-xl font-semibold border-2 border-white hover:bg-green-800 shadow-lg">
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
