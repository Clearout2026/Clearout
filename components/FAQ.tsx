'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Comment le prix est-il calculé?',
      answer: 'Le prix minimum est de CHF 50-70 selon le nombre de collaborateurs. Nous facturons CHF 95/h par personne. Certains déchets peuvent être facturés selon leur poids. Le devis est une estimation; le coût final dépend du travail réel effectué.'
    },
    {
      question: 'Pouvez-vous ramasser n\'importe quel objet?',
      answer: 'Nous enlevons presque tout! Les seules limitations: objets > 3m de long impossible à casser, et objets incassables > 100kg. Pour des cas spéciaux, contactez-nous directement.'
    },
    {
      question: 'Dois-je être présent lors du passage?',
      answer: 'Non, pas obligatoirement! Si les objets sont accessibles, nous pouvons intervenir sans vous. Cependant, si nous avons besoin d\'accéder à des zones fermées, votre présence sera nécessaire.'
    },
    {
      question: 'Proposez-vous un tri ou une revalorisation?',
      answer: 'Oui! Nous pouvons trier vos objets et revendre ce qui peut l\'être. Cela réduit vos frais d\'enlèvement. Demandez cette option lors de votre devis.'
    },
    {
      question: 'Quelles sont les zones desservies?',
      answer: 'Nous opérons dans toute la Suisse romande: Lausanne, Genève, Fribourg, Neuchâtel, Montreux, Yverdon, Martigny et 30+ autres communes. Vérifiez votre région en entrant votre adresse dans le formulaire de devis.'
    },
  ]

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
              >
                {faq.question}
                <span className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
