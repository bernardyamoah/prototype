import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()

    // Validate required fields
    const { name, email, subject, message, category = 'general', phone } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create contact entry in Payload CMS
    const contact = await payload.create({
      collection: 'contact',
      data: {
        name,
        email,
        phone: phone || '',
        subject,
        message,
        category,
        status: 'new',
        priority: 'medium',
      },
    })

    // Here you could also send an email notification to administrators
    // or integrate with external services like SendGrid, Mailgun, etc.

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: contact.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint' },
    { status: 200 }
  )
}