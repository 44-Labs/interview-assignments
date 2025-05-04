import { NextResponse } from 'next/server';
import { mockGolfPrices } from '@/__MOCK__';

export async function GET() {
  const sources = [...new Set(mockGolfPrices.map(item => item.source))];
  return NextResponse.json({ data: sources });
}
