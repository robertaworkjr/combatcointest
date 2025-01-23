import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="px-6 lg:px-12 py-16">
      {/* Static Hero Section */}
      <div className="w-full py-20 lg:py-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter font-regular mb-8">
            <span className="text-white">Welcome to Combat Coin</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The future of combat sports is here
          </p>
        </div>
      </div>
      
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
            onClick={() => navigate('/launch-article')}
          >
            Read our launch article
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-black">
          <h2 className="text-2xl font-bold">Join the Combat Coin Revolution!</h2>
          <h3 className="text-xl font-semibold">Earn rewards for your fandom and get closer to your favorite fighters.</h3>
          <h4 className="font-semibold mt-4">Simple Sign-Up:</h4>
          <p>Clear Call-to-Action (CTA): "Sign Up Now!" or "Join the Community"</p>
          <ul className="list-disc ml-5">
            <li>Email Address</li>
            <li>Password</li>
            <li>(Optional) Favorite Fighter Selection</li>
          </ul>
          <h4 className="font-semibold mt-4">Optional Enhancements:</h4>
          <ul className="list-disc ml-5">
            <li>Short, Engaging Video: Showcase the excitement of the program and the rewards.</li>
            <li>Testimonials: Include short testimonials from existing users (if applicable).</li>
            <li>FAQ Section: Address common questions about the program.</li>
          </ul>
          <h4 className="font-semibold mt-4">Design Considerations:</h4>
          <ul className="list-disc ml-5">
            <li>Visually Appealing: Use high-quality images and videos related to combat sports.</li>
            <li>Mobile-Friendly: Ensure the page is easily accessible and navigable on mobile devices.</li>
            <li>Clear and Concise: Use simple language and avoid technical jargon.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
