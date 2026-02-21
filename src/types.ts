export enum HealthRating {
  GOOD = 'Good',
  MODERATE = 'Moderate',
  LIMIT = 'Limit'
}

export enum Level {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low'
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fiber: number;
  fats: number;
  micronutrients: string[];
}

export interface Indicators {
  protein_level: Level;
  fiber_level: Level;
  glycemic_load: Level;
  heart_friendly: HealthRating;
  thyroid_friendly: HealthRating;
}

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  description: string;
  nutrition: Nutrition;
  indicators: Indicators;
  portion: string;
  benefits: string[];
  caution: string[];
  image?: string;
}

export interface MealPlan {
  breakfast: string[];
  lunch: string[];
  snacks: string[];
  dinner: string[];
}

export interface HealthCondition {
  id: string;
  name: string;
  summary: string;
  prefer_food_ids: string[];
  moderate_food_ids: string[];
  avoid_food_ids: string[];
  sample_meal_plan: MealPlan;
}

export interface Goal {
  id: string;
  name: string;
  principles: string[];
  recommended_food_ids: string[];
  limit_food_ids: string[];
  sample_meal_plan: MealPlan;
}

export interface Recipe {
  id: string;
  name: string;
  category: string;
  meal_type: string;
  serves: string;
  healing_level: 'High' | 'Moderate' | 'Low';
  digestibility: 'Very Easy' | 'Easy' | 'Medium';
  grain_based: boolean;
  raw: boolean;
  contains_nuts_seeds: boolean;
  ingredients: string[];
  pre_preparation: string[];
  method_steps: string[];
}
