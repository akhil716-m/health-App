import { FoodItem, HealthRating, Level } from '../types';

export const SPICES_ITEMS: FoodItem[] = [
  {
    id: 'turmeric',
    name: 'Turmeric',
    category: 'Spices & Condiments',
    description: 'A bright yellow spice known for its anti-inflammatory properties.',
    nutrition: {
      calories: 354,
      protein: 7.8,
      carbs: 65,
      fiber: 21,
      fats: 9.9,
      micronutrients: ['Curcumin', 'Iron']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1/2 teaspoon daily',
    benefits: ['Powerful anti-inflammatory', 'Strong antioxidant'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/turmeric/400/300'
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper',
    category: 'Spices & Condiments',
    description: 'The "King of Spices," known for its pungent flavor and piperine content.',
    nutrition: {
      calories: 251,
      protein: 10,
      carbs: 64,
      fiber: 25,
      fats: 3.3,
      micronutrients: ['Piperine', 'Manganese', 'Vitamin K']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1/4 teaspoon daily',
    benefits: ['Improves nutrient absorption', 'Supports digestion'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/blackpepper/400/300'
  },
  {
    id: 'jaggery',
    name: 'Jaggery (Gur)',
    category: 'Spices & Condiments',
    description: 'Unrefined sugar made from sugarcane or palm sap.',
    nutrition: {
      calories: 383,
      protein: 0.4,
      carbs: 98,
      fiber: 0,
      fats: 0.1,
      micronutrients: ['Iron', 'Magnesium', 'Potassium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.HIGH,
      heart_friendly: HealthRating.MODERATE,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 small piece (10g)',
    benefits: ['Rich in minerals', 'Aids digestion after meals'],
    caution: ['High in sugar; portion control'],
    image: 'https://picsum.photos/seed/jaggery/400/300'
  },
  {
    id: 'honey',
    name: 'Honey',
    category: 'Spices & Condiments',
    description: 'A sweet liquid made by bees, known for its medicinal properties.',
    nutrition: {
      calories: 304,
      protein: 0.3,
      carbs: 82,
      fiber: 0,
      fats: 0,
      micronutrients: ['Antioxidants', 'Enzymes']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 teaspoon',
    benefits: ['Antibacterial', 'Soothes cough'],
    caution: ['High in sugar'],
    image: 'https://picsum.photos/seed/honey/400/300'
  },
  {
    id: 'cumin',
    name: 'Cumin (Jeera)',
    category: 'Spices & Condiments',
    description: 'A popular spice that aids digestion and is a rich source of iron.',
    nutrition: {
      calories: 375,
      protein: 17.8,
      carbs: 44.2,
      fiber: 10.5,
      fats: 22.3,
      micronutrients: ['Iron', 'Manganese']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 teaspoon daily',
    benefits: ['Aids digestion', 'Rich in iron'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/cumin/400/300'
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon (Dalchini)',
    category: 'Spices & Condiments',
    description: 'A sweet and woody spice known for its blood sugar lowering effects.',
    nutrition: {
      calories: 247,
      protein: 4,
      carbs: 81,
      fiber: 53,
      fats: 1.2,
      micronutrients: ['Cinnamaldehyde', 'Manganese']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1/2 teaspoon daily',
    benefits: ['Lowers blood sugar', 'Powerful antioxidant'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/cinnamon/400/300'
  }
];
