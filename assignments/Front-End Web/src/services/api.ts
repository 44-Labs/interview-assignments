import { GolfCoursePrice } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const golfApi = {
  getGolfPrices: async (searchParams?: Record<string, string>): Promise<GolfCoursePrice[]> => {
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
        method: 'GET',
        cache: 'no-store',
      });

      if (response.ok) {
        const data = await response.json();
        return data.data;
      }

      const errorBody = await response.json();
      throw new Error(errorBody.message);
    } catch (error) {
      throw error;
    }
  },

  getGolfSources: async (): Promise<string[]> => {
    const response = await fetch(`${API_URL}/api/golf-sources`, {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }

    const errorBody = await response.json();
    throw new Error(errorBody.message);
  },
};
