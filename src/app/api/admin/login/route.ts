import { NextRequest, NextResponse } from 'next/server';
import { checkAdminPassword, getAdminCookieName } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body;

    if (!password || !checkAdminPassword(password)) {
      return NextResponse.json(
        { error: 'Invalid admin credentials provided.' },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true, message: 'Authentication successful.' });
    
    response.cookies.set({
      name: getAdminCookieName(),
      value: 'authenticated_admin_session_token_valid',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request.' }, { status: 500 });
  }
}
