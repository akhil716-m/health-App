import { FoodItem, HealthRating, Level } from '../types';

export const LENTILS_ITEMS: FoodItem[] = [
  {
    id: 'green-moong',
    name: 'Green Moong',
    category: 'Lentils, Pulses & Legumes',
    description: 'Whole green moong beans, highly nutritious and versatile.',
    nutrition: {
      calories: 347,
      protein: 24,
      carbs: 63,
      fiber: 16,
      fats: 1.2,
      micronutrients: ['Folate', 'Manganese', 'Magnesium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['High in protein', 'Supports heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/greenmoong/400/300'
  },
  {
    id: 'kabuli-chana',
    name: 'Kabuli Chana (Chickpeas)',
    category: 'Lentils, Pulses & Legumes',
    description: 'Large white chickpeas, popular in dishes like Chole.',
    nutrition: {
      calories: 164,
      protein: 8.9,
      carbs: 27.4,
      fiber: 7.6,
      fats: 2.6,
      micronutrients: ['Manganese', 'Folate', 'Copper']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['High fiber', 'Supports blood sugar control'],
    caution: ['Can cause bloating'],
    image: 'https://picsum.photos/seed/chana/400/300'
  },
  {
    id: 'rajma',
    name: 'Kidney Beans (Rajma)',
    category: 'Lentils, Pulses & Legumes',
    description: 'Red kidney beans, a staple in North Indian cuisine.',
    nutrition: {
      calories: 127,
      protein: 8.7,
      carbs: 22.8,
      fiber: 6.4,
      fats: 0.5,
      micronutrients: ['Iron', 'Potassium', 'Folate']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Rich in iron', 'Supports heart health'],
    caution: ['Must be cooked thoroughly'],
    image: 'https://picsum.photos/seed/rajma/400/300'
  },
  {
    id: 'toor-dal',
    name: 'Toor Dal (Pigeon Peas)',
    category: 'Lentils, Pulses & Legumes',
    description: 'A staple Indian lentil, also known as Arhar Dal.',
    nutrition: {
      calories: 121,
      protein: 8,
      carbs: 21,
      fiber: 5,
      fats: 0.4,
      micronutrients: ['Folate', 'Iron', 'Magnesium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Rich in folate', 'Good source of protein'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/toordal/400/300'
  },
  {
    id: 'moong-dal-yellow',
    name: 'Moong Dal (Yellow)',
    category: 'Lentils, Pulses & Legumes',
    description: 'Split yellow moong beans, very light and easy to digest.',
    nutrition: {
      calories: 105,
      protein: 7,
      carbs: 19,
      fiber: 4,
      fats: 0.5,
      micronutrients: ['Potassium', 'Magnesium', 'Iron']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Very easy to digest', 'Good for recovery'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/moongdal/400/300'
  },
  {
    id: 'moong-sprouts',
    name: 'Moong Sprouts',
    category: 'Lentils, Pulses & Legumes',
    description: 'Germinated moong beans, highly digestible and nutrient-dense.',
    nutrition: {
      calories: 30,
      protein: 3,
      carbs: 6,
      fiber: 2,
      fats: 0.2,
      micronutrients: ['Vitamin C', 'Folate', 'Iron']
    },
    indicators: {
      protein_level: Level.MEDIUM,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (100g)',
    benefits: ['Rich in antioxidants', 'Supports weight loss'],
    caution: ['Ensure proper washing'],
    image: 'https://picsum.photos/seed/sprouts/400/300'
  },
  {
    id: 'whole-masoor',
    name: 'Whole Masoor',
    category: 'Lentils, Pulses & Legumes',
    description: 'Whole brown lentils, rich in fiber and protein.',
    nutrition: {
      calories: 353,
      protein: 25,
      carbs: 60,
      fiber: 30,
      fats: 1.1,
      micronutrients: ['Iron', 'Folate', 'Manganese']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Extremely high fiber', 'Supports heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/wholemasoor/400/300'
  },
  {
    id: 'kala-chana',
    name: 'Kala Chana (Black Chickpeas)',
    category: 'Lentils, Pulses & Legumes',
    description: 'Small, dark chickpeas with a high fiber content.',
    nutrition: {
      calories: 360,
      protein: 19,
      carbs: 60,
      fiber: 17,
      fats: 5,
      micronutrients: ['Iron', 'Calcium', 'Magnesium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Great for blood sugar control', 'Rich in iron'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/kalachana/400/300'
  },
  {
    id: 'lobia',
    name: 'Lobia (Black Eyed Peas)',
    category: 'Lentils, Pulses & Legumes',
    description: 'Creamy white beans with a black spot, rich in folate.',
    nutrition: {
      calories: 336,
      protein: 23.5,
      carbs: 60,
      fiber: 10.6,
      fats: 1.3,
      micronutrients: ['Folate', 'Copper', 'Thiamine']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Supports healthy pregnancy', 'Good for heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/lobia/400/300'
  },
  {
    id: 'soybeans',
    name: 'Soybeans',
    category: 'Lentils, Pulses & Legumes',
    description: 'A complete plant-based protein source.',
    nutrition: {
      calories: 446,
      protein: 36,
      carbs: 30,
      fiber: 9,
      fats: 20,
      micronutrients: ['Calcium', 'Iron', 'Magnesium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.MODERATE
    },
    portion: '1/2 bowl (cooked)',
    benefits: ['Complete protein', 'Supports bone health'],
    caution: ['Limit if you have thyroid issues'],
    image: 'https://picsum.photos/seed/soybeans/400/300'
  },
  {
    id: 'horse-gram',
    name: 'Horse Gram (Kulthi)',
    category: 'Lentils, Pulses & Legumes',
    description: 'A hardy legume known for its medicinal properties.',
    nutrition: {
      calories: 321,
      protein: 22,
      carbs: 57,
      fiber: 5,
      fats: 0.5,
      micronutrients: ['Iron', 'Calcium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.MEDIUM,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Supports weight loss', 'Good for kidney health'],
    caution: ['May be heating'],
    image: 'https://picsum.photos/seed/horsegram/400/300'
  },
  {
    id: 'masoor-dal',
    name: 'Masoor Dal (Red Lentils)',
    category: 'Lentils, Pulses & Legumes',
    description: 'Split red lentils, quick to cook and easy to digest.',
    nutrition: {
      calories: 116,
      protein: 9,
      carbs: 20,
      fiber: 8,
      fats: 0.4,
      micronutrients: ['Folate', 'Iron']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Supports heart health', 'Good for skin'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/masoor/400/300'
  },
  {
    id: 'urad-dal',
    name: 'Urad Dal (Black Gram)',
    category: 'Lentils, Pulses & Legumes',
    description: 'Split black gram, used in many traditional Indian dishes.',
    nutrition: {
      calories: 341,
      protein: 25,
      carbs: 59,
      fiber: 18,
      fats: 1.6,
      micronutrients: ['Iron', 'Calcium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Boosts energy', 'Good for bone health'],
    caution: ['Can be heavy to digest'],
    image: 'https://picsum.photos/seed/urad/400/300'
  },
  {
    id: 'chana-dal',
    name: 'Chana Dal (Split Chickpeas)',
    category: 'Lentils, Pulses & Legumes',
    description: 'Split chickpeas, rich in protein and fiber.',
    nutrition: {
      calories: 372,
      protein: 20,
      carbs: 60,
      fiber: 15,
      fats: 5,
      micronutrients: ['Folate', 'Iron']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Great for blood sugar control', 'High protein'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/chanadal/400/300'
  },
  {
    id: 'moth-beans',
    name: 'Moth Beans',
    category: 'Lentils, Pulses & Legumes',
    description: 'Small, brown beans popular in Rajasthani cuisine.',
    nutrition: {
      calories: 343,
      protein: 23,
      carbs: 62,
      fiber: 4,
      fats: 1.6,
      micronutrients: ['Iron', 'Magnesium']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.LOW,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['High in protein', 'Supports muscle growth'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/mothbeans/400/300'
  },
  {
    id: 'dry-peas',
    name: 'Dry Peas',
    category: 'Lentils, Pulses & Legumes',
    description: 'Dried green or yellow peas, used in soups and stews.',
    nutrition: {
      calories: 341,
      protein: 24.5,
      carbs: 60,
      fiber: 25,
      fats: 1.2,
      micronutrients: ['Manganese', 'Folate']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (cooked)',
    benefits: ['Extremely high fiber', 'Supports heart health'],
    caution: ['None'],
    image: 'https://picsum.photos/seed/drypeas/400/300'
  },
  {
    id: 'sprouted-chana',
    name: 'Sprouted Chana',
    category: 'Lentils, Pulses & Legumes',
    description: 'Germinated black chickpeas, very high in nutrients.',
    nutrition: {
      calories: 164,
      protein: 9,
      carbs: 27,
      fiber: 8,
      fats: 2.6,
      micronutrients: ['Vitamin C', 'Iron', 'Folate']
    },
    indicators: {
      protein_level: Level.HIGH,
      fiber_level: Level.HIGH,
      glycemic_load: Level.LOW,
      heart_friendly: HealthRating.GOOD,
      thyroid_friendly: HealthRating.GOOD
    },
    portion: '1 bowl (100g)',
    benefits: ['Highly bioavailable nutrients', 'Supports immunity'],
    caution: ['Ensure proper hygiene while sprouting'],
    image: 'https://picsum.photos/seed/sproutedchana/400/300'
  }
];
