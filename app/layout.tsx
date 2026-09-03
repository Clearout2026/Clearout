import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClearOut - Débarras & Nettoyage Professionnel',
  description: 'Service professionnel de débarras en Suisse romande',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
