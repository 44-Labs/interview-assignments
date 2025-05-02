import { NextResponse } from 'next/server';
import { mockGolfPrices } from '@/__MOCK__';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  try {
    await delay(Math.random() * 1000 + 500);
    return NextResponse.json({ data: mockGolfPrices });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
