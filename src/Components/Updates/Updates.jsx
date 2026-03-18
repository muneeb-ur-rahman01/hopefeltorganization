import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Events from './Events';

// Import images m1 to m23 as JPG
import m1 from '../../assets/Images/m1.jpg';
import m2 from '../../assets/Images/m2.jpg';
import m3 from '../../assets/Images/m3.jpg';
import m4 from '../../assets/Images/m4.jpg';
import m5 from '../../assets/Images/m5.jpg';
import m6 from '../../assets/Images/m6.jpg';
import m7 from '../../assets/Images/m7.jpg';
import m8 from '../../assets/Images/m8.jpg';
import m9 from '../../assets/Images/m9.jpg';
import m10 from '../../assets/Images/m10.jpg';
import m11 from '../../assets/Images/m11.jpg';
import m12 from '../../assets/Images/m12.jpg';
import m13 from '../../assets/Images/m13.jpg';
import m14 from '../../assets/Images/m14.jpg';
import m16 from '../../assets/Images/m16.jpg';
import m17 from '../../assets/Images/m17.jpg';
import m18 from '../../assets/Images/m18.jpg';
import m19 from '../../assets/Images/m19.jpg';
import m20 from '../../assets/Images/m20.jpg';
import m21 from '../../assets/Images/m21.jpg';
import m22 from '../../assets/Images/m22.jpg';
import m23 from '../../assets/Images/m23.jpg';

const Updates = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const articles = [
    m1, m2, m3, m4, m5, m6, m7, m8, m9, m10,
    m11, m12, m13, m14, m16, m17, m18,
    m19, m20, m21, m22, m23
  ].map((img, index) => ({ id: index + 1, image: img }));

  return (
    <>
      <div className="bg-white min-h-screen font-sans text-gray-900 px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">

          {/* Navbar */}
          <header className="w-full bg-[#4da6ff] shadow-md mb-12 rounded-xl">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-6">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-[Cambria] font-bold tracking-wide truncate max-w-[70%]">
                HOPEFELT FOUNDATION
              </div>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-white font-semibold hover:text-gray-200 transition-colors">Home</Link>
              </div>
              <div className="md:hidden ml-2">
                <button 
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-white text-3xl focus:outline-none"
                >
                  {menuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>
            {menuOpen && (
              <div className="md:hidden bg-[#3a90c1] w-full px-4 py-4 flex flex-col space-y-3 rounded-b-xl">
                <Link to="/" className="text-white font-semibold hover:text-gray-200 transition-colors">Home</Link>
              </div>
            )}
          </header>

          {/* Page Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                MEDICAL CAMPS
              </h1>
            </div>
            <div className="max-w-xs">
              <p className="text-gray-500 text-sm leading-relaxed">
                In Medical Camps, we provide free treatment to needy patients.
              </p>
            </div>
          </header>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {articles.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`Update ${item.id}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                    {/* Optional Title */}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Events/>
    </>
  );
};

export default Updates;