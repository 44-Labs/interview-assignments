import { NextResponse } from 'next/server';
import { mockGolfPrices } from '@/__MOCK__';

export async function GET(request: Request, { params }: { params: { golfCourseName: string } }) {
  const { golfCourseName } = params;
  const normalizedInput = decodeURIComponent(golfCourseName).replace(/\s/g, '').trim().toLowerCase();

  const filtered = mockGolfPrices.filter(item =>
    item.golfCourseName.replace(/\s/g, '').trim().toLowerCase().includes(normalizedInput)
  );

  return NextResponse.json({ data: filtered });
}
