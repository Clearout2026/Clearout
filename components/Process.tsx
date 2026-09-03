'use client'

export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Prenez des photos',
      description: 'Photographiez les objets à débarrasser. Utilisez votre téléphone, c\'est plus facile.'
    },
    {
      number: '2',
      title: 'Recevez un devis',
      description: 'Notre équipe analyse vos photos et vous envoie un devis gratuit dans la journée.'
    },
    {
      number: '3',
      title: 'Choisissez une date',
      description: 'Sélectionnez la date et l\'heure qui vous conviennent pour l\'intervention.'
    },
    {
      number: '4',
      title: 'Nous venons chercher',
      description: 'Notre équipe s\'occupe de tout. Espace récupéré, problème résolu.'
    },
  ]

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
          <p className="text-gray-600">Un processus simple et rapide</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:translate-y-[-4px] transition">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-sm text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
