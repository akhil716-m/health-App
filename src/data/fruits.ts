import { FoodItem, HealthRating, Level } from '../types';

export const FRUITS_ITEMS: FoodItem[] = [
  {
    id: 'apple',
    name: 'Apple',
    category: 'Fruits',
    description: 'A fiber-rich fruit that supports heart and gut health.',
    nutrition: {
      calories: 52,
      protein: 0.3,
      carbs: 14,
      fiber: 2.4,
      fats: 0.2,
      micronutrients: ['Vitamin C', 'Potassium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium apple',
    benefits: ['Supports weight loss', 'Good for heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/apple/400/300'
  },
  {
    id: 'banana',
    name: 'Banana',
    category: 'Fruits',
    description: 'A convenient fruit rich in potassium and quick energy.',
    nutrition: {
      calories: 89,
      protein: 1.1,
      carbs: 23,
      fiber: 2.6,
      fats: 0.3,
      micronutrients: ['Potassium', 'Vitamin B6']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium banana',
    benefits: ['Quick energy boost', 'Supports heart health'],
    caution: ['High in sugar'],
    image: 'https://picsum.photos/seed/banana/400/300'
  },
  {
    id: 'mango',
    name: 'Mango',
    category: 'Fruits',
    description: 'The "King of Fruits," rich in Vitamins A and C.',
    nutrition: {
      calories: 60,
      protein: 0.8,
      carbs: 15,
      fiber: 1.6,
      fats: 0.4,
      micronutrients: ['Vitamin A', 'Vitamin C']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium mango',
    benefits: ['Supports eye health', 'Boosts immunity'],
    caution: ['High in sugar'],
    image: 'https://picsum.photos/seed/mango/400/300'
  },
  {
    id: 'orange',
    name: 'Orange',
    category: 'Fruits',
    description: 'A citrus fruit famous for its high Vitamin C content.',
    nutrition: {
      calories: 47,
      protein: 0.9,
      carbs: 11.8,
      fiber: 2.4,
      fats: 0.1,
      micronutrients: ['Vitamin C', 'Folate']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium orange',
    benefits: ['Boosts immunity', 'Good for skin health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/orange/400/300'
  },
  {
    id: 'papaya',
    name: 'Papaya',
    category: 'Fruits',
    description: 'A tropical fruit rich in Vitamin C and digestive enzymes.',
    nutrition: {
      calories: 43,
      protein: 0.5,
      carbs: 11,
      fiber: 1.7,
      fats: 0.3,
      micronutrients: ['Vitamin C', 'Vitamin A']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g)',
    benefits: ['Aids digestion', 'Good for skin'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/papaya/400/300'
  },
  {
    id: 'guava',
    name: 'Guava',
    category: 'Fruits',
    description: 'A tropical fruit exceptionally rich in Vitamin C and fiber.',
    nutrition: {
      calories: 68,
      protein: 2.6,
      carbs: 14,
      fiber: 5.4,
      fats: 1,
      micronutrients: ['Vitamin C', 'Vitamin A', 'Potassium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium guava',
    benefits: ['Boosts immunity', 'Good for digestion', 'Supports heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/guava/400/300'
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    category: 'Fruits',
    description: 'A hydrating fruit high in lycopene and water.',
    nutrition: {
      calories: 30,
      protein: 0.6,
      carbs: 8,
      fiber: 0.4,
      fats: 0.2,
      micronutrients: ['Lycopene', 'Vitamin C', 'Vitamin A']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g)',
    benefits: ['Highly hydrating', 'Supports heart health'],
    caution: ['High GI'],
    image: 'https://picsum.photos/seed/watermelon/400/300'
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate',
    category: 'Fruits',
    description: 'A superfruit packed with powerful antioxidants.',
    nutrition: {
      calories: 83,
      protein: 1.7,
      carbs: 19,
      fiber: 4,
      fats: 1.2,
      micronutrients: ['Antioxidants', 'Vitamin K', 'Vitamin C']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1/2 bowl seeds',
    benefits: ['Anti-inflammatory', 'Supports heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/pomegranate/400/300'
  },
  {
    id: 'amla',
    name: 'Amla (Indian Gooseberry)',
    category: 'Fruits',
    description: 'One of the richest sources of Vitamin C.',
    nutrition: {
      calories: 44,
      protein: 0.8,
      carbs: 10,
      fiber: 4.3,
      fats: 0.5,
      micronutrients: ['Vitamin C', 'Antioxidants']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium amla',
    benefits: ['Boosts immunity', 'Good for hair and skin'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/amla/400/300'
  },
  {
    id: 'chikoo',
    name: 'Chikoo (Sapota)',
    category: 'Fruits',
    description: 'A sweet tropical fruit rich in energy and fiber.',
    nutrition: {
      calories: 83,
      protein: 0.4,
      carbs: 20,
      fiber: 5.3,
      fats: 1.1,
      micronutrients: ['Vitamin C', 'Vitamin A', 'Iron']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium chikoo',
    benefits: ['Quick energy', 'Supports digestion'],
    caution: ['High in sugar'],
    image: 'https://picsum.photos/seed/chikoo/400/300'
  },
  {
    id: 'pear',
    name: 'Pear',
    category: 'Fruits',
    description: 'A sweet, bell-shaped fruit that is high in fiber.',
    nutrition: {
      calories: 57,
      protein: 0.4,
      carbs: 15,
      fiber: 3.1,
      fats: 0.1,
      micronutrients: ['Vitamin C', 'Vitamin K', 'Potassium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium pear',
    benefits: ['Supports gut health', 'Anti-inflammatory'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/pear/400/300'
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    category: 'Fruits',
    description: 'A bright red, juicy fruit rich in Vitamin C and antioxidants.',
    nutrition: {
      calories: 32,
      protein: 0.7,
      carbs: 7.7,
      fiber: 2,
      fats: 0.3,
      micronutrients: ['Vitamin C', 'Manganese', 'Folate']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g)',
    benefits: ['Heart healthy', 'Supports blood sugar control'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/strawberry/400/300'
  },
  {
    id: 'jamun',
    name: 'Jamun (Black Plum)',
    category: 'Fruits',
    description: 'A summer fruit known for its medicinal properties, especially for diabetes.',
    nutrition: {
      calories: 60,
      protein: 0.7,
      carbs: 15,
      fiber: 0.9,
      fats: 0.2,
      micronutrients: ['Vitamin C', 'Iron', 'Antioxidants']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (100g)',
    benefits: ['Excellent for diabetes', 'Purifies blood'],
    caution: ['Avoid consuming on empty stomach'],
    image: 'https://picsum.photos/seed/jamun/400/300'
  }
];
