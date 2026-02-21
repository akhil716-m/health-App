import React from 'react';
import { type FoodItem, Level } from '../types';
import { Card, Badge, cn } from './UI';
import { ChevronRight } from 'lucide-react';

interface FoodCardProps {
  food: FoodItem;
  onClick: () => void;
}

export const FoodCard = ({ food, onClick }: FoodCardProps) => {
  return (
    <Card onClick={onClick} className="flex p-4 gap-6 items-center border-white/5 bg-white/[0.02]">
      <div className="w-24 h-24 rounded-[24px] overflow-hidden shrink-0 border border-white/5">
        <img
          src={food.image || `https://picsum.photos/seed/${food.id}/200/200`}
          alt={food.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[9px] font-black text-brand-green uppercase tracking-[0.2em] mb-1">{food.category}</p>
        <h4 className="text-lg font-black text-white leading-tight uppercase italic mb-3 truncate">{food.name}</h4>
        <div className="flex gap-2">
          <Badge 
            label={food.indicators.protein_level} 
            variant={food.indicators.protein_level === Level.HIGH ? 'green' : 'gray'} 
          />
          <Badge label={food.nutrition.protein + "g Protein"} variant="gray" />
        </div>
      </div>
      <ChevronRight size={20} className="text-white/20" />
    </Card>
  );
};
