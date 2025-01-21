import React, { useState } from 'react';
import { Coins, Lock, LineChart, ShieldCheck } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, description }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
    <div className="flex items-start justify-between mb-4">
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-2xl font-bold text-orange-500">{value}</p>
      </div>
      <Icon className="w-6 h-6 text-orange-500" />
    </div>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

const AllocationItem = ({ label, value, description, isActive, onClick }) => (
  <div
    className={`
      bg-white/5 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all
      ${isActive ? 'ring-2 ring-orange-500 bg-white/10' : 'hover:bg-white/10'}
    `}
    onClick={onClick}
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold">{label}</h3>
      <span className="text-2xl font-bold text-orange-500">{value}</span>
    </div>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

const VestingSchedule = ({ allocation }) => {
  const schedules = {
    'Public Sale': [
      { month: 'TGE', amount: '40%' },
      { month: 'Month 1', amount: '20%' },
      { month: 'Month 2', amount: '20%' },
      { month: 'Month 3', amount: '20%' }
    ],
    'Team': [
      { month: 'TGE', amount: '0%' },
      { month: 'Month 6', amount: '25%' },
      { month: 'Month 12', amount: '25%' },
      { month: 'Month 18', amount: '25%' },
      { month: 'Month 24', amount: '25%' }
    ],
    'Development': [
      { month: 'TGE', amount: '10%' },
      { month: 'Month 3', amount: '30%' },
      { month: 'Month 6', amount: '30%' },
      { month: 'Month 9', amount: '30%' }
    ],
    'Marketing': [
      { month: 'TGE', amount: '20%' },
      { month: 'Month 2', amount: '40%' },
      { month: 'Month 4', amount: '40%' }
    ],
    'Liquidity': [
      { month: 'TGE', amount: '100%' }
    ],
    'Reserve': [
      { month: 'TGE', amount: '0%' },
      { month: 'Month 12', amount: '50%' },
      { month: 'Month 24', amount: '50%' }
    ]
  };

  return (
    <div className="mt-6 space-y-4">
      <h4 className="font-semibold">Vesting Schedule for {allocation}</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {schedules[allocation].map((schedule, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-400">{schedule.month}</p>
            <p className="text-lg font-semibold text-orange-500">{schedule.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Tokenomics() {
  const [selectedAllocation, setSelectedAllocation] = useState('Public Sale');

  const tokenStats = [
    {
      label: "Total Supply",
      value: "1,000,000,000",
      icon: Coins,
      description: "Fixed supply with no future minting"
    },
    {
      label: "Initial Market Cap",
      value: "$5,000,000",
      icon: LineChart,
      description: "Based on initial token price"
    },
    {
      label: "Vesting Period",
      value: "24 Months",
      icon: Lock,
      description: "Gradual token release schedule"
    },
    {
      label: "Security",
      value: "Audited",
      icon: ShieldCheck,
      description: "Smart contract audited by Certik"
    }
  ];

  const allocations = [
    {
      label: "Public Sale",
      value: "40%",
      description: "Available for public token sale participants"
    },
    {
      label: "Team",
      value: "15%",
      description: "Reserved for team members and advisors"
    },
    {
      label: "Development",
      value: "20%",
      description: "Platform development and technical improvements"
    },
    {
      label: "Marketing",
      value: "10%",
      description: "Marketing initiatives and partnerships"
    },
    {
      label: "Liquidity",
      value: "10%",
      description: "Initial liquidity provision"
    },
    {
      label: "Reserve",
      value: "5%",
      description: "Reserved for future ecosystem development"
    }
  ];

  return (
    <div className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Tokenomics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understand the economic model and token distribution of Combat Coin designed for long-term sustainability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tokenStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Token Allocation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allocations.map((allocation) => (
              <AllocationItem
                key={allocation.label}
                {...allocation}
                isActive={selectedAllocation === allocation.label}
                onClick={() => setSelectedAllocation(allocation.label)}
              />
            ))}
          </div>
          <VestingSchedule allocation={selectedAllocation} />
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Token Utility</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Governance",
                description: "Vote on important protocol decisions and proposals"
              },
              {
                title: "Staking Rewards",
                description: "Earn passive income by staking your tokens"
              },
              {
                title: "Platform Access",
                description: "Access exclusive features and premium content"
              },
              {
                title: "Fee Discounts",
                description: "Receive discounts on platform transaction fees"
              },
              {
                title: "Event Access",
                description: "Get priority access to combat sports events"
              },
              {
                title: "NFT Benefits",
                description: "Special privileges in NFT marketplace"
              }
            ].map((utility, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold mb-2">{utility.title}</h3>
                <p className="text-gray-300 text-sm">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}