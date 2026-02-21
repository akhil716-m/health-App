import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, Activity, Target } from 'lucide-react';
import { cn } from '../utils';

export const BottomNav = () => {
  const navItems = [
    { icon: Home, label: 'Overview', path: '/' },
    { icon: Book, label: 'Library', path: '/library' },
    { icon: Activity, label: 'Health', path: '/health' },
    { icon: Target, label: 'Goals', path: '/goals' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
      {navItems.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            cn(
              'flex flex-col items-center gap-1 transition-colors',
              isActive ? 'text-emerald-600' : 'text-gray-400 hover:text-gray-600'
            )
          }
        >
          <Icon size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};
