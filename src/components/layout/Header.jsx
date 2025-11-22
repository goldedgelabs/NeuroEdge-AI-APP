import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useUI } from '../../context/UIContext';
import AnimatedThemeToggle from '../ui/AnimatedThemeToggle';
import NetworkDots from './NetworkDots';

export default function Header() {
  const { user } = useAuth();
  const { setShowSplash } = useUI();

  return (
    <header className='header'>
      <div className='brand'>
        <img src='/neuroedge-logo.png' alt='logo' />
        <div>
          <div style={{ fontWeight: 700 }}>NeuroEdge</div>
          <div className='small'>Users Choice First</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <NetworkDots />
        <AnimatedThemeToggle />
      </div>
    </header>
  );
}
