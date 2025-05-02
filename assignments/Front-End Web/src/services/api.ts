import { GolfClubPrice } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGolfPrices(): Promise<GolfClubPrice[]> {
  try {
    // ISR 30초
    const response = await fetch(`${API_URL}/api/golf-prices`, {
      next: { revalidate: 30 },
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

export async function getGolfPriceByCourseName(courseName: string): Promise<GolfClubPrice[]> {
  try {
    const response = await fetch(`${API_URL}/api/golf-prices/${courseName}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
}
