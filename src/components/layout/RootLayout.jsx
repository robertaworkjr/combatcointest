import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/features', label: 'Features' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/team', label: 'Team' },
  { to: '/tokenomics', label: 'Tokenomics' },
  { to: '/contact', label: 'Contact' }
];

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="sticky top-0 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="text-xl font-bold text-white">
              Combat Coin
            </NavLink>
            
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive ? 'text-orange-500' : 'text-white hover:text-orange-500'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-black/50 py-8 px-6 lg:px-12 mt-20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          © {new Date().getFullYear()} Combat Coin. All rights reserved.
        </div>
      </footer>
    </div>
  );
}