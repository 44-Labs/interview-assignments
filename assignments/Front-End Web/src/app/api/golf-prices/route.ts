import { NextResponse } from 'next/server';
import { mockGolfPrices } from '@/__MOCK__';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  try {
    await delay(Math.random() * 1000 + 500);
    return NextResponse.json({ data: mockGolfPrices });
  } catch (error) {
    console.error('Error fetching golf prices:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
