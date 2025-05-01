import { NextResponse } from 'next/server';
import { mockGolfPrices } from '@/__MOCK__';

export async function GET() {
  try {
    await new Promise(resolve => setTimeout(resolve, 800));
    return NextResponse.json({ data: mockGolfPrices });
  } catch (error) {
    console.error('Error fetching golf prices:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
