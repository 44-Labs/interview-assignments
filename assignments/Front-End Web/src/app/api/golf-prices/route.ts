import { NextResponse } from 'next/server';
import { mockGolfPrices } from '@/__MOCK__';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let data = mockGolfPrices;

  // 1. 골프장명 필터 (부분 일치)
  const golfCourseName = searchParams.get('golfCourseName');
  if (golfCourseName) {
    const normalized = golfCourseName.replace(/\s/g, '').trim().toLowerCase();
    data = data.filter(item => item.golfCourseName.replace(/\s/g, '').trim().toLowerCase().includes(normalized));
  }

  // 2. 출처(거래소) 필터 (복수/단수 모두 지원)
  const sources = searchParams.get('sources');
  if (sources) {
    const sourceArr = sources.split(',').filter(Boolean);
    data = data.filter(item => sourceArr.includes(item.source));
  } else {
    const source = searchParams.get('source');
    if (source) {
      data = data.filter(item => item.source === source);
    }
  }

  // 3. 정렬
  const sortField = searchParams.get('sortField');
  const sortOrder = searchParams.get('sortOrder');
  if (sortField && sortOrder) {
    data = [...data].sort((a, b) => {
      if (sortField === 'golfCourseName') {
        return sortOrder === 'asc'
          ? a.golfCourseName.localeCompare(b.golfCourseName)
          : b.golfCourseName.localeCompare(a.golfCourseName);
      }
      if (sortField === 'currentPrice') {
        return sortOrder === 'asc' ? a.currentPrice - b.currentPrice : b.currentPrice - a.currentPrice;
      }
      return 0;
    });
  }

  return NextResponse.json({ data });
}
