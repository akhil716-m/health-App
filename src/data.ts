import { GRAINS_ITEMS } from './data/grains';
import { LENTILS_ITEMS } from './data/lentils';
import { VEGETABLES_ITEMS } from './data/vegetables';
import { FRUITS_ITEMS } from './data/fruits';
import { NUTS_ITEMS } from './data/nuts';
import { DRYFRUITS_ITEMS } from './data/dryfruits';
import { DAIRY_ITEMS } from './data/dairy';
import { ALTERNATIVES_ITEMS } from './data/alternatives';
import { OILS_ITEMS } from './data/oils';
import { TRADITIONAL_ITEMS } from './data/traditional';
import { SPICES_ITEMS } from './data/spices';
import { HEALTH_CONDITIONS as CONDITIONS } from './data/conditions';
import { GOALS as GOAL_LIST } from './data/goals';
import { RECIPES as RECIPE_LIST } from './data/recipes';
import { FoodItem, HealthCondition, Goal, Recipe } from './types';

export const FOOD_ITEMS: FoodItem[] = [
  ...GRAINS_ITEMS,
  ...LENTILS_ITEMS,
  ...VEGETABLES_ITEMS,
  ...FRUITS_ITEMS,
  ...NUTS_ITEMS,
  ...DRYFRUITS_ITEMS,
  ...DAIRY_ITEMS,
  ...ALTERNATIVES_ITEMS,
  ...OILS_ITEMS,
  ...TRADITIONAL_ITEMS,
  ...SPICES_ITEMS,
];

export const HEALTH_CONDITIONS: HealthCondition[] = CONDITIONS;
export const GOALS: Goal[] = GOAL_LIST;
export const RECIPES: Recipe[] = RECIPE_LIST;
