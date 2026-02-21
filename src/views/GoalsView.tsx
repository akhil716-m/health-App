import React from 'react';
import { motion } from 'motion/react';
import { GOALS, FOOD_ITEMS } from '../data';
import { ChevronLeft } from 'lucide-react';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { Card, Badge } from '../components/UI';
import { type MealPlan, type Goal } from '../types';

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

const GoalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goal = GOALS.find(g => g.id === id);

  if (!goal) return <div>Goal not found</div>;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="pb-32 pt-8 px-8">
      <button onClick={() => navigate('/goals')} className="flex items-center gap-2 text-white/30 font-black text-[10px] uppercase tracking-[0.3em] mb-10 hover:text-brand-green transition-colors">
        <ChevronLeft size={16} /> Back
      </button>
      
      <h1 className="text-5xl font-black text-white leading-[0.85] tracking-tighter uppercase italic mb-12">
        {goal.name.split(' ').map((word, i) => (
          <React.Fragment key={i}>{word}<br /></React.Fragment>
        ))}
      </h1>
      
      <div className="space-y-16">
        <section>
          <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">Core Principles</h3>
          <div className="flex flex-wrap gap-3">
            {goal.principles.map((p, i) => (
              <div key={i} className="bg-white/5 px-6 py-3 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/80">
                {p}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">Recommended Foods</h3>
          <div className="grid grid-cols-2 gap-4">
            {goal.recommended_food_ids.map(id => {
              const food = FOOD_ITEMS.find(f => f.id === id);
              return food ? (
                <Card key={id} onClick={() => navigate(`/food/${id}`)} className="p-6 border-brand-green/20 bg-brand-green/5">
                  <h4 className="text-sm font-black text-white uppercase italic">{food.name}</h4>
                </Card>
              ) : null;
            })}
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">Sample Day Plan</h3>
          <MealPlanView plan={goal.sample_meal_plan} />
        </section>
      </div>
    </motion.div>
  );
};

const GoalList = () => {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-32 pt-8">
      <div className="px-8 mb-12">
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-4">
          Your<br />Goals
        </h2>
        <p className="text-xs font-bold text-white/30 uppercase tracking-widest">Structured plans for success</p>
      </div>

      <div className="px-8 space-y-6">
        {GOALS.map(goal => (
          <Card key={goal.id} onClick={() => navigate(`/goals/${goal.id}`)} className="p-8 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-brand-green/10 transition-all" />
            <h3 className="text-2xl font-black text-white uppercase italic leading-none mb-6 group-hover:text-brand-green transition-colors">{goal.name}</h3>
            <div className="flex flex-wrap gap-3">
              {goal.principles.slice(0, 2).map((p, i) => (
                <Badge key={i} label={p} variant="gray" className="bg-white/5 border-white/10" />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export const GoalsView = () => {
  return (
    <Routes>
      <Route index element={<GoalList />} />
      <Route path=":id" element={<GoalDetail />} />
    </Routes>
  );
};
