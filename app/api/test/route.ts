import { NextRequest } from 'next/server';

export async function GET() {
  return Response.json({
    message: 'API is working',
    hasApiKey: !!process.env.RESEND_API_KEY,
    apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return Response.json({
      message: 'POST endpoint working',
      receivedData: body,
      hasApiKey: !!process.env.RESEND_API_KEY
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to parse JSON', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 400 }
    );
  }
}
