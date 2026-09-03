import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    if (!data.name || !data.email || !data.phone || !data.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: '✓ Votre demande de devis ClearOut',
            html: `
              <h2>Bonjour ${data.name},</h2>
              <p>Votre demande de devis a bien été reçue!</p>
              <p><strong>Service:</strong> ${data.service}</p>
              <p><strong>Description:</strong> ${data.description || 'Non spécifié'}</p>
              <p>Nous vous contacterons dans les 24 heures pour confirmer un rendez-vous.</p>
              <p>Cordialement,<br>Équipe ClearOut</p>
            `,
          }),
        })
        const result = await response.json()
        console.log('Resend response:', result)
        if (!response.ok) console.error('Resend error:', result)
      } catch (emailError) {
        console.error('Error sending email:', emailError)
      }
    }

    // Log for now (TODO: Save to Supabase)
    console.log('Quote received:', data)

    return NextResponse.json(
      { success: true, message: 'Quote submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
