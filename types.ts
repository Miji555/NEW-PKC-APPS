
export enum AppCategory {
  ALL = 'All',
  PRODUCTIVITY = 'Productivity',
  GAMES = 'Games',
  CREATIVE = 'Creative',
  LIFESTYLE = 'Lifestyle',
  UTILITIES = 'Utilities'
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
