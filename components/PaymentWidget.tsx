'use client'

export default function PaymentWidget() {
  const iban = process.env.NEXT_PUBLIC_IBAN || 'CH89370400440532013000'

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">💳 Moyens de paiement</h3>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Virement bancaire</h4>
        <p className="text-sm text-gray-600 mb-4">Versez directement sur notre compte:</p>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="font-mono text-center text-sm break-all font-bold text-gray-900">
            {iban}
          </p>
        </div>

        <p className="text-xs text-gray-600">
          Nom: ClearOut Sàrl<br/>
          Pays: Suisse (CH)
        </p>

        <button
          onClick={() => {
            navigator.clipboard.writeText(iban)
            alert('IBAN copié!')
          }}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 text-sm"
        >
          Copier l'IBAN
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300">
        <p className="text-sm text-blue-900">
          <strong>📌 Note:</strong> Indiquez toujours la référence de votre devis (ex: QUOTE-2024-001) dans le virement.
        </p>
      </div>
    </div>
  )
}
