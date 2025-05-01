export type SortField = 'golfCourseName' | 'currentPrice' | 'delta' | 'collectedAt';
export type SortOrder = 'asc' | 'desc';

export interface GolfClubPrice {
  id: string;
  golfCourseName: string;
  currentPrice: number;
  delta: number;
  source: string;
  collectedAt: string;
}
