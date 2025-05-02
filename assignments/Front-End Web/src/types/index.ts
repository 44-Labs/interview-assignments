export type SortField = 'golfCourseName' | 'currentPrice';
export type SortOrder = 'asc' | 'desc';

export interface APIResponse<T> {
  data: T[];
  error: string | null;
}

export interface GolfClubPrice {
  id: string;
  golfCourseName: string;
  currentPrice: number;
  delta: number;
  source: string;
  collectedAt: string;
}
