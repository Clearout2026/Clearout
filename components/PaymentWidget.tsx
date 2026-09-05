'use client'

export default function PaymentWidget() {
  const iban = process.env.NEXT_PUBLIC_IBAN || 'CH89370400440532013000'

  return (
    <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-8 border-2 border-green-400 shadow-xl">
      <h3 className="text-3xl font-bold text-gray-900 mb-6">💳 Moyens de paiement</h3>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-300">
        <h4 className="font-bold text-gray-900 mb-3 text-lg">Virement bancaire</h4>
        <p className="text-sm text-gray-700 mb-4">Versez directement sur notre compte:</p>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg mb-4 border-2 border-green-200">
          <p className="font-mono text-center text-sm break-all font-bold text-green-900">
            {iban}
          </p>
        </div>

        <p className="text-sm text-gray-700 font-semibold">
          Nom: ClearOut Sàrl<br/>
          Pays: Suisse (CH)
        </p>

        <button
          onClick={() => {
            navigator.clipboard.writeText(iban)
            alert('IBAN copié!')
          }}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 text-sm transition shadow-md"
        >
          Copier l'IBAN
        </button>
      </div>

      <div className="mt-6 p-4 bg-green-200 rounded-lg border-2 border-green-400">
        <p className="text-sm text-green-900 font-semibold">
          <strong>📌 Note:</strong> Indiquez toujours la référence de votre devis (ex: QUOTE-2024-001) dans le virement.
        </p>
      </div>
    </div>
  )
}
