import React from 'react';
import { Brain, Bot, Sparkles, Globe2, Users, Lock } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI',
    description: 'Powered by cutting-edge artificial intelligence and natural language processing.'
  },
  {
    icon: Bot,
    title: 'Digital Humans',
    description: 'Create lifelike digital avatars that connect with your audience on a personal level.'
  },
  {
    icon: Sparkles,
    title: 'Natural Interactions',
    description: 'Enable seamless, human-like conversations with emotional intelligence.'
  },
  {
    icon: Globe2,
    title: 'Global Scale',
    description: 'Deploy across multiple languages and cultures with consistent quality.'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Transform customer interactions with personalized digital experiences.'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade security and privacy protection for peace of mind.'
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
            Transform Your Digital Presence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;