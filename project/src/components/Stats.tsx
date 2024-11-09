import React from 'react';

const stats = [
  { number: '99%', label: 'Customer Satisfaction' },
  { number: '24/7', label: 'Always Available' },
  { number: '150+', label: 'Global Enterprises' },
  { number: '40+', label: 'Languages Supported' }
];

const Stats = () => {
  return (
    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;