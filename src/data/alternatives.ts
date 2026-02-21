import { FoodItem, HealthRating, Level } from '../types';

export const ALTERNATIVES_ITEMS: FoodItem[] = [
  {
    id: 'tofu',
    name: 'Tofu',
    category: 'Plant-Based Alternatives',
    description: 'A soy-based protein source, versatile and low in calories.',
    nutrition: {
      calories: 76,
      protein: 8,
      carbs: 1.9,
      fiber: 0.3,
      fats: 4.8,
      micronutrients: ['Calcium', 'Manganese', 'Selenium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.MODERATE
    },
    portion: '100g',
    benefits: ['Complete protein', 'Low calorie'],
    caution: ['Limit if you have thyroid issues'],
    image: 'https://picsum.photos/seed/tofu/400/300'
  },
  {
    id: 'soya-chunks',
    name: 'Soya Chunks',
    category: 'Plant-Based Alternatives',
    description: 'A highly concentrated source of plant-based protein.',
    nutrition: {
      calories: 345,
      protein: 52,
      carbs: 33,
      fiber: 13,
      fats: 0.5,
      micronutrients: ['Iron', 'Calcium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.MODERATE
    },
    portion: '30-50g (dry)',
    benefits: ['Extremely high protein', 'Good for muscle building'],
    caution: ['Limit if you have thyroid issues'],
    image: 'https://picsum.photos/seed/soya/400/300'
  },
  {
    id: 'almond-milk',
    name: 'Almond Milk',
    category: 'Plant-Based Alternatives',
    description: 'A dairy-free milk alternative.',
    nutrition: {
      calories: 15,
      protein: 0.6,
      carbs: 0.6,
      fiber: 0.3,
      fats: 1.1,
      micronutrients: ['Vitamin E', 'Calcium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 glass (200ml)',
    benefits: ['Dairy-free', 'Low calorie'],
    caution: ['Low in protein'],
    image: 'https://picsum.photos/seed/almondmilk/400/300'
  },
  {
    id: 'oat-milk',
    name: 'Oat Milk',
    category: 'Plant-Based Alternatives',
    description: 'A creamy dairy-free milk alternative made from oats.',
    nutrition: {
      calories: 45,
      protein: 1,
      carbs: 6.6,
      fiber: 0.8,
      fats: 1.5,
      micronutrients: ['Vitamin B12', 'Calcium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 glass (200ml)',
    benefits: ['Dairy-free', 'Creamy texture'],
    caution: ['Higher in carbs than nut milks'],
    image: 'https://picsum.photos/seed/oatmilk/400/300'
  },
  {
    id: 'coconut-milk',
    name: 'Coconut Milk',
    category: 'Plant-Based Alternatives',
    description: 'A rich, creamy liquid made from the grated meat of mature coconuts.',
    nutrition: {
      calories: 230,
      protein: 2.3,
      carbs: 6,
      fiber: 2.2,
      fats: 24,
      micronutrients: ['Manganese', 'Copper', 'Magnesium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.MODERATE,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '100ml',
    benefits: ['Dairy-free', 'Rich in healthy fats'],
    caution: ['High in saturated fat'],
    image: 'https://picsum.photos/seed/coconutmilk/400/300'
  },
  {
    id: 'tempeh',
    name: 'Tempeh',
    category: 'Plant-Based Alternatives',
    description: 'A fermented soy product with a nutty flavor.',
    nutrition: {
      calories: 192,
      protein: 20.3,
      carbs: 7.6,
      fiber: 0,
      fats: 10.8,
      micronutrients: ['Manganese', 'Phosphorus']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.MODERATE
    },
    portion: '100g',
    benefits: ['High in protein', 'Probiotic benefits'],
    caution: ['Contains soy'],
    image: 'https://picsum.photos/seed/tempeh/400/300'
  }
];
