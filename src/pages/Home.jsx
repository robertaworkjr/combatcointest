import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Combat Coin: Empowering the Future of Combat Sports
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-300">
          The leading cryptocurrency for athletes, fans, and the entire combat sports ecosystem
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold flex items-center justify-center gap-2"
            onClick={() => navigate('/contact')}
          >
            Buy Combat Coin
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <button 
            className="px-8 py-4 border-2 border-white/20 rounded-lg font-semibold hover:bg-white/10"
            onClick={() => navigate('/about')}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}