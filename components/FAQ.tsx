'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Comment le prix est-il calculé?',
      answer: 'Tarifs flexibles calculés à l\'heure OU selon le volume/poids selon votre situation. Pas de prix fixe affiché - chaque cas est unique! Nous établissons un devis gratuit dans les 24 heures après votre demande.'
    },
    {
      question: 'Quels objets enlevez-vous?',
      answer: 'Nous enlevons presque tout: meubles, encombrants, électroménager, recyclables, débarras complets... Les seules limites: objets > 3m non cassables, et objets solides > 100kg. Pour cas spéciaux, contactez-nous directement.'
    },
    {
      question: 'Le nettoyage est-il inclus?',
      answer: 'OUI! Le nettoyage est inclus dans tous nos services. Après enlèvement, nous laissez l\'espace propre et prêt à utiliser.'
    },
    {
      question: 'Qu\'en est-il de la revalorisation des objets?',
      answer: 'Engagement écolo total! Tous les objets réutilisables sont donnés ou revendus. Le reste est trié responsablement et recyclé. Nous réduisons au maximum les déchets vers la décharge. Une option de réévaluation professionnelle existe aussi (frais supplémentaires).'
    },
    {
      question: 'Quelles sont vos zones de service?',
      answer: 'Nous sommes basés à Fribourg et opérons principalement en région fribourgeoise et cantons proches. Pour vérifier si votre adresse est desservie, envoyez une demande de devis avec votre localisation.'
    },
    {
      question: 'Le démontage est-il inclus?',
      answer: 'Le démontage simple est inclus. Pour démontages complexes, des frais supplémentaires peuvent s\'appliquer. À préciser lors de votre devis!'
    },
  ]

  return (
    <section id="faq" className="bg-gradient-to-b from-teal-50 to-green-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
          <p className="text-gray-700">Nous répondons à vos doutes</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border-2 border-green-300 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-2 text-lg font-bold text-gray-900 hover:text-green-600 transition"
              >
                {faq.question}
                <span className={`text-2xl transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="pb-2 text-gray-700 border-t-2 border-green-200 mt-4 pt-4">
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
