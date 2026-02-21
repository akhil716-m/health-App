import { Goal } from '../types';

export const GOALS: Goal[] = [
  {
    id: 'weight-loss',
    name: 'Weight Loss',
    principles: ['Calorie control', 'High fiber', 'Moderate carbs', 'Adequate protein'],
    recommended_food_ids: ['sprouts', 'oats', 'quinoa', 'broccoli', 'spinach', 'apple'],
    limit_food_ids: ['paneer', 'dates', 'walnuts'],
    sample_meal_plan: {
      breakfast: ['Moong sprouts', 'Oats'],
      lunch: ['Dal with lots of vegetables', 'Buttermilk'],
      snacks: ['Apple', 'Roasted chana'],
      dinner: ['Clear soup', 'Grilled tofu']
    }
  },
  {
    id: 'muscle-gain',
    name: 'Muscle Gain',
    principles: ['High protein vegetarian', 'Calorie surplus', 'Complex carbs'],
    recommended_food_ids: ['paneer', 'tofu', 'dal', 'quinoa', 'almonds', 'banana'],
    limit_food_ids: [],
    sample_meal_plan: {
      breakfast: ['Paneer paratha', 'Banana Milkshake'],
      lunch: ['Dal with quinoa and curd', 'Paneer sabzi'],
      snacks: ['Nuts and seeds', 'Sprouts'],
      dinner: ['Tofu bhurji', 'Roti', 'Dal']
    }
  },
  {
    id: 'heart-health',
    name: 'Heart Health',
    principles: ['Low sodium', 'High Omega-3', 'Fiber rich', 'Plant based fats'],
    recommended_food_ids: ['walnuts', 'flaxseeds', 'oats', 'spinach', 'broccoli', 'chia-seeds'],
    limit_food_ids: ['paneer'],
    sample_meal_plan: {
      breakfast: ['Oats with walnuts and flaxseeds', 'Fruit bowl'],
      lunch: ['Dal with brown rice', 'Mixed salad'],
      snacks: ['Almonds', 'Coconut water'],
      dinner: ['Vegetable soup', 'Steamed broccoli with tofu']
    }
  },
  {
    id: 'high-protein',
    name: 'High Protein Vegetarian',
    principles: ['Diverse protein sources', 'Post-workout recovery', 'Sustained energy'],
    recommended_food_ids: ['paneer', 'tofu', 'sprouts', 'dal', 'quinoa', 'almonds', 'chia-seeds'],
    limit_food_ids: [],
    sample_meal_plan: {
      breakfast: ['Sprouts salad', 'Paneer sandwich'],
      lunch: ['Dal with quinoa', 'Curd'],
      snacks: ['Nuts and seeds', 'Protein shake (natural)'],
      dinner: ['Tofu stir-fry', 'Dal soup']
    }
  }
];
