import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const QuickDonate = () => {
  const [activeTab, setActiveTab] = useState('Ramzan Donation');
  const [menuOpen, setMenuOpen] = useState(false);

  const categoryLinks = {
    "Ramzan Donation": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "General": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "Medicines": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "Medical": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "Welfare": "https://forms.gle/S5k1XDXsRJkLaLHp9",
    "Education": "https://forms.gle/S5k1XDXsRJkLaLHp9"
  };

  const categories = Object.keys(categoryLinks);

  const handleDonateClick = () => {
    const url = categoryLinks[activeTab];
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col items-center relative">

      {/* Navigation / Header */}
      <header className="w-full bg-[#4da6ff] shadow-md relative z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-white text-1xl font-[Cambria] font-bold tracking-wide">
            HOPEFELT FOUNDATION
          </div>

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
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#4da6ff] shadow-2xl rounded-l-3xl z-50 p-6 flex flex-col space-y-6 transform transition-transform duration-300 font-sans ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Menu</h2>
        <Link 
          to="/" 
          className="text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-[#4da6ff] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-[#4da6ff] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Link 
          to="/contact" 
          className="text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-[#4da6ff] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>

      {/* Page Header */}
      <div className="text-center mt-12 mb-12 px-4">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
          Quick <span className="text-[#4da6ff]">Donate</span>
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
                ? 'bg-[#4da6ff] text-white shadow-lg shadow-blue-200'
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
            <span className="bg-[#4da6ff] text-xs sm:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {activeTab.split(" ")[0]}
            </span>
          </div>

          <button
            onClick={handleDonateClick}
            className="bg-white text-[#1F7EC4] font-bold py-3 px-8 rounded-2xl self-center shadow-lg active:scale-95 transition-transform mt-6"
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
        className="fixed bottom-24 right-6 bg-[#4da6ff] text-white p-4 rounded-full shadow-xl hover:bg-[#1F7EC4] transition-colors z-50"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default QuickDonate;