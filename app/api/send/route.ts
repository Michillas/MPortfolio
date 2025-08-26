import { EmailTemplate } from '../../../components/email/template';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    console.log('API Route called');
    
    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return Response.json(
        { error: 'Server configuration error: API key missing' },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('Request body:', { ...body, message: body.message?.substring(0, 50) + '...' });
    
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Validation failed: missing fields');
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: invalid email format');
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Sending email with Resend...');
    
    const emailData = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['michasmont@gmail.com'], // Your email address
      replyTo: email, // User's email for easy replies
      subject: `Portfolio Contact: ${subject}`,
      react: EmailTemplate({ 
        name,
        email,
        subject,
        message
      }),
      // Fallback HTML in case React component fails
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Nueva consulta desde tu Portfolio</h2>
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
          </div>
          <div>
            <h3>Mensaje:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2c5282; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `
    };
    
    console.log('Email configuration:', { ...emailData, html: 'HTML content present', react: 'React component present' });
    
    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return Response.json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}