import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyCoin = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '#buy-coin'; // Replace with actual buy page URL
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#team', label: 'Team' },
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center">
          <img 
            src="https://placehold.co/120x40" 
            alt="Combat Coin Logo" 
            className="h-10"
          />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-black/95 backdrop-blur-sm lg:hidden transition-transform duration-300 ease-in-out z-40
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-medium hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative px-6 lg:px-12 pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Combat Coin: Empowering the Future of Combat Sports
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300">
                The leading cryptocurrency for athletes, fans, and the entire combat sports ecosystem
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBuyCoin}
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold 
                    flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 
                    disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Buy Combat Coin
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <button 
                  onClick={() => window.location.href = '#learn-more'}
                  className="px-8 py-4 border-2 border-white/20 rounded-lg font-semibold 
                    hover:bg-white/10 transition-colors relative overflow-hidden group"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 
                    transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://placehold.co/1920x1080.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}