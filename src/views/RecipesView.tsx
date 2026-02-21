import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Leaf, Flame, Clock, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { RECIPES } from '../data';
import { Card, Badge, cn } from '../components/UI';
import { type Recipe } from '../types';

// ---- Helpers ----

const healingColor = (level: Recipe['healing_level']) => {
  if (level === 'High') return 'green';
  if (level === 'Moderate') return 'yellow';
  return 'red';
};

const digestibilityColor = (d: Recipe['digestibility']) => {
  if (d === 'Very Easy') return 'green';
  if (d === 'Easy') return 'green';
  return 'yellow';
};

const categoryOrder = [
  'Pre-Breakfast',
  'Breakfast',
  'Occasional Breakfast',
  'Mid-Meal',
  'Lunch',
  'Dinner',
  'Chutney',
  'Dressing',
  'Occasional',
  'Preparation',
];

// ---- Recipe Detail ----

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = RECIPES.find(r => r.id === id);

  if (!recipe) return <div className="px-8 pt-8 text-white/40">Recipe not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="pb-32 pt-8 px-8"
    >
      {/* Back */}
      <button
        onClick={() => navigate('/recipes')}
        className="flex items-center gap-2 text-white/30 font-black text-[10px] uppercase tracking-[0.3em] mb-10 hover:text-brand-green transition-colors"
      >
        <ChevronLeft size={16} /> Back
      </button>

      {/* Title */}
      <div className="mb-8">
        <div className="flex gap-2 flex-wrap mb-4">
          <Badge label={recipe.category} variant="gray" />
          <Badge label={recipe.meal_type} variant="gray" />
        </div>
        <h1 className="text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-4">
          {recipe.name.split(' ').map((word, i) => (
            <React.Fragment key={i}>{word}<br /></React.Fragment>
          ))}
        </h1>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-3 mb-10">
        <div className="bg-white/5 rounded-[20px] border border-white/10 p-5 flex items-center gap-3">
          <Users size={18} className="text-brand-green shrink-0" />
          <div>
            <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Serves</p>
            <p className="text-lg font-black text-white">{recipe.serves}</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-[20px] border border-white/10 p-5 flex items-center gap-3">
          <Zap size={18} className="text-brand-green shrink-0" />
          <div>
            <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Healing</p>
            <p className={cn(
              "text-lg font-black",
              recipe.healing_level === 'High' ? 'text-brand-green' :
              recipe.healing_level === 'Moderate' ? 'text-amber-400' : 'text-rose-500'
            )}>{recipe.healing_level}</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-[20px] border border-white/10 p-5 flex items-center gap-3">
          <Flame size={18} className="text-brand-green shrink-0" />
          <div>
            <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Digestibility</p>
            <p className="text-sm font-black text-white">{recipe.digestibility}</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-[20px] border border-white/10 p-5 flex flex-wrap gap-2">
          {recipe.raw && (
            <span className="text-[9px] font-black text-brand-green uppercase tracking-widest bg-brand-green/10 px-2 py-1 rounded-full border border-brand-green/20">Raw</span>
          )}
          {recipe.grain_based && (
            <span className="text-[9px] font-black text-amber-400 uppercase tracking-widest bg-amber-400/10 px-2 py-1 rounded-full border border-amber-400/20">Grain</span>
          )}
          {recipe.contains_nuts_seeds && (
            <span className="text-[9px] font-black text-white/60 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-full border border-white/10">Nuts</span>
          )}
          {!recipe.raw && !recipe.grain_based && !recipe.contains_nuts_seeds && (
            <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Simple</span>
          )}
        </div>
      </div>

      {/* Ingredients */}
      <section className="mb-10">
        <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-6">Ingredients</h3>
        <div className="bg-white/5 rounded-[24px] border border-white/10 p-6 space-y-3">
          {recipe.ingredients.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
              <span className="text-sm text-white/80 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-preparation */}
      {recipe.pre_preparation.length > 0 && (
        <section className="mb-10">
          <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-6">Pre-Preparation</h3>
          <div className="space-y-3">
            {recipe.pre_preparation.map((step, i) => (
              <div key={i} className="flex items-start gap-3 bg-amber-400/5 border border-amber-400/15 rounded-[20px] p-5">
                <Clock size={14} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70 font-medium">{step}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Method */}
      <section className="mb-10">
        <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-6">Method</h3>
        <div className="space-y-3">
          {recipe.method_steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[10px] font-black text-brand-green">{i + 1}</span>
              </div>
              <div className="flex-1 bg-white/5 rounded-[16px] border border-white/10 px-5 py-4">
                <span className="text-sm text-white/80 font-medium">{step}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

// ---- Recipe Card ----

const RecipeCard = ({ recipe, onClick }: { recipe: Recipe; onClick: () => void }) => (
  <Card onClick={onClick} className="p-6 group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-brand-green/10 transition-all" />
    <div className="flex items-start justify-between gap-3 mb-3">
      <h3 className="text-base font-black text-white uppercase italic leading-tight group-hover:text-brand-green transition-colors flex-1">
        {recipe.name}
      </h3>
      <Badge label={recipe.healing_level} variant={healingColor(recipe.healing_level)} />
    </div>
    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">{recipe.meal_type}</p>
    <div className="flex flex-wrap gap-2">
      <Badge label={`Serves ${recipe.serves}`} variant="gray" />
      <Badge label={recipe.digestibility} variant={digestibilityColor(recipe.digestibility)} />
      {recipe.raw && <Badge label="Raw" variant="green" />}
      {recipe.grain_based && <Badge label="Grain" variant="yellow" />}
    </div>
  </Card>
);

// ---- Recipe List ----

const RecipeList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const categories = ['All', ...categoryOrder.filter(c =>
    RECIPES.some(r => r.category === c)
  )];

  const filtered = RECIPES.filter(r => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.ingredients.some(i => i.toLowerCase().includes(search.toLowerCase()));
    const matchCat = activeCategory === 'All' || r.category === activeCategory;
    const matchFilter =
      !activeFilter ||
      (activeFilter === 'raw' && r.raw) ||
      (activeFilter === 'grain-free' && !r.grain_based) ||
      (activeFilter === 'high-healing' && r.healing_level === 'High') ||
      (activeFilter === 'no-nuts' && !r.contains_nuts_seeds);
    return matchSearch && matchCat && matchFilter;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-32 pt-8">
      {/* Header */}
      <div className="px-8 mb-10">
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-4">
          Satvic<br />Recipes
        </h2>
        <p className="text-xs font-bold text-white/30 uppercase tracking-widest">
          {RECIPES.length} healing recipes
        </p>
      </div>

      {/* Search */}
      <div className="px-8 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes or ingredients..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-4 text-sm text-white placeholder:text-white/20 font-medium outline-none focus:border-brand-green/40 transition-colors"
          />
        </div>
      </div>

      {/* Quick filters */}
      <div className="px-8 mb-4 flex gap-2 flex-wrap">
        {[
          { key: 'raw', label: 'Raw' },
          { key: 'grain-free', label: 'Grain-Free' },
          { key: 'high-healing', label: 'High Healing' },
          { key: 'no-nuts', label: 'Nut-Free' },
        ].map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(activeFilter === f.key ? null : f.key)}
            className={cn(
              "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all",
              activeFilter === f.key
                ? "bg-brand-green text-black border-brand-green"
                : "bg-white/5 text-white/40 border-white/10 hover:text-white/70"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Category tabs */}
      <div className="px-8 mb-8 flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap border transition-all shrink-0",
              activeCategory === cat
                ? "bg-brand-green text-black border-brand-green shadow-[0_0_12px_rgba(158,255,0,0.3)]"
                : "bg-white/5 text-white/40 border-white/10 hover:text-white/70"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipe cards */}
      <div className="px-8 space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Leaf size={32} className="text-white/10 mx-auto mb-4" />
            <p className="text-white/20 font-black uppercase text-xs tracking-widest">No recipes found</p>
          </div>
        ) : (
          filtered.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => navigate(`/recipes/${recipe.id}`)}
            />
          ))
        )}
      </div>
    </motion.div>
  );
};

// ---- Export ----

export const RecipesView = () => (
  <Routes>
    <Route index element={<RecipeList />} />
    <Route path=":id" element={<RecipeDetail />} />
  </Routes>
);
