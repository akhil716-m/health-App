import { FoodItem, HealthRating, Level } from '../types';

export const DAIRY_ITEMS: FoodItem[] = [
  {
    id: 'paneer',
    name: 'Paneer (Cottage Cheese)',
    category: 'Dairy & Dairy Products',
    description: 'A fresh cheese common in South Asia, a major protein source for vegetarians.',
    nutrition: {
      calories: 265,
      protein: 18,
      carbs: 1.2,
      fiber: 0,
      fats: 20,
      micronutrients: ['Calcium', 'Phosphorus']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.MODERATE,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '100g',
    benefits: ['High in protein', 'Good for bone health'],
    caution: ['High in saturated fat'],
    image: 'https://picsum.photos/seed/paneer/400/300'
  },
  {
    id: 'curd',
    name: 'Curd (Dahi)',
    category: 'Dairy & Dairy Products',
    description: 'A probiotic-rich dairy product essential for gut health.',
    nutrition: {
      calories: 61,
      protein: 3.5,
      carbs: 4.7,
      fiber: 0,
      fats: 3.3,
      micronutrients: ['Probiotics', 'Calcium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g)',
    benefits: ['Improves digestion', 'Boosts immunity'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/curd/400/300'
  },
  {
    id: 'ghee',
    name: 'Ghee (Clarified Butter)',
    category: 'Dairy & Dairy Products',
    description: 'Clarified butter used extensively in Indian cooking.',
    nutrition: {
      calories: 900,
      protein: 0,
      carbs: 0,
      fiber: 0,
      fats: 100,
      micronutrients: ['Vitamin A', 'Vitamin E', 'Vitamin K']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.LIMIT,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 teaspoon',
    benefits: ['Good for digestion', 'Healthy fats in moderation'],
    caution: ['Very high in calories and saturated fat'],
    image: 'https://picsum.photos/seed/ghee/400/300'
  },
  {
    id: 'cow-milk',
    name: 'Cow Milk',
    category: 'Dairy & Dairy Products',
    description: 'A primary source of calcium and protein for many.',
    nutrition: {
      calories: 61,
      protein: 3.2,
      carbs: 4.8,
      fiber: 0,
      fats: 3.3,
      micronutrients: ['Calcium', 'Vitamin D', 'Vitamin B12']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 glass (200ml)',
    benefits: ['Supports bone health', 'Complete protein'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/milk/400/300'
  },
  {
    id: 'buttermilk',
    name: 'Buttermilk (Chaas)',
    category: 'Dairy & Dairy Products',
    description: 'A cooling, probiotic-rich drink made from diluted curd.',
    nutrition: {
      calories: 40,
      protein: 3.3,
      carbs: 4.8,
      fiber: 0,
      fats: 0.9,
      micronutrients: ['Probiotics', 'Calcium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 glass (200ml)',
    benefits: ['Aids digestion', 'Highly hydrating'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/buttermilk/400/300'
  },
  {
    id: 'butter',
    name: 'Butter',
    category: 'Dairy & Dairy Products',
    description: 'A dairy product made from the fat and protein components of milk or cream.',
    nutrition: {
      calories: 717,
      protein: 0.9,
      carbs: 0.1,
      fiber: 0,
      fats: 81,
      micronutrients: ['Vitamin A', 'Vitamin D']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.LIMIT,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 teaspoon',
    benefits: ['Rich in fat-soluble vitamins'],
    caution: ['High in saturated fat'],
    image: 'https://picsum.photos/seed/butter/400/300'
  }
];
