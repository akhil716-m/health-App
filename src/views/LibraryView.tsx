import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FOOD_ITEMS } from '../data';
import { FoodCard } from '../components/FoodCard';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../components/UI';

export const LibraryView = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const categories = ['All', ...Array.from(new Set(FOOD_ITEMS.map(f => f.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFoods = FOOD_ITEMS.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' ? true : food.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-32 pt-8">
      <div className="px-8 mb-10">
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-6">
          Food<br />Library
        </h2>
        <div className="relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-green transition-colors" size={20} />
          <input 
            type="text" 
            placeholder='Search "Paneer" or "Oats"...' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-[24px] pl-14 pr-12 py-5 text-sm font-bold focus:outline-none focus:border-brand-green/50 transition-all placeholder:text-white/20"
          />
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 transition-colors font-black text-xs uppercase"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto px-8 mb-10 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all border",
              activeCategory === cat 
                ? "bg-brand-green text-black border-brand-green shadow-[0_0_20px_rgba(158,255,0,0.3)]" 
                : "bg-white/5 text-white/40 border-white/10"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="px-8 space-y-6">
        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">Find dishes by</p>
        <div className="flex gap-3 mb-8">
          <button className="bg-white/10 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">Protein</button>
          <button className="bg-white/10 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">Calories</button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredFoods.map(food => (
            <FoodCard key={food.id} food={food} onClick={() => navigate(`/food/${food.id}`)} />
          ))}
          {filteredFoods.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/20 text-sm font-bold uppercase tracking-widest">No foods found</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
