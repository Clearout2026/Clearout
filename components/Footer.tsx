'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">ClearOut</h4>
            <p className="text-gray-300 text-sm">Service professionnel de débarras en Suisse romande.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <a href="#services" className="text-gray-300 hover:text-white text-sm block mb-2">Tous les services</a>
            <a href="#quote" className="text-gray-300 hover:text-white text-sm block mb-2">Demander un devis</a>
            <a href="#services" className="text-gray-300 hover:text-white text-sm block">Tarifs</a>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <a href="tel:+41779604412" className="text-gray-300 hover:text-white text-sm block mb-2">+41 77 960 44 12</a>
            <a href="mailto:contact.clearout@gmail.com" className="text-gray-300 hover:text-white text-sm block mb-2">contact.clearout@gmail.com</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm block">Zones desservies</a>
          </div>
          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <a href="#" className="text-gray-300 hover:text-white text-sm block mb-2">Conditions générales</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm block mb-2">Politique de confidentialité</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm block">Carrières</a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 ClearOut Sàrl. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
