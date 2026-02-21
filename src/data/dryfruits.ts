import { FoodItem, HealthRating, Level } from '../types';

export const DRYFRUITS_ITEMS: FoodItem[] = [
  {
    id: 'raisins',
    name: 'Raisins (Kishmish)',
    category: 'Dry Fruits',
    description: 'Dried grapes that are a concentrated source of energy.',
    nutrition: {
      calories: 299,
      protein: 3.1,
      carbs: 79,
      fiber: 3.7,
      fats: 0.5,
      micronutrients: ['Iron', 'Potassium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 handful (30g)',
    benefits: ['Quick energy boost', 'Supports bone health'],
    caution: ['High in sugar'],
    image: 'https://picsum.photos/seed/raisins/400/300'
  },
  {
    id: 'dates',
    name: 'Dates (Khajur)',
    category: 'Dry Fruits',
    description: 'Sweet dried fruit exceptionally high in fiber and minerals.',
    nutrition: {
      calories: 277,
      protein: 1.8,
      carbs: 75,
      fiber: 6.7,
      fats: 0.2,
      micronutrients: ['Potassium', 'Magnesium', 'Iron']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '2-3 pieces',
    benefits: ['Natural sweetener', 'Supports digestive health'],
    caution: ['High in sugar'],
    image: 'https://picsum.photos/seed/dates/400/300'
  },
  {
    id: 'dry-figs',
    name: 'Dry Figs (Anjeer)',
    category: 'Dry Fruits',
    description: 'Sweet dried fruit exceptionally high in fiber and calcium.',
    nutrition: {
      calories: 249,
      protein: 3.3,
      carbs: 63.9,
      fiber: 9.8,
      fats: 0.9,
      micronutrients: ['Calcium', 'Potassium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '2-3 pieces',
    benefits: ['Supports digestive health', 'Good for bone health'],
    caution: ['High in sugar'],
    image: 'https://picsum.photos/seed/anjeer/400/300'
  }
];
