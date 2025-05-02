import { APIResponse, GolfClubPrice } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGolfPrices(): Promise<APIResponse<GolfClubPrice>> {
  try {
    const response = await fetch(`${API_URL}/api/golf-prices`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch golf prices');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}
