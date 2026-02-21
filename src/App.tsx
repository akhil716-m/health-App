import React from 'react';
import { Home, Book, Heart, Target, ChefHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { cn } from './components/UI';
import { OverviewView } from './views/OverviewView';
import { LibraryView } from './views/LibraryView';
import { HealthConditionsView } from './views/HealthConditionsView';
import { GoalsView } from './views/GoalsView';
import { FoodDetailView } from './views/FoodDetailView';
import { RecipesView } from './views/RecipesView';

// --- Components ---

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const tabs = [
    { id: 'overview', path: '/', label: 'Overview', icon: Home },
    { id: 'library', path: '/library', label: 'Library', icon: Book },
    { id: 'health', path: '/health', label: 'Health', icon: Heart },
    { id: 'goals', path: '/goals', label: 'Goals', icon: Target },
    { id: 'recipes', path: '/recipes', label: 'Recipes', icon: ChefHat },
  ];

  const activeTab = tabs.find(t => 
    t.path === '/' ? location.pathname === '/' : location.pathname.startsWith(t.path)
  )?.id || 'overview';

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-brand-dark/80 backdrop-blur-2xl border-t border-white/5 px-8 py-4 flex justify-between items-center z-50 max-w-md mx-auto">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={cn(
              "flex flex-col items-center gap-1.5 transition-all relative group",
              isActive ? "text-brand-green" : "text-white/30 hover:text-white/60"
            )}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">{tab.label}</span>
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -top-4 w-10 h-1 bg-brand-green rounded-full shadow-[0_0_10px_rgba(158,255,0,0.5)]"
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};

// --- Main App ---

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-brand-dark max-w-md mx-auto relative shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-x-hidden border-x border-white/5">
      <header className="px-8 pt-12 pb-8 bg-brand-dark/50 backdrop-blur-xl sticky top-0 z-40 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-green rounded-[18px] flex items-center justify-center text-black font-black italic shadow-[0_0_20px_rgba(158,255,0,0.4)] rotate-6">NV</div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-none">NutriVed</h1>
              <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mt-1">Vegetarian Food Guide</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-green">
              <Heart size={18} fill="currentColor" />
            </div>
          </div>
        </div>
      </header>

      <main className="relative min-h-[calc(100vh-180px)]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname.split('/')[1] || 'root'}>
            <Route path="/" element={<OverviewView />} />
            <Route path="/library" element={<LibraryView />} />
            <Route path="/health/*" element={<HealthConditionsView />} />
            <Route path="/goals/*" element={<GoalsView />} />
            <Route path="/recipes/*" element={<RecipesView />} />
            <Route path="/food/:id" element={<FoodDetailView />} />
          </Routes>
        </AnimatePresence>
      </main>

      <BottomNav />

      <div className="px-10 py-16 pb-40 text-center bg-white/[0.02]">
        <div className="w-12 h-1 bg-white/10 mx-auto mb-8 rounded-full" />
        <p className="text-[9px] text-white/20 leading-relaxed font-black uppercase tracking-widest">
          Disclaimer: This app is for educational purposes only. Nutritional values are estimates. Always consult a healthcare professional.
        </p>
      </div>
    </div>
  );
}
