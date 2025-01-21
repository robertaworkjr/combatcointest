import React from 'react';
import { Shield, Users, BarChart, Trophy, Target, Globe } from 'lucide-react';

const Card = ({ icon: Icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
    <Icon className="w-8 h-8 mb-4 text-orange-500" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Built on advanced blockchain technology ensuring maximum security for all transactions"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Governed by the fighting community, for the fighting community"
    },
    {
      icon: BarChart,
      title: "Growth Potential",
      description: "Designed for long-term value appreciation through strategic partnerships"
    },
    {
      icon: Trophy,
      title: "Rewards Program",
      description: "Earn rewards through staking, participation, and community engagement"
    },
    {
      icon: Target,
      title: "Focused Mission",
      description: "Dedicated to revolutionizing the combat sports industry through blockchain"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Available worldwide with support for multiple languages and currencies"
    }
  ];

  return (
    <div className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            About Combat Coin
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combat Coin is revolutionizing the combat sports industry by bridging the gap between traditional sports and blockchain technology. Our mission is to create a more transparent, efficient, and rewarding ecosystem for fighters, fans, and stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} {...feature} />
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Vision</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              We envision a future where combat sports transcend traditional boundaries, empowered by blockchain technology. Combat Coin aims to create an ecosystem where fighters receive fair compensation, fans can directly support their favorites, and the industry operates with unprecedented transparency.
            </p>
            <p>
              Through smart contracts and decentralized finance, we're building a platform that revolutionizes how fight purses are distributed, how sponsorships are managed, and how fans engage with the sport they love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}