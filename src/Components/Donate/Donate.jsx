import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const QuickDonate = () => {
  const [activeTab, setActiveTab] = useState('Ramzan Donation');
  const [menuOpen, setMenuOpen] = useState(false);

  // Map each category to a Google Form URL
  const categoryLinks = {
    "Ramzan Donation": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "General": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "Medicines": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "Medical": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "Welfare": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "Education": "https://forms.gle/S5k1XDXsRJkLaLHp9"
  };

  const categories = Object.keys(categoryLinks);

  // Open the form in a new tab
  const handleDonateClick = () => {
    const url = categoryLinks[activeTab];
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col items-center relative">

      {/* Navigation / Header */}
      <header className="w-full bg-[#4da6ff] shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-white text-1xl font-[Cambria] font-bold tracking-wide">
            HOPEFELT FOUNDATION
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white font-semibold hover:text-gray-200 transition-colors">
              Home
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {menuOpen && (
          <div className="md:hidden bg-[#3a90c1] w-full px-6 py-4 flex flex-col space-y-3">
            <Link to="/" className="text-white font-semibold hover:text-gray-200 transition-colors">
              Home
            </Link>
          </div>
        )}
      </header>

      {/* Page Header */}
      <div className="text-center mt-12 mb-12 px-4">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
          Quick <span className="text-green-500">Donate</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg sm:text-xl max-w-md mx-auto leading-relaxed">
          Choose your cause and make an impact today. Every donation counts!
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-2xl mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`py-3 px-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === cat
                ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Card */}
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl h-80 md:h-96 group mb-16 mx-auto">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80')` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full p-8 flex flex-col justify-between text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">{activeTab}</h2>
              <p className="text-sm sm:text-base mt-2 opacity-90 max-w-[180px]">
                Make your {activeTab} 2026 a source of mercy and reward.
              </p>
            </div>
            <span className="bg-green-500 text-xs sm:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {activeTab.split(" ")[0]}
            </span>
          </div>

          {/* Donate Now button opens Google Form */}
          <button
            onClick={handleDonateClick}
            className="bg-white text-green-600 font-bold py-3 px-8 rounded-2xl self-center shadow-lg active:scale-95 transition-transform mt-6"
          >
            DONATE NOW
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923710137556" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default QuickDonate;