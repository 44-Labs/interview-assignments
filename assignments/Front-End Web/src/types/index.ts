export type SortOrder = 'asc' | 'desc' | undefined | null;

export interface GolfClubPrice {
  id: string;
  golfCourseName: string;
  currentPrice: number;
  delta: number;
  source: string;
  collectedAt: string;
}

export interface GolfClubPriceWithWarning extends GolfClubPrice {
  isWarning: boolean;
  avgPrice: number;
  diffPercent: number;
}
