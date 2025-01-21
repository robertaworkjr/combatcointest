import React from 'react';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

const TeamMember = ({ name, role, bio, image, expertise, socials }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors group">
    <div className="relative mb-6 aspect-square rounded-lg overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-orange-500 font-medium mb-3">{role}</p>
    <p className="text-gray-300 mb-4">{bio}</p>
    
    <div className="mb-4">
      <h4 className="text-sm font-semibold mb-2">Expertise:</h4>
      <div className="flex flex-wrap gap-2">
        {expertise.map((skill, index) => (
          <span 
            key={index}
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full px-3 py-1 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div className="flex items-center gap-4">
      {socials.github && (
        <a href={socials.github} target="_blank" rel="noopener noreferrer" 
           className="text-gray-400 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
      )}
      {socials.linkedin && (
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {socials.twitter && (
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
      )}
      {socials.website && (
        <a href={socials.website} target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-white transition-colors">
          <Globe className="w-5 h-5" />
        </a>
      )}
    </div>
  </div>
);

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      bio: "Former MMA fighter with 10+ years in blockchain technology. Pioneered several successful crypto projects.",
      image: "https://placehold.co/400x400",
      expertise: ["Blockchain", "Fight Management", "Strategy", "Leadership"],
      socials: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Blockchain architect with experience at major exchanges. Led development teams at Fortune 500 companies.",
      image: "https://placehold.co/400x400",
      expertise: ["Smart Contracts", "DeFi", "Security", "Architecture"],
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Partnerships",
      bio: "15+ years in combat sports management. Built extensive networks across major fight promotions.",
      image: "https://placehold.co/400x400",
      expertise: ["Sports Management", "Negotiations", "Marketing", "Business Development"],
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Lisa Kumar",
      role: "Lead Developer",
      bio: "Smart contract specialist and security expert. Previously secured multi-million dollar DeFi protocols.",
      image: "https://placehold.co/400x400",
      expertise: ["Solidity", "DApp Development", "Security Auditing", "Web3"],
      socials: {
        github: "#",
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "James Wilson",
      role: "Community Manager",
      bio: "Professional boxing background with 5+ years in crypto community management.",
      image: "https://placehold.co/400x400",
      expertise: ["Community Building", "Social Media", "Content Strategy", "Event Management"],
      socials: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Ana Martinez",
      role: "Marketing Director",
      bio: "Combat sports marketing veteran with expertise in digital strategy and brand development.",
      image: "https://placehold.co/400x400",
      expertise: ["Digital Marketing", "Brand Strategy", "PR", "Analytics"],
      socials: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    }
  ];

  return (
    <div className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse group of experts combining combat sports experience with blockchain innovation to revolutionize the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals who are passionate about combat sports and blockchain technology.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold 
                hover:opacity-90 transition-opacity"
            >
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}