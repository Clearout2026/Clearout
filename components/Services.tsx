'use client'

export default function Services() {
  const services = [
    { emoji: '🛋️', title: 'Meubles & Encombrants', description: 'Canapés, armoires, lits, bureaux... Nettoyage inclus. Démontage complexe = frais supplémentaires.' },
    { emoji: '🏠', title: 'Caves & Greniers', description: 'Vidage complet + nettoyage. Tout ce qui peut être réutilisé/vendu est valorisé. Engagement écolo total.' },
    { emoji: '📦', title: 'Déménagement', description: 'Logement entier avec tri écologique. Nettoyage final compris. Réévaluation des objets possible (frais).' },
    { emoji: '❄️', title: 'Électroménager', description: 'Enlèvement écologique + nettoyage. Appareils en bon état sont reconditionnés/vendus.' },
    { emoji: '♻️', title: 'Recyclables', description: 'Tri professionnel et recyclage responsable. Zéro déchet vers la décharge si possible.' },
    { emoji: '🏢', title: 'Entreprises', description: 'Solutions adaptées à vos besoins. Nettoyage + tri écolo. Tarifs flexibles (à l\'heure ou au volume).' },
  ]

  return (
    <section id="services" className="bg-gradient-to-b from-green-50 to-teal-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services</h2>
          <p className="text-gray-700 text-lg">Du plus petit au plus grand débarras</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-600 hover:shadow-xl hover:scale-105 transition transform">
              <div className="text-5xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Info tarifs et écolo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t-2 border-green-300">
          <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-6 border-2 border-green-700 text-white shadow-lg">
            <h4 className="text-lg font-bold mb-3">💰 Nos tarifs</h4>
            <p className="text-sm">Calcul flexible: à l'heure OU au volume/poids selon votre situation. Devis gratuit dans les 24h après demande.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl p-6 border-2 border-orange-600 text-white shadow-lg">
            <h4 className="text-lg font-bold mb-3">🔧 Services additionnels</h4>
            <p className="text-sm"><strong>Démontage complexe:</strong> frais supplémentaires. <strong>Réévaluation d'objets:</strong> frais supplémentaires.</p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-xl p-6 border-2 border-teal-700 text-white shadow-lg">
            <h4 className="text-lg font-bold mb-3">🌍 Engagement écolo</h4>
            <p className="text-sm">Tout ce qui peut être réutilisé ou revendu est valorisé. Reste triés responsablement. Zéro déchet vers la décharge si possible.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
