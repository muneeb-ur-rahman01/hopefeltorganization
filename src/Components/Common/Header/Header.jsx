import React, { useState } from "react";
import headerImage from "../../../assets/Images/hopefeltLogo.png";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="h-auto flex flex-col font-sans">
        
        {/* TOP BAR */}
        <div className="h-[90px] bg-[#4da6ff] flex justify-center items-center">
          <div className="flex items-center justify-between max-w-6xl px-4 w-full">
            
            <div className="flex items-center">
              <img
                src={headerImage}
                alt="Logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <span className="text-white text-sm sm:text-base font-semibold">
                HOPEFELT FOUNDATION | A PUBLIC HEALTH SOCIETY
              </span>
            </div>

            {/* MENU BUTTON */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(true)}
                className="text-white text-3xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="w-full bg-gray-200 hidden md:block">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-[#7a8c74] font-medium">
                HOME
              </Link>
              <Link to="/About" className="hover:text-[#7a8c74] font-medium">
                ABOUT US
              </Link>
              <Link to="/Contact" className="hover:text-[#7a8c74] font-medium">
                CONTACT US
              </Link>
              <Link to="/Updates" className="hover:text-[#7a8c74] font-medium">
                UPDATES
              </Link>
              <Link to="/QuickDonate" className="hover:text-[#7a8c74] font-medium">
                DONATE US
              </Link>
            </div>

            <Link to="https://forms.gle/31qB1FEnQr3zbswq5">
              <button className="bg-[#1F7EC4] text-white font-semibold py-2 px-8 rounded-full">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#4da6ff] shadow-lg transform transition-transform duration-300 z-50 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-white"
          >
            ✕
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col space-y-4 px-6 text-lg font-medium text-white">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
          <Link to="/Updates" onClick={() => setMenuOpen(false)}>UPDATES</Link>
          <Link to="/QuickDonate" onClick={() => setMenuOpen(false)}>DONATE US</Link>

          <Link to="https://forms.gle/31qB1FEnQr3zbswq5">
            <button className="bg-white text-[#1F7EC4] py-3 w-full rounded-full mt-4 font-semibold text-lg">
              Join Us
            </button>
          </Link>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* BOTTOM SCROLL TEXT */}
      <div className="overflow-hidden h-16 bg-[#1F7EC4] flex items-center font-sans">
        <div className="whitespace-nowrap animate-slide text-2xl font-bold text-white w-full">
          WELCOME TO HOPEFELT FOUNDATION
        </div>
      </div>
    </>
  );
}

export default Header;