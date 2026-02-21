import { FoodItem, HealthRating, Level } from '../types';

export const VEGETABLES_ITEMS: FoodItem[] = [
  {
    id: 'spinach',
    name: 'Spinach (Palak)',
    category: 'Vegetables',
    description: 'A leafy green vegetable packed with iron and vitamins.',
    nutrition: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fiber: 2.2,
      fats: 0.4,
      micronutrients: ['Vitamin K', 'Vitamin A', 'Iron']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Good for eye health', 'Supports blood pressure management'],
    caution: ['High in oxalates'],
    image: 'https://picsum.photos/seed/spinach/400/300'
  },
  {
    id: 'methi',
    name: 'Fenugreek (Methi)',
    category: 'Vegetables',
    description: 'Bitter leafy greens known for their medicinal properties.',
    nutrition: {
      calories: 49,
      protein: 4.4,
      carbs: 6,
      fiber: 1.1,
      fats: 0.9,
      micronutrients: ['Iron', 'Calcium', 'Vitamin C']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Helps in diabetes management', 'Good for digestion'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/methi/400/300'
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    category: 'Vegetables',
    description: 'A cruciferous vegetable known for its cancer-fighting properties.',
    nutrition: {
      calories: 34,
      protein: 2.8,
      carbs: 7,
      fiber: 2.6,
      fats: 0.4,
      micronutrients: ['Vitamin C', 'Vitamin K', 'Folate']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.MODERATE
    },
    portion: '1 bowl (steamed)',
    benefits: ['High in Vitamin C', 'Supports detoxification'],
    caution: ['May cause gas'],
    image: 'https://picsum.photos/seed/broccoli/400/300'
  },
  {
    id: 'carrot',
    name: 'Carrot',
    category: 'Vegetables',
    description: 'A root vegetable high in Beta-Carotene.',
    nutrition: {
      calories: 41,
      protein: 0.9,
      carbs: 9.6,
      fiber: 2.8,
      fats: 0.2,
      micronutrients: ['Vitamin A', 'Biotin', 'Vitamin K']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium carrot',
    benefits: ['Supports eye health', 'Good for skin'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/carrot/400/300'
  },
  {
    id: 'beetroot',
    name: 'Beetroot',
    category: 'Vegetables',
    description: 'A vibrant root vegetable that improves blood flow.',
    nutrition: {
      calories: 43,
      protein: 1.6,
      carbs: 9.6,
      fiber: 2.8,
      fats: 0.2,
      micronutrients: ['Folate', 'Manganese', 'Nitrates']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium beet',
    benefits: ['Improves athletic performance', 'Lowers blood pressure'],
    caution: ['May cause pink urine'],
    image: 'https://picsum.photos/seed/beetroot/400/300'
  },
  {
    id: 'sweet-potato',
    name: 'Sweet Potato',
    category: 'Vegetables',
    description: 'A nutritious root vegetable high in Beta-Carotene.',
    nutrition: {
      calories: 86,
      protein: 1.6,
      carbs: 20,
      fiber: 3,
      fats: 0.1,
      micronutrients: ['Vitamin A', 'Vitamin C', 'Manganese']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium potato',
    benefits: ['Supports eye health', 'Boosts immunity'],
    caution: ['Portion control for diabetics'],
    image: 'https://picsum.photos/seed/sweetpotato/400/300'
  },
  {
    id: 'potato',
    name: 'Potato',
    category: 'Vegetables',
    description: 'A versatile starchy vegetable, a major source of energy.',
    nutrition: {
      calories: 77,
      protein: 2,
      carbs: 17,
      fiber: 2.2,
      fats: 0.1,
      micronutrients: ['Vitamin C', 'Potassium', 'Vitamin B6']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.HIGH,
      heart_friendly: HealthRating.MODERATE,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium potato',
    benefits: ['Good source of energy', 'Rich in potassium'],
    caution: ['High GI; avoid deep frying'],
    image: 'https://picsum.photos/seed/potato/400/300'
  },
  {
    id: 'tomato',
    name: 'Tomato',
    category: 'Vegetables',
    description: 'A major dietary source of the antioxidant lycopene.',
    nutrition: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fiber: 1.2,
      fats: 0.2,
      micronutrients: ['Lycopene', 'Vitamin C', 'Potassium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium tomato',
    benefits: ['Heart healthy', 'Supports skin health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/tomato/400/300'
  },
  {
    id: 'onion',
    name: 'Onion',
    category: 'Vegetables',
    description: 'A basic ingredient in many cuisines, rich in quercetin.',
    nutrition: {
      calories: 40,
      protein: 1.1,
      carbs: 9.3,
      fiber: 1.7,
      fats: 0.1,
      micronutrients: ['Quercetin', 'Vitamin C', 'Folate']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 medium onion',
    benefits: ['Anti-inflammatory', 'Supports heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/onion/400/300'
  },
  {
    id: 'okra',
    name: 'Okra (Bhindi)',
    category: 'Vegetables',
    description: 'A green vegetable rich in folate and fiber.',
    nutrition: {
      calories: 33,
      protein: 1.9,
      carbs: 7,
      fiber: 3.2,
      fats: 0.2,
      micronutrients: ['Folate', 'Vitamin K']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Good for blood sugar', 'High in folate'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/okra/400/300'
  },
  {
    id: 'bitter-gourd',
    name: 'Bitter Gourd (Karela)',
    category: 'Vegetables',
    description: 'Known for its blood-sugar-lowering properties.',
    nutrition: {
      calories: 17,
      protein: 1,
      carbs: 3.7,
      fiber: 2.8,
      fats: 0.2,
      micronutrients: ['Vitamin C', 'Vitamin A']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1/2 bowl (cooked)',
    benefits: ['Excellent for diabetes', 'Purifies blood'],
    caution: ['Very bitter'],
    image: 'https://picsum.photos/seed/bittergourd/400/300'
  },
  {
    id: 'cabbage',
    name: 'Cabbage',
    category: 'Vegetables',
    description: 'A leafy cruciferous vegetable, rich in Vitamin K.',
    nutrition: {
      calories: 25,
      protein: 1.3,
      carbs: 6,
      fiber: 2.5,
      fats: 0.1,
      micronutrients: ['Vitamin K', 'Vitamin C', 'Folate']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.MODERATE
    },
    portion: '1 bowl (cooked)',
    benefits: ['Supports digestion', 'Anti-inflammatory'],
    caution: ['May cause gas'],
    image: 'https://picsum.photos/seed/cabbage/400/300'
  },
  {
    id: 'bottle-gourd',
    name: 'Bottle Gourd (Lauki)',
    category: 'Vegetables',
    description: 'A water-rich vegetable, very cooling and easy to digest.',
    nutrition: {
      calories: 14,
      protein: 0.6,
      carbs: 3.4,
      fiber: 0.5,
      fats: 0.1,
      micronutrients: ['Vitamin C', 'Zinc', 'Magnesium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Very cooling', 'Aids digestion', 'Good for weight loss'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/lauki/400/300'
  },
  {
    id: 'radish',
    name: 'Radish',
    category: 'Vegetables',
    description: 'A pungent root vegetable that aids digestion.',
    nutrition: {
      calories: 16,
      protein: 0.7,
      carbs: 3.4,
      fiber: 1.6,
      fats: 0.1,
      micronutrients: ['Vitamin C', 'Potassium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1/2 bowl (raw)',
    benefits: ['Aids digestion', 'Detoxifies liver'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/radish/400/300'
  },
  {
    id: 'drumstick',
    name: 'Drumstick (Moringa)',
    category: 'Vegetables',
    description: 'A superfood rich in vitamins and minerals.',
    nutrition: {
      calories: 64,
      protein: 9.4,
      carbs: 8.3,
      fiber: 2,
      fats: 1.4,
      micronutrients: ['Vitamin C', 'Vitamin A', 'Calcium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '2-3 pieces (cooked)',
    benefits: ['Extremely nutrient-dense', 'Boosts immunity'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/drumstick/400/300'
  },
  {
    id: 'raw-banana',
    name: 'Raw Banana',
    category: 'Vegetables',
    description: 'Unripe bananas, a great source of resistant starch.',
    nutrition: {
      calories: 122,
      protein: 1.3,
      carbs: 32,
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
    portion: '1/2 bowl (cooked)',
    benefits: ['Good for gut health', 'Rich in potassium'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/rawbanana/400/300'
  },
  {
    id: 'mustard-greens',
    name: 'Mustard Greens (Sarson)',
    category: 'Vegetables',
    description: 'Pungent leafy greens, a staple in winter in North India.',
    nutrition: {
      calories: 27,
      protein: 2.9,
      carbs: 4.7,
      fiber: 3.2,
      fats: 0.4,
      micronutrients: ['Vitamin K', 'Vitamin A', 'Vitamin C']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.MODERATE
    },
    portion: '1 bowl (cooked)',
    benefits: ['High in antioxidants', 'Supports bone health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/sarson/400/300'
  },
  {
    id: 'coriander-leaves',
    name: 'Coriander Leaves (Dhania)',
    category: 'Vegetables',
    description: 'A popular herb used for garnishing and in chutneys.',
    nutrition: {
      calories: 23,
      protein: 2.1,
      carbs: 3.7,
      fiber: 2.8,
      fats: 0.5,
      micronutrients: ['Vitamin K', 'Vitamin C']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 handful',
    benefits: ['Aids digestion', 'Detoxifying'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/coriander/400/300'
  },
  {
    id: 'curry-leaves',
    name: 'Curry Leaves (Kadi Patta)',
    category: 'Vegetables',
    description: 'Aromatic leaves used extensively in South Indian cooking.',
    nutrition: {
      calories: 108,
      protein: 6.1,
      carbs: 18.7,
      fiber: 6.4,
      fats: 1,
      micronutrients: ['Iron', 'Calcium', 'Vitamin A']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '10-12 leaves',
    benefits: ['Good for hair health', 'Aids digestion'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/curryleaves/400/300'
  }
];
