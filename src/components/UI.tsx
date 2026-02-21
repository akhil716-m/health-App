import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Heart } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className, onClick }: CardProps) => (
  <motion.div
    whileHover={onClick ? { scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' } : undefined}
    whileTap={onClick ? { scale: 0.98 } : undefined}
    onClick={onClick}
    className={cn(
      "bg-brand-card rounded-[32px] border border-brand-border overflow-hidden transition-colors",
      onClick && "cursor-pointer",
      className
    )}
  >
    {children}
  </motion.div>
);

interface BadgeProps {
  label: string;
  variant?: 'green' | 'yellow' | 'red' | 'gray';
  className?: string;
}

export const Badge = ({ label, variant = 'gray', className }: BadgeProps) => {
  const variants = {
    green: "bg-brand-green/10 text-brand-green border-brand-green/20",
    yellow: "bg-amber-400/10 text-amber-400 border-amber-400/20",
    red: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    gray: "bg-white/5 text-white/60 border-white/10",
  };

  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-[10px] font-black border uppercase tracking-[0.15em]",
      variants[variant],
      className
    )}>
      {label}
    </span>
  );
};

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6 px-6">
    <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-none">{title}</h2>
    {subtitle && <p className="text-xs font-bold text-white/40 uppercase tracking-widest mt-2">{subtitle}</p>}
  </div>
);

export const HealthyScoreBar = ({ score }: { score: 'High' | 'Medium' | 'Low' }) => {
  const positions = {
    Low: '0%',
    Medium: '50%',
    High: '100%',
  };

  const colors = {
    Low: 'text-rose-500',
    Medium: 'text-amber-400',
    High: 'text-brand-green',
  };

  return (
    <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
      <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-6 text-center">
        Your guide to making healthy food choices
      </p>
      <div className="relative h-1 bg-gradient-to-r from-rose-500 via-amber-400 to-brand-green rounded-full mb-8">
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0">
          {['Low', 'Medium', 'High'].map((label) => (
            <div key={label} className="flex flex-col items-center">
              <div className={cn(
                "w-6 h-6 rounded-full bg-brand-dark border-2 flex items-center justify-center transition-all",
                score === label ? "border-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "border-white/20"
              )}>
                <Heart size={12} className={cn(score === label ? colors[label as keyof typeof colors] : "text-white/20")} fill={score === label ? "currentColor" : "none"} />
              </div>
              <span className={cn(
                "text-[10px] font-black uppercase tracking-widest mt-3",
                score === label ? "text-white" : "text-white/20"
              )}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
