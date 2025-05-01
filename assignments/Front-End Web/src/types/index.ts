export interface GolfClubPrice {
  id: string;
  golfCourseName: string;
  currentPrice: number;
  delta: number;
  source: string;
  collectedAt: string;
}

export interface ApiResponse {
  data: GolfClubPrice[];
  timestamp: string;
}
