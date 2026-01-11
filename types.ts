
export enum AppCategory {
  ALL = 'All',
  GAMES = 'Games',
  SNS = 'SNS',
  UTILITY = 'Utility',
  PRODUCTIVITY = 'Productivity'
}

export interface AppInfo {
  id: string;
  name: string;
  developer: string;
  category: AppCategory;
  rating: number;
  reviews: number;
  icon: string;
  banner: string;
  description: string;
  price: string;
  appStoreUrl: string;
  isEditorsChoice?: boolean;
}

export interface RecommendationResponse {
  reasoning: string;
  suggestedAppIds: string[];
}
