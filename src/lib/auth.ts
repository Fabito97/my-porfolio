import { cookies } from 'next/headers';

const ADMIN_COOKIE_NAME = 'fabian_admin_session';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'fabian2026';

export async function verifyAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(ADMIN_COOKIE_NAME);
    if (!sessionCookie) return false;
    return sessionCookie.value === 'authenticated_admin_session_token_valid';
  } catch (e) {
    return false;
  }
}

export function checkAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function getAdminCookieName(): string {
  return ADMIN_COOKIE_NAME;
}
