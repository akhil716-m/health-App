import { HealthCondition, Level, HealthRating } from '../types';

export const HEALTH_CONDITIONS: HealthCondition[] = [
  {
    id: 'diabetes',
    name: 'Diabetes / Pre-diabetes',
    summary: 'Focus on stable blood sugar control with fiber-rich, low-glycemic foods.',
    prefer_food_ids: ['oats', 'quinoa', 'ragi', 'sprouts', 'dal', 'broccoli', 'spinach'],
    moderate_food_ids: ['sweet-potato', 'apple'],
    avoid_food_ids: ['dates', 'banana'],
    sample_meal_plan: {
      breakfast: ['Oats with nuts', 'Ragi Porridge'],
      lunch: ['Quinoa with Dal', 'Sprouts Salad'],
      snacks: ['Roasted Chana', 'Walnuts'],
      dinner: ['Vegetable Soup', 'Tofu Stir-fry']
    }
  },
  {
    id: 'hypertension',
    name: 'Hypertension',
    summary: 'Focus on low-sodium, potassium-rich foods to manage blood pressure.',
    prefer_food_ids: ['banana', 'spinach', 'oats', 'flaxseeds', 'walnuts', 'broccoli'],
    moderate_food_ids: ['paneer'],
    avoid_food_ids: [],
    sample_meal_plan: {
      breakfast: ['Banana and Oat Smoothie', 'Fruit bowl'],
      lunch: ['Dal with brown rice', 'Spinach Salad'],
      snacks: ['Unsalted walnuts', 'Coconut water'],
      dinner: ['Mixed vegetable sabzi', 'Moong dal soup']
    }
  },
  {
    id: 'cholesterol',
    name: 'High Cholesterol',
    summary: 'Focus on soluble fiber and healthy unsaturated fats to lower LDL.',
    prefer_food_ids: ['oats', 'flaxseeds', 'walnuts', 'almonds', 'chia-seeds', 'apple', 'broccoli'],
    moderate_food_ids: ['paneer'],
    avoid_food_ids: [],
    sample_meal_plan: {
      breakfast: ['Oats with flaxseeds', 'Apple'],
      lunch: ['Dal with Quinoa', 'Walnut Salad'],
      snacks: ['Almonds', 'Roasted Chana'],
      dinner: ['Tofu with steamed broccoli', 'Vegetable Soup']
    }
  },
  {
    id: 'thyroid',
    name: 'Hypothyroidism',
    summary: 'Focus on nutrient-dense foods while being mindful of goitrogens.',
    prefer_food_ids: ['walnuts', 'almonds', 'chia-seeds', 'dal', 'quinoa', 'banana'],
    moderate_food_ids: ['broccoli', 'spinach', 'tofu'],
    avoid_food_ids: [],
    sample_meal_plan: {
      breakfast: ['Banana and Chia Pudding', 'Fruit bowl'],
      lunch: ['Dal with Quinoa', 'Curd'],
      snacks: ['Almonds', 'Coconut water'],
      dinner: ['Mixed vegetable sabzi (cooked)', 'Moong dal soup']
    }
  }
];
