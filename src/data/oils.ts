import { FoodItem, HealthRating, Level } from '../types';

export const OILS_ITEMS: FoodItem[] = [
  {
    id: 'olive-oil',
    name: 'Olive Oil',
    category: 'Oils & Fats',
    description: 'A liquid fat obtained from olives, rich in monounsaturated fats.',
    nutrition: {
      calories: 884,
      protein: 0,
      carbs: 0,
      fiber: 0,
      fats: 100,
      micronutrients: ['Vitamin E', 'Vitamin K']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 tablespoon',
    benefits: ['Heart healthy', 'Anti-inflammatory'],
    caution: ['High in calories'],
    image: 'https://picsum.photos/seed/oliveoil/400/300'
  },
  {
    id: 'mustard-oil',
    name: 'Mustard Oil',
    category: 'Oils & Fats',
    description: 'A pungent oil common in Indian cooking, rich in MUFA.',
    nutrition: {
      calories: 884,
      protein: 0,
      carbs: 0,
      fiber: 0,
      fats: 100,
      micronutrients: ['Omega-3', 'Omega-6']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 tablespoon',
    benefits: ['Good for heart health', 'Anti-bacterial'],
    caution: ['High in calories'],
    image: 'https://picsum.photos/seed/mustardoil/400/300'
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    category: 'Oils & Fats',
    description: 'A tropical oil rich in medium-chain triglycerides (MCTs).',
    nutrition: {
      calories: 862,
      protein: 0,
      carbs: 0,
      fiber: 0,
      fats: 100,
      micronutrients: ['MCTs', 'Vitamin E']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.MODERATE,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 tablespoon',
    benefits: ['Quick energy source', 'Good for skin and hair'],
    caution: ['High in saturated fat'],
    image: 'https://picsum.photos/seed/coconutoil/400/300'
  },
  {
    id: 'groundnut-oil',
    name: 'Groundnut Oil',
    category: 'Oils & Fats',
    description: 'A vegetable oil derived from peanuts, common in Indian cooking.',
    nutrition: {
      calories: 884,
      protein: 0,
      carbs: 0,
      fiber: 0,
      fats: 100,
      micronutrients: ['Vitamin E', 'Phytosterols']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 tablespoon',
    benefits: ['High smoke point', 'Heart healthy MUFAs'],
    caution: ['High in calories'],
    image: 'https://picsum.photos/seed/groundnutoil/400/300'
  }
];
