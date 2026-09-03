'use client'

export default function Services() {
  const services = [
    { emoji: '🛋️', title: 'Meubles & Encombrants', description: 'Canapés, armoires, lits, bureaux... nous nous occupons de tous les meubles volumineux.' },
    { emoji: '🏠', title: 'Caves & Greniers', description: 'Récupérez cet espace perdu. Nous vidons complètement caves, greniers et garages.' },
    { emoji: '📦', title: 'Déménagement', description: 'Logement entier à vider? Nous gérons le tri et l\'enlèvement en un passage.' },
    { emoji: '❄️', title: 'Électroménager', description: 'Frigos, lave-linge, lave-vaisselle... enlèvement direct de chez vous.' },
    { emoji: '♻️', title: 'Recyclables', description: 'Cartons, PET, plastique. Nous vidons rapidement vos sacs et conteneurs.' },
    { emoji: '🏢', title: 'Entreprises', description: 'Besoins spéciaux? Débarras adaptés pour vos locaux professionnels.' },
  ]

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services</h2>
          <p className="text-gray-600">Du plus petit au plus grand débarras</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-md transition">
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
