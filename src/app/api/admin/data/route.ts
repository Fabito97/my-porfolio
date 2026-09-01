import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/auth';
import { getDatabase, saveDatabase } from '@/lib/store';

export async function GET() {
  const db = getDatabase();
  return NextResponse.json(db);
}

export async function POST(req: NextRequest) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized admin access.' }, { status: 401 });
  }

  try {
    const updatedData = await req.json();
    const success = saveDatabase(updatedData);

    if (success) {
      return NextResponse.json({ success: true, message: 'Database saved successfully.' });
    } else {
      return NextResponse.json({ error: 'Failed to write data to database.' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid payload structure.' }, { status: 400 });
  }
}
