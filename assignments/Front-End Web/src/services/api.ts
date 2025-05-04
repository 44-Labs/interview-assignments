import { GolfClubPrice } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGolfPrices(searchParams?: Record<string, string>): Promise<GolfClubPrice[]> {
  try {
    const params = new URLSearchParams();
    for (const key in searchParams) {
      const value = searchParams[key];
      if (Array.isArray(value)) {
        value.forEach(v => params.append(key, v));
      } else if (value !== undefined) {
        params.set(key, value);
      }
    }

    const response = await fetch(`${API_URL}/api/golf-prices?${params}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch golf prices');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
}

export async function getGolfSources(): Promise<string[]> {
  const response = await fetch(`${API_URL}/api/golf-sources`);
  const data = await response.json();
  return data.data;
}
