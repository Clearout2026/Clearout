'use client'

export default function Testimonials() {
  const testimonials = [
    {
      stars: '★★★★★',
      text: '"Service impeccable! L\'équipe a enlevé tous les meubles de ma cave en 2h. Très professionnel et courtois."',
      author: 'Sophie M., Lausanne'
    },
    {
      stars: '★★★★★',
      text: '"J\'avais peur pour mon appartement après le déménagement. ClearOut a tout nettoyé impeccablement en une journée."',
      author: 'Marc L., Genève'
    },
    {
      stars: '★★★★★',
      text: '"Devis transparent, pas de surprise. L\'intervention était exactement comme prévu. À recommander les yeux fermés!"',
      author: 'Claire D., Fribourg'
    },
  ]

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Avis de nos clients</h2>
          <p className="text-gray-600">Plus de 450 clients satisfaits</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-yellow-400 mb-3">{testimonial.stars}</div>
              <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
