import { FoodItem, HealthRating, Level } from '../types';

export const GRAINS_ITEMS: FoodItem[] = [
  {
    id: 'white-rice',
    name: 'White Rice',
    category: 'Grains & Millets',
    description: 'A staple grain, easily digestible but lower in fiber than brown rice.',
    nutrition: {
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fiber: 0.4,
      fats: 0.3,
      micronutrients: ['Manganese', 'Selenium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.HIGH,
      heart_friendly: HealthRating.MODERATE,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g cooked)',
    benefits: ['Easy to digest', 'Quick energy source'],
    caution: ['High glycemic index; portion control for diabetics'],
    image: 'https://picsum.photos/seed/whiterice/400/300'
  },
  {
    id: 'brown-rice',
    name: 'Brown Rice',
    category: 'Grains & Millets',
    description: 'Whole grain rice with the bran and germ intact, rich in fiber.',
    nutrition: {
      calories: 111,
      protein: 2.6,
      carbs: 23,
      fiber: 1.8,
      fats: 0.9,
      micronutrients: ['Manganese', 'Selenium', 'Magnesium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g cooked)',
    benefits: ['High fiber', 'Supports heart health', 'Better blood sugar control than white rice'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/brownrice/400/300'
  },
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    category: 'Grains & Millets',
    description: 'A long-grain aromatic rice popular in Indian cuisine.',
    nutrition: {
      calories: 121,
      protein: 3.5,
      carbs: 25,
      fiber: 0.6,
      fats: 0.4,
      micronutrients: ['Thiamine', 'Niacin']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g cooked)',
    benefits: ['Aromatic', 'Lower GI than some other white rice'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/basmati/400/300'
  },
  {
    id: 'red-rice',
    name: 'Red Rice',
    category: 'Grains & Millets',
    description: 'A variety of rice that is colored red by its anthocyanin content.',
    nutrition: {
      calories: 109,
      protein: 2.3,
      carbs: 23,
      fiber: 1.8,
      fats: 0.8,
      micronutrients: ['Anthocyanins', 'Manganese', 'Zinc']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g cooked)',
    benefits: ['High in antioxidants', 'Supports heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/redrice/400/300'
  },
  {
    id: 'black-rice',
    name: 'Black Rice',
    category: 'Grains & Millets',
    description: 'Also known as forbidden rice, it is highly nutritious and rich in antioxidants.',
    nutrition: {
      calories: 160,
      protein: 5,
      carbs: 34,
      fiber: 2,
      fats: 1.5,
      micronutrients: ['Anthocyanins', 'Iron', 'Vitamin E']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g cooked)',
    benefits: ['Highest antioxidant content among rice', 'Supports eye health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/blackrice/400/300'
  },
  {
    id: 'poha',
    name: 'Flattened Rice (Poha)',
    category: 'Grains & Millets',
    description: 'Rice that has been parboiled and then flattened into flat, light, dry flakes.',
    nutrition: {
      calories: 110,
      protein: 2.3,
      carbs: 25,
      fiber: 0.7,
      fats: 0.2,
      micronutrients: ['Iron', 'Vitamin B1']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (100g cooked)',
    benefits: ['Easy to digest', 'Good source of iron'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/poha/400/300'
  },
  {
    id: 'murmura',
    name: 'Puffed Rice (Murmura)',
    category: 'Grains & Millets',
    description: 'Light and airy rice, commonly used in snacks like Bhel Puri.',
    nutrition: {
      calories: 402,
      protein: 6,
      carbs: 90,
      fiber: 0,
      fats: 0.5,
      micronutrients: ['Iron', 'Calcium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.HIGH,
      heart_friendly: HealthRating.MODERATE,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (20g)',
    benefits: ['Very light', 'Low calorie per volume'],
    caution: ['High GI'],
    image: 'https://picsum.photos/seed/murmura/400/300'
  },
  {
    id: 'whole-wheat',
    name: 'Whole Wheat',
    category: 'Grains & Millets',
    description: 'A basic grain used for making flour and various breads.',
    nutrition: {
      calories: 339,
      protein: 13.2,
      carbs: 71,
      fiber: 12.2,
      fats: 2.5,
      micronutrients: ['Manganese', 'Selenium', 'Phosphorus']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '100g',
    benefits: ['High fiber', 'Supports digestion'],
    caution: ['Contains gluten'],
    image: 'https://picsum.photos/seed/wheat/400/300'
  },
  {
    id: 'dalia',
    name: 'Broken Wheat (Dalia)',
    category: 'Grains & Millets',
    description: 'Cracked wheat, highly nutritious and fiber-rich.',
    nutrition: {
      calories: 342,
      protein: 12,
      carbs: 76,
      fiber: 18,
      fats: 1.5,
      micronutrients: ['Magnesium', 'Iron', 'Vitamin B6']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Excellent for weight loss', 'High fiber'],
    caution: ['Contains gluten'],
    image: 'https://picsum.photos/seed/dalia/400/300'
  },
  {
    id: 'sooji',
    name: 'Semolina (Sooji/Rava)',
    category: 'Grains & Millets',
    description: 'Coarse flour made from durum wheat.',
    nutrition: {
      calories: 360,
      protein: 12.7,
      carbs: 72.8,
      fiber: 3.9,
      fats: 1.1,
      micronutrients: ['Folate', 'Iron']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '100g',
    benefits: ['Quick energy', 'Good for heart health'],
    caution: ['Contains gluten'],
    image: 'https://picsum.photos/seed/sooji/400/300'
  },
  {
    id: 'barley',
    name: 'Barley (Jau)',
    category: 'Grains & Millets',
    description: 'A chewy, nutty grain that is high in fiber.',
    nutrition: {
      calories: 354,
      protein: 12.5,
      carbs: 73.5,
      fiber: 17.3,
      fats: 2.3,
      micronutrients: ['Selenium', 'Manganese', 'Magnesium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Lowers cholesterol', 'Supports weight loss'],
    caution: ['Contains gluten'],
    image: 'https://picsum.photos/seed/barley/400/300'
  },
  {
    id: 'oats',
    name: 'Oats (Rolled)',
    category: 'Grains & Millets',
    description: 'A nutrient-rich whole grain known for its high fiber content.',
    nutrition: {
      calories: 389,
      protein: 16.9,
      carbs: 66.3,
      fiber: 10.6,
      fats: 6.9,
      micronutrients: ['Manganese', 'Phosphorus', 'Magnesium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (150g cooked)',
    benefits: ['Supports digestion', 'Heart healthy'],
    caution: ['Avoid instant flavored oats with added sugar'],
    image: 'https://picsum.photos/seed/oats/400/300'
  },
  {
    id: 'ragi',
    name: 'Ragi (Finger Millet)',
    category: 'Grains & Millets',
    description: 'An ancient grain exceptionally rich in calcium and fiber.',
    nutrition: {
      calories: 328,
      protein: 7.3,
      carbs: 72,
      fiber: 11.5,
      fats: 1.3,
      micronutrients: ['Calcium', 'Iron', 'Thiamine']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '2 rotis or 1 bowl porridge',
    benefits: ['Best calcium source for vegetarians', 'Helps in weight management'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/ragi/400/300'
  },
  {
    id: 'jowar',
    name: 'Jowar (Sorghum)',
    category: 'Grains & Millets',
    description: 'A gluten-free ancient grain rich in protein and fiber.',
    nutrition: {
      calories: 339,
      protein: 11.3,
      carbs: 74,
      fiber: 6.3,
      fats: 3.3,
      micronutrients: ['Iron', 'Phosphorus', 'Potassium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '2 rotis',
    benefits: ['Gluten-free', 'Good for heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/jowar/400/300'
  },
  {
    id: 'bajra',
    name: 'Bajra (Pearl Millet)',
    category: 'Grains & Millets',
    description: 'A hardy grain high in magnesium and potassium.',
    nutrition: {
      calories: 361,
      protein: 11.6,
      carbs: 67,
      fiber: 1.3,
      fats: 5,
      micronutrients: ['Magnesium', 'Potassium', 'Iron']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.MODERATE
    },
    portion: '2 bajra rotis',
    benefits: ['Gluten-free', 'Helps manage blood pressure'],
    caution: ['May be heating for the body'],
    image: 'https://picsum.photos/seed/bajra/400/300'
  },
  {
    id: 'foxtail-millet',
    name: 'Foxtail Millet',
    category: 'Grains & Millets',
    description: 'A healthy grain that is rich in fiber and minerals.',
    nutrition: {
      calories: 331,
      protein: 12.3,
      carbs: 60.9,
      fiber: 8,
      fats: 4.3,
      micronutrients: ['Iron', 'Calcium', 'Magnesium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Gluten-free', 'Supports nervous system'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/foxtail/400/300'
  },
  {
    id: 'amaranth',
    name: 'Amaranth (Rajgira)',
    category: 'Grains & Millets',
    description: 'A gluten-free pseudocereal rich in protein and minerals.',
    nutrition: {
      calories: 371,
      protein: 13.6,
      carbs: 65,
      fiber: 6.7,
      fats: 7,
      micronutrients: ['Manganese', 'Magnesium', 'Phosphorus']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['High in protein', 'Gluten-free'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/amaranth/400/300'
  },
  {
    id: 'buckwheat',
    name: 'Buckwheat (Kuttu)',
    category: 'Grains & Millets',
    description: 'A nutrient-dense pseudocereal commonly used during fasting.',
    nutrition: {
      calories: 343,
      protein: 13.3,
      carbs: 71.5,
      fiber: 10,
      fats: 3.4,
      micronutrients: ['Manganese', 'Copper', 'Magnesium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Heart healthy', 'Gluten-free'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/buckwheat/400/300'
  },
  {
    id: 'parboiled-rice',
    name: 'Parboiled Rice',
    category: 'Grains & Millets',
    description: 'Rice that has been partially boiled in the husk, retaining more nutrients.',
    nutrition: {
      calories: 123,
      protein: 2.7,
      carbs: 27,
      fiber: 0.4,
      fats: 0.3,
      micronutrients: ['Niacin', 'Thiamine', 'Magnesium']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.LOW,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['More nutritious than white rice', 'Lower GI than white rice'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/parboiled/400/300'
  },
  {
    id: 'steel-cut-oats',
    name: 'Steel Cut Oats',
    category: 'Grains & Millets',
    description: 'Whole oat groats that have been chopped into pieces, least processed.',
    nutrition: {
      calories: 375,
      protein: 12.5,
      carbs: 67.5,
      fiber: 10,
      fats: 6.3,
      micronutrients: ['Manganese', 'Phosphorus', 'Magnesium']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Lowest GI among oats', 'Very high fiber'],
    caution: ['Takes longer to cook'],
    image: 'https://picsum.photos/seed/steelcut/400/300'
  },
  {
    id: 'corn-makki',
    name: 'Corn (Makki)',
    category: 'Grains & Millets',
    description: 'Whole corn kernels or flour, a staple in winter in North India.',
    nutrition: {
      calories: 365,
      protein: 9.4,
      carbs: 74,
      fiber: 7.3,
      fats: 4.7,
      micronutrients: ['Vitamin A', 'Lutein', 'Zeaxanthin']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.MEDIUM,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '2 makki rotis',
    benefits: ['Good for eye health', 'Gluten-free'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/corn/400/300'
  },
  {
    id: 'little-millet',
    name: 'Little Millet',
    category: 'Grains & Millets',
    description: 'A small-seeded millet rich in fiber and minerals.',
    nutrition: {
      calories: 341,
      protein: 7.7,
      carbs: 67,
      fiber: 7.6,
      fats: 4.7,
      micronutrients: ['Iron', 'Magnesium', 'Phosphorus']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Gluten-free', 'High fiber'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/littlemillet/400/300'
  },
  {
    id: 'kodo-millet',
    name: 'Kodo Millet',
    category: 'Grains & Millets',
    description: 'A nutritious grain with high antioxidant potential.',
    nutrition: {
      calories: 353,
      protein: 8.3,
      carbs: 65,
      fiber: 9,
      fats: 1.4,
      micronutrients: ['Iron', 'Calcium', 'Polyphenols']
    },
    indicators: {
      protein_level: Level.LOW,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['High in antioxidants', 'Good for diabetes'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/kodomillet/400/300'
  }
];
