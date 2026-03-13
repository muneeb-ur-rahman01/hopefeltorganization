import React from 'react';
import o1 from '../../assets/Images/o1.jpg';
import o2 from '../../assets/Images/o2.jpg';
import o3 from '../../assets/Images/o3.jpg';
import o4 from '../../assets/Images/o4.jpg';
import o5 from '../../assets/Images/o5.jpg';
import o6 from '../../assets/Images/o6.jpg';
import o7 from '../../assets/Images/o7.jpg';
import o8 from '../../assets/Images/o8.jpg'

const OtherUpdates = () => {
  const articles = [
    { id: 1, image: o1 },
    { id: 2, image: o2 },
    { id: 3, image: o3 },
    { id: 4, image: o4 },
    { id: 5, image: o5 },
    { id: 6, image: o6 },
    { id: 7, image: o7 },
    { id : 8, image: o8},
    ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 px-6 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              RAMADAN SERIES
            </h1>
            <h3 className="text-xl text-gray-700">OLD AGE HOME 2026</h3>
          </div>
          <div className="max-w-xs">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              We provided a joyful and engaging environment for the residents.
            </p>
          </div>
        </header>

        {/* 4-Column Grid */}
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
         {articles.map((item) => (
    <div 
      key={item.id} 
      className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
        <img 
          src={item.image} 
          alt={`Update ${item.id}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Optional Content Container */}
      <div className="p-6 flex flex-col">
        {/* Any text or title */}
      </div>
    </div>
  ))}
        </div>
      </div>
    </div>
  );
};

export default OtherUpdates;