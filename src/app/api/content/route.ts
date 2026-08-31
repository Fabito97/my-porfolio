import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/store';

export async function GET() {
  const db = getDatabase();
  return NextResponse.json(db);
}
