import { FoodItem, HealthRating, Level } from '../types';

export const TRADITIONAL_ITEMS: FoodItem[] = [
  {
    id: 'idli',
    name: 'Idli',
    category: 'Indian Traditional Foods',
    description: 'Steamed savory cakes made from fermented rice and lentil batter.',
    nutrition: {
      calories: 39,
      protein: 1.3,
      carbs: 8,
      fiber: 0.5,
      fats: 0.1,
      micronutrients: ['Vitamin B', 'Iron']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '2 medium idlis',
    benefits: ['Easy to digest', 'Fermented (probiotic benefits)'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/idli/400/300'
  },
  {
    id: 'khichdi',
    name: 'Khichdi',
    category: 'Indian Traditional Foods',
    description: 'A comforting and balanced meal made from rice and lentils.',
    nutrition: {
      calories: 250,
      protein: 8,
      carbs: 45,
      fiber: 5,
      fats: 4,
      micronutrients: ['Iron', 'Magnesium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 large bowl',
    benefits: ['Complete protein', 'Easy to digest'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/khichdi/400/300'
  },
  {
    id: 'dosa',
    name: 'Dosa',
    category: 'Indian Traditional Foods',
    description: 'A thin pancake made from a fermented batter of rice and black gram.',
    nutrition: {
      calories: 168,
      protein: 3.9,
      carbs: 29,
      fiber: 0.9,
      fats: 3.7,
      micronutrients: ['Vitamin B', 'Iron']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 large dosa',
    benefits: ['Easy to digest', 'Fermented benefits'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/dosa/400/300'
  },
  {
    id: 'upma',
    name: 'Upma',
    category: 'Indian Traditional Foods',
    description: 'A thick porridge made from dry-roasted semolina.',
    nutrition: {
      calories: 192,
      protein: 4.5,
      carbs: 35,
      fiber: 1.5,
      fats: 3.5,
      micronutrients: ['Iron', 'Magnesium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl',
    benefits: ['Quick energy', 'Filling'],
    caution: ['Contains gluten'],
    image: 'https://picsum.photos/seed/upma/400/300'
  },
  {
    id: 'roti',
    name: 'Roti (Chapati)',
    category: 'Indian Traditional Foods',
    description: 'Unleavened flatbread made from whole wheat flour.',
    nutrition: {
      calories: 120,
      protein: 3.5,
      carbs: 24,
      fiber: 3.5,
      fats: 0.5,
      micronutrients: ['Manganese', 'Selenium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium roti',
    benefits: ['High fiber', 'Basic staple'],
    caution: ['Contains gluten'],
    image: 'https://picsum.photos/seed/roti/400/300'
  },
  {
    id: 'sambar',
    name: 'Sambar',
    category: 'Indian Traditional Foods',
    description: 'A lentil-based vegetable stew made with pigeon peas and tamarind.',
    nutrition: {
      calories: 150,
      protein: 7,
      carbs: 20,
      fiber: 5,
      fats: 4,
      micronutrients: ['Folate', 'Vitamin C']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl',
    benefits: ['High protein and fiber', 'Rich in vegetables'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/sambar/400/300'
  },
  {
    id: 'chole',
    name: 'Chole (Chickpea Curry)',
    category: 'Indian Traditional Foods',
    description: 'A spicy and flavorful chickpea curry, a staple in North India.',
    nutrition: {
      calories: 250,
      protein: 12,
      carbs: 35,
      fiber: 10,
      fats: 8,
      micronutrients: ['Iron', 'Folate']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl',
    benefits: ['High protein', 'Very filling'],
    caution: ['Can be spicy'],
    image: 'https://picsum.photos/seed/chole/400/300'
  },
  {
    id: 'rajma-curry',
    name: 'Rajma Curry',
    category: 'Indian Traditional Foods',
    description: 'A popular North Indian dish made with red kidney beans in a thick gravy.',
    nutrition: {
      calories: 280,
      protein: 14,
      carbs: 40,
      fiber: 12,
      fats: 7,
      micronutrients: ['Iron', 'Potassium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl',
    benefits: ['Rich in iron', 'Supports heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/rajmacurry/400/300'
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    category: 'Indian Traditional Foods',
    description: 'A classic dish made with spinach and cottage cheese.',
    nutrition: {
      calories: 220,
      protein: 12,
      carbs: 8,
      fiber: 3,
      fats: 16,
      micronutrients: ['Calcium', 'Vitamin A', 'Iron']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.MODERATE,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl',
    benefits: ['Rich in calcium and iron', 'Low carb'],
    caution: ['High in saturated fat'],
    image: 'https://picsum.photos/seed/palakpaneer/400/300'
  }
];
