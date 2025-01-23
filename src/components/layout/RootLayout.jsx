import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/features', label: 'Features' },
  { to: '/tokenomics', label: 'Tokenomics' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/team', label: 'Team' },
  { to: '/launch', label: 'Launch' },
  { to: '/contact', label: 'Contact' },
];

export default function RootLayout() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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

            {/* Mobile Menu Toggle Button */}
            <button onClick={toggleMobileMenu} className="lg:hidden text-white">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/80 backdrop-blur-sm border-b border-white/10">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
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
      )}

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
