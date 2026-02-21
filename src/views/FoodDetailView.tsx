import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FOOD_ITEMS } from '../data';
import { ChevronLeft, Info, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Level } from '../types';
import { Badge, HealthyScoreBar, Card } from '../components/UI';

export const FoodDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const food = FOOD_ITEMS.find(f => f.id === id);

  if (!food) return <div>Food not found</div>;

  const healthyScore = food.indicators.protein_level === Level.HIGH ? 'High' : (food.indicators.protein_level === Level.MEDIUM ? 'Medium' : 'Low');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="fixed inset-0 bg-brand-dark z-[100] overflow-y-auto pb-32"
    >
      <div className="relative h-[50vh]">
        <img
          src={food.image || `https://picsum.photos/seed/${food.id}/800/600`}
          alt={food.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
        
        <div className="absolute top-8 left-6 right-6 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>
          <Badge label={food.category} variant="green" className="bg-brand-green text-black border-none font-black" />
        </div>

        <div className="absolute bottom-12 left-8 right-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-4"
          >
            {food.name}
          </motion.h1>
          <div className="flex gap-3">
            <Badge label={food.indicators.protein_level + " Protein"} variant="green" />
            <Badge label={food.indicators.fiber_level + " Fiber"} variant="green" />
          </div>
        </div>
      </div>

      <div className="px-8 -mt-6 relative z-10">
        <HealthyScoreBar score={healthyScore as any} />

        <div className="mt-10 space-y-12">
          <section>
            <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-6">Nutritional Info*</h3>
            <div className="grid grid-cols-2 gap-4">
              <NutrientCard label="Calories" value={food.nutrition.calories} unit="kcal" />
              <NutrientCard label="Protein" value={food.nutrition.protein} unit="g" />
              <NutrientCard label="Fats" value={food.nutrition.fats} unit="g" />
              <NutrientCard label="Carbs" value={food.nutrition.carbs} unit="g" />
              <NutrientCard label="Fiber" value={food.nutrition.fiber} unit="g" />
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-6">What makes this healthy</h3>
            <div className="space-y-4">
              {food.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 size={18} className="text-brand-green shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80 leading-relaxed font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {food.caution.length > 0 && (
            <section>
              <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-6">To Consider</h3>
              <div className="space-y-4">
                {food.caution.map((c, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <AlertCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-white/60 leading-relaxed font-medium">{c}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-6">Portion Guidance</h3>
            <div className="bg-white/5 p-6 rounded-[32px] border border-white/10">
              <p className="text-lg font-bold text-white leading-tight">{food.portion}</p>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const NutrientCard = ({ label, value, unit }: { label: string; value: number; unit: string }) => (
  <div className="bg-white/5 p-5 rounded-[24px] border border-white/10">
    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-2">{label}</p>
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-black text-white leading-none">{value}</span>
      <span className="text-[10px] font-bold text-white/30 uppercase">{unit}</span>
    </div>
  </div>
);
