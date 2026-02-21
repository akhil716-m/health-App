import React from 'react';
import { motion } from 'motion/react';
import { FOOD_ITEMS } from '../data';
import { SectionTitle, Card, Badge } from '../components/UI';
import { Level } from '../types';
import { useNavigate } from 'react-router-dom';

export const OverviewView = () => {
  const navigate = useNavigate();
  const dailyGuide = [
    { meal: 'Breakfast', items: ['oats', 'sprouts'], note: 'High Protein' },
    { meal: 'Lunch', items: ['dal', 'brown-rice'], note: 'Balanced' },
    { meal: 'Snacks', items: ['almonds'], note: 'Healthy Fats' },
    { meal: 'Dinner', items: ['spinach', 'paneer'], note: 'Light' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-32 pt-8">
      <div className="px-8 mb-12">
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-2">
          Healthy<br />High-Five
        </h2>
        <button className="text-[10px] font-black text-brand-green uppercase tracking-[0.2em] border-b border-brand-green/30 pb-1 mt-4">
          Know more {'>'}
        </button>
      </div>

      <SectionTitle title="Daily Guide" subtitle="February Challenge" />
      
      <div className="px-6 space-y-12">
        {dailyGuide.map((section) => (
          <div key={section.meal}>
            <div className="flex justify-between items-center mb-6 px-2">
              <h3 className="text-sm font-black text-white uppercase tracking-[0.3em]">{section.meal}</h3>
              <Badge label={section.note} variant="gray" className="bg-white/5 border-white/10 text-white/40" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {section.items.map(id => {
                const food = FOOD_ITEMS.find(f => f.id === id);
                if (!food) return null;
                return (
                  <Card key={id} onClick={() => navigate(`/food/${id}`)} className="p-0 border-none bg-transparent">
                    <div className="relative h-44 rounded-[32px] overflow-hidden mb-3">
                      <img src={food.image} alt={food.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-sm font-black text-white leading-tight uppercase italic">{food.name}</h4>
                      </div>
                    </div>
                    <div className="flex gap-2 px-2">
                      <Badge label={food.indicators.protein_level} variant="green" className="text-[8px] px-2" />
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
