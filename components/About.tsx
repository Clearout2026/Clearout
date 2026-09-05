'use client'

export default function About() {
  const testimonials = [
    {
      name: 'Sophie M.',
      city: 'Fribourg',
      text: 'Service impeccable! L\'équipe a enlevé tous les meubles de ma cave en 2h. Très professionnel et courtois.',
      rating: 5
    },
    {
      name: 'Marc L.',
      city: 'Fribourg',
      text: 'J\'avais peur pour mon appartement après le déménagement. ClearOut a tout nettoyé impeccablement en une journée.'
    },
    {
      name: 'Claire D.',
      city: 'Fribourg',
      text: 'Devis transparent, pas de surprise. L\'intervention était exactement comme prévu. À recommander les yeux fermés!'
    }
  ]

  return (
    <section className="bg-gradient-to-r from-green-50 to-teal-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* About paragraph */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            <strong>ClearOut n'est pas une grosse entreprise impersonnelle.</strong> Nous sommes une jeune équipe basée à <strong>Fribourg</strong>, pour qui chaque client est vital. Sans vous, nous ne sommes rien. C'est pourquoi nous donnons 110% à chaque intervention. Vous n'êtes pas un numéro - vous êtes ce qui nous permet de grandir.
          </p>
          <p className="text-base text-green-700 font-semibold">
            Vos avis, vos retours, votre confiance = notre succès. ✓
          </p>
        </div>

        {/* Featured testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">📍 {testimonial.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
