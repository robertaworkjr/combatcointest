import React from 'react';
import { Shield, Wallet, Users, Award, BarChart, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, benefits }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-colors">
    <Icon className="w-12 h-12 mb-6 text-orange-500" />
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    <div className="space-y-3">
      <h4 className="font-semibold text-orange-500">Benefits:</h4>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-300">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "State-of-the-art blockchain technology ensuring secure and transparent transactions for all participants.",
      benefits: [
        "Multi-signature wallet support",
        "Real-time transaction tracking",
        "Automated escrow services",
        "Fraud prevention mechanisms"
      ]
    },
    {
      icon: Wallet,
      title: "Smart Contracts",
      description: "Automated fight agreements and payment distribution through blockchain-based smart contracts.",
      benefits: [
        "Automated purse distribution",
        "Transparent sponsorship deals",
        "Performance-based bonuses",
        "Instant payout system"
      ]
    },
    {
      icon: Users,
      title: "Community Governance",
      description: "Decentralized decision-making system allowing token holders to participate in key decisions.",
      benefits: [
        "Voting rights for token holders",
        "Community-driven initiatives",
        "Transparent proposal system",
        "Active participation rewards"
      ]
    },
    {
      icon: Award,
      title: "Rewards Program",
      description: "Comprehensive rewards system for active community members and participants.",
      benefits: [
        "Staking rewards",
        "Participation incentives",
        "Loyalty programs",
        "Special event access"
      ]
    },
    {
      icon: BarChart,
      title: "Analytics Platform",
      description: "Advanced analytics and tracking system for performance metrics and market data.",
      benefits: [
        "Real-time market data",
        "Performance tracking",
        "Trend analysis",
        "Predictive insights"
      ]
    },
    {
      icon: Zap,
      title: "Lightning Network",
      description: "High-speed transaction processing for instant payments and micro-transactions.",
      benefits: [
        "Instant settlements",
        "Low transaction fees",
        "Cross-chain compatibility",
        "Scalable infrastructure"
      ]
    }
  ];

  return (
    <div className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Platform Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the innovative features that make Combat Coin the leading platform in the combat sports industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Join the revolution in combat sports technology today.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold 
                hover:opacity-90 transition-opacity"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}