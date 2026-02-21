import { FoodItem, HealthRating, Level } from '../types';

export const NUTS_ITEMS: FoodItem[] = [
  {
    id: 'almonds',
    name: 'Almonds',
    category: 'Nuts & Seeds',
    description: 'A nutrient-dense nut rich in healthy fats and Vitamin E.',
    nutrition: {
      calories: 579,
      protein: 21,
      carbs: 22,
      fiber: 12.5,
      fats: 50,
      micronutrients: ['Vitamin E', 'Magnesium', 'Manganese']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '5-6 soaked almonds',
    benefits: ['Supports brain health', 'Heart healthy'],
    caution: ['High in calories'],
    image: 'https://picsum.photos/seed/almonds/400/300'
  },
  {
    id: 'walnuts',
    name: 'Walnuts',
    category: 'Nuts & Seeds',
    description: 'A brain-shaped nut exceptionally rich in Omega-3 fatty acids.',
    nutrition: {
      calories: 654,
      protein: 15,
      carbs: 14,
      fiber: 6.7,
      fats: 65,
      micronutrients: ['Omega-3', 'Copper', 'Manganese']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '2-3 whole walnuts',
    benefits: ['Supports brain health', 'Reduces inflammation'],
    caution: ['High in calories'],
    image: 'https://picsum.photos/seed/walnuts/400/300'
  },
  {
    id: 'flaxseeds',
    name: 'Flaxseeds',
    category: 'Nuts & Seeds',
    description: 'Small seeds that are a powerhouse of Omega-3 and fiber.',
    nutrition: {
      calories: 534,
      protein: 18,
      carbs: 29,
      fiber: 27,
      fats: 42,
      micronutrients: ['Omega-3', 'Thiamine', 'Magnesium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 tablespoon (ground)',
    benefits: ['Heart healthy', 'Supports digestion'],
    caution: ['Best consumed ground for absorption'],
    image: 'https://picsum.photos/seed/flaxseeds/400/300'
  },
  {
    id: 'chia-seeds',
    name: 'Chia Seeds',
    category: 'Nuts & Seeds',
    description: 'Tiny seeds that expand in liquid, rich in fiber and Omega-3.',
    nutrition: {
      calories: 486,
      protein: 17,
      carbs: 42,
      fiber: 34,
      fats: 31,
      micronutrients: ['Omega-3', 'Calcium', 'Manganese']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 tablespoon (soaked)',
    benefits: ['Excellent for hydration', 'High fiber'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/chiaseeds/400/300'
  },
  {
    id: 'peanuts',
    name: 'Peanuts',
    category: 'Nuts & Seeds',
    description: 'A common legume often categorized as a nut, rich in protein.',
    nutrition: {
      calories: 567,
      protein: 25.8,
      carbs: 16.1,
      fiber: 8.5,
      fats: 49.2,
      micronutrients: ['Biotin', 'Copper', 'Niacin']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 handful (30g)',
    benefits: ['High in protein', 'Supports heart health'],
    caution: ['Common allergen'],
    image: 'https://picsum.photos/seed/peanuts/400/300'
  },
  {
    id: 'pumpkin-seeds',
    name: 'Pumpkin Seeds',
    category: 'Nuts & Seeds',
    description: 'Small seeds rich in zinc and magnesium.',
    nutrition: {
      calories: 559,
      protein: 30,
      carbs: 10,
      fiber: 6,
      fats: 49,
      micronutrients: ['Zinc', 'Magnesium', 'Iron']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 tablespoon',
    benefits: ['Supports prostate health', 'Improves sleep quality'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/pumpkinseeds/400/300'
  },
  {
    id: 'sunflower-seeds',
    name: 'Sunflower Seeds',
    category: 'Nuts & Seeds',
    description: 'Crunchy seeds rich in Vitamin E.',
    nutrition: {
      calories: 584,
      protein: 20.8,
      carbs: 20,
      fiber: 8.6,
      fats: 51.5,
      micronutrients: ['Vitamin E', 'Selenium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 tablespoon',
    benefits: ['Anti-inflammatory', 'Supports heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/sunflowerseeds/400/300'
  },
  {
    id: 'sesame-seeds',
    name: 'Sesame Seeds (Til)',
    category: 'Nuts & Seeds',
    description: 'Tiny seeds that are a great source of calcium.',
    nutrition: {
      calories: 573,
      protein: 17.7,
      carbs: 23.5,
      fiber: 11.8,
      fats: 49.7,
      micronutrients: ['Calcium', 'Magnesium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 tablespoon',
    benefits: ['Supports bone health', 'Good for skin and hair'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/sesame/400/300'
  }
];
