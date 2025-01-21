import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const phases = [
  {
    phase: "Phase 1 - Foundation",
    status: "completed",
    timeline: "Q1 2024",
    title: "Platform Foundation",
    description: "Establishing the core infrastructure and community base",
    items: [
      "Initial token launch and distribution",
      "Smart contract development and auditing",
      "Community building initiatives",
      "Strategic partnerships establishment",
      "Website and whitepaper release"
    ],
    highlights: [
      "Successful presale completion",
      "Security audit certification",
      "10,000+ community members"
    ]
  },
  {
    phase: "Phase 2 - Growth",
    status: "active",
    timeline: "Q2 2024",
    title: "Market Expansion",
    description: "Expanding market presence and feature set",
    items: [
      "Major exchange listings",
      "DApp development initiation",
      "Marketing campaign launch",
      "Staking platform release",
      "Partnership program expansion"
    ],
    highlights: [
      "3 major exchange listings",
      "Staking APY up to 25%",
      "100,000+ holders target"
    ]
  },
  {
    phase: "Phase 3 - Integration",
    status: "upcoming",
    timeline: "Q3-Q4 2024",
    title: "Sports Integration",
    description: "Integrating with combat sports ecosystem",
    items: [
      "Major fight promotions partnerships",
      "Payment system integration",
      "Mobile app launch",
      "NFT marketplace release",
      "Cross-chain bridge implementation"
    ],
    highlights: [
      "5+ major promotion partnerships",
      "iOS and Android apps",
      "Exclusive NFT collections"
    ]
  },
  {
    phase: "Phase 4 - Expansion",
    status: "upcoming",
    timeline: "2025",
    title: "Global Expansion",
    description: "Achieving global market presence",
    items: [
      "Global market penetration",
      "Advanced features rollout",
      "Ecosystem expansion",
      "DAO governance implementation",
      "Major sport event sponsorships"
    ],
    highlights: [
      "Presence in 50+ countries",
      "100+ partnership venues",
      "1M+ active users target"
    ]
  }
];

const RoadmapPhase = ({ phase, status, timeline, title, description, items, highlights }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'text-green-500';
      case 'active': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="relative">
      <div 
        className={`
          bg-white/5 backdrop-blur-sm rounded-xl p-8 cursor-pointer
          hover:bg-white/10 transition-colors
          ${isExpanded ? 'ring-2 ring-orange-500/50' : ''}
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className={getStatusColor(status)}>
            {status === 'completed' ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <Circle className="w-6 h-6" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold">{phase}</h3>
              <span className="text-orange-500 font-medium">{timeline}</span>
            </div>
            <h4 className="text-xl mb-2">{title}</h4>
            <p className="text-gray-300 mb-4">{description}</p>
            
            <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden'}`}>
              <div>
                <h5 className="font-semibold mb-3">Key Deliverables:</h5>
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-3">Target Highlights:</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg px-4 py-3 text-sm font-medium"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              className="text-orange-500 font-medium mt-4 flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Roadmap() {
  return (
    <div className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Product Roadmap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our strategic journey towards revolutionizing the combat sports industry through blockchain technology.
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <RoadmapPhase key={index} {...phase} />
          ))}
        </div>
      </div>
    </div>
  );
}