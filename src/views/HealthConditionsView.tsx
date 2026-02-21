import React from 'react';
import { motion } from 'motion/react';
import { HEALTH_CONDITIONS, FOOD_ITEMS } from '../data';
import { FoodCard } from '../components/FoodCard';
import { ChevronLeft } from 'lucide-react';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { Card } from '../components/UI';
import { type MealPlan } from '../types';

const MealPlanView = ({ plan }: { plan: MealPlan }) => (
  <div className="space-y-8">
    {Object.entries(plan).map(([meal, items]) => (
      <div key={meal}>
        <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4 pl-2">{meal}</h4>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white/5 p-5 rounded-[24px] border border-white/10 text-sm text-white/80 font-bold">
              {item}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ConditionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const condition = HEALTH_CONDITIONS.find(c => c.id === id);

  if (!condition) return <div>Condition not found</div>;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="pb-32 pt-8 px-8">
      <button onClick={() => navigate('/health')} className="flex items-center gap-2 text-white/30 font-black text-[10px] uppercase tracking-[0.3em] mb-10 hover:text-brand-green transition-colors">
        <ChevronLeft size={16} /> Back
      </button>
      
      <h1 className="text-5xl font-black text-white leading-[0.85] tracking-tighter uppercase italic mb-8">
        {condition.name.split(' ').map((word, i) => (
          <React.Fragment key={i}>{word}<br /></React.Fragment>
        ))}
      </h1>

      <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 mb-12">
        <p className="text-sm text-white/70 leading-relaxed font-medium">{condition.summary}</p>
      </div>

      <div className="space-y-16">
        <section>
          <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">Foods to Prefer</h3>
          <div className="grid grid-cols-2 gap-4">
            {condition.prefer_food_ids.map(id => {
              const food = FOOD_ITEMS.find(f => f.id === id);
              return food ? (
                <Card key={id} onClick={() => navigate(`/food/${id}`)} className="p-6 border-brand-green/20 bg-brand-green/5">
                  <h4 className="text-sm font-black text-white uppercase italic">{food.name}</h4>
                  <p className="text-[9px] text-brand-green font-black uppercase tracking-widest mt-2">Best Choice</p>
                </Card>
              ) : null;
            })}
          </div>
        </section>

        {condition.moderate_food_ids.length > 0 && (
          <section>
            <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">Foods in Moderation</h3>
            <div className="grid grid-cols-2 gap-4">
              {condition.moderate_food_ids.map(id => {
                const food = FOOD_ITEMS.find(f => f.id === id);
                return food ? (
                  <Card key={id} onClick={() => navigate(`/food/${id}`)} className="p-6 border-amber-500/20 bg-amber-500/5">
                    <h4 className="text-sm font-black text-white uppercase italic">{food.name}</h4>
                    <p className="text-[9px] text-amber-500 font-black uppercase tracking-widest mt-2">Limit Portion</p>
                  </Card>
                ) : null;
              })}
            </div>
          </section>
        )}

        {condition.avoid_food_ids.length > 0 && (
          <section>
            <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">Foods to Avoid</h3>
            <div className="grid grid-cols-2 gap-4">
              {condition.avoid_food_ids.map(id => {
                const food = FOOD_ITEMS.find(f => f.id === id);
                return food ? (
                  <Card key={id} onClick={() => navigate(`/food/${id}`)} className="p-6 border-rose-500/20 bg-rose-500/5">
                    <h4 className="text-sm font-black text-white uppercase italic">{food.name}</h4>
                    <p className="text-[9px] text-rose-500 font-black uppercase tracking-widest mt-2">Avoid</p>
                  </Card>
                ) : null;
              })}
            </div>
          </section>
        )}

        <section>
          <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">Sample Day Plan</h3>
          <MealPlanView plan={condition.sample_meal_plan} />
        </section>
      </div>
    </motion.div>
  );
};

const ConditionList = () => {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-32 pt-8">
      <div className="px-8 mb-12">
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-4">
          Health<br />Conditions
        </h2>
        <p className="text-xs font-bold text-white/30 uppercase tracking-widest">Curated guides for your needs</p>
      </div>

      <div className="px-8 space-y-6">
        {HEALTH_CONDITIONS.map(condition => (
          <Card key={condition.id} onClick={() => navigate(`/health/${condition.id}`)} className="p-8 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-brand-green/10 transition-all" />
            <h3 className="text-2xl font-black text-white uppercase italic leading-none mb-4 group-hover:text-brand-green transition-colors">{condition.name}</h3>
            <p className="text-sm text-white/40 line-clamp-2 leading-relaxed font-medium">{condition.summary}</p>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export const HealthConditionsView = () => {
  return (
    <Routes>
      <Route index element={<ConditionList />} />
      <Route path=":id" element={<ConditionDetail />} />
    </Routes>
  );
};
