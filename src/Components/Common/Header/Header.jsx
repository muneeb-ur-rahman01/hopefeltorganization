import React, { useState } from "react";
import headerImage from "../../../assets/Images/hopefeltLogo.png";
import { Link } from "react-router-dom";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="h-auto flex flex-col">
        <div className="h-[90px] bg-gradient-to-r from-[#4da6ff] to-[#7a8c74] flex justify-center items-center">
          <div className="flex items-center justify-center max-w-6xl px-4 w-full relative">
            <div className="flex items-center">
              <img
                src={headerImage}
                alt="Logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <span className="text-white text-xl sm:text-2xl font-semibold">
                HOPEFELT FOUNDATION | FOR EVERY HUMAN 
              </span>
            </div>
            <div className="absolute right-4 md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white text-3xl focus:outline-none hover:scale-110 transition-transform"
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <div
              className={`flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 ${
                menuOpen ? "block" : "hidden"
              } md:flex`}
            >
              <Link 
                to="/" 
                className="hover:text-[#7a8c74] font-medium transition-colors duration-300"
              >
                HOME
              </Link>
              <Link 
                to="/About" 
                className="hover:text-[#7a8c74] font-medium transition-colors duration-300"
              >
                ABOUT US
              </Link>
              <Link 
                to="/Contact" 
                className="hover:text-[#7a8c74] font-medium transition-colors duration-300"
              >
                CONTACT US
              </Link>
              <Link 
                to="/Updates" 
                className="hover:text-[#7a8c74] font-medium transition-colors duration-300"
              >
                UPDATES
              </Link>
               <Link 
                to="/QuickDonate" 
                className="hover:text-[#7a8c74] font-medium transition-colors duration-300"
              >
                DONATE US
              </Link>
            </div>
            <div className={`${menuOpen ? "mt-4 md:mt-0" : "hidden"} md:block space-x-3`}>
              
               <Link to="https://forms.gle/31qB1FEnQr3zbswq5">
                <button className="bg-gradient-to-r from-[#4da6ff] to-[#7a8c74] bg-gradient-to-r from-[#4da6ff] to-[#7a8c74] text-white font-semibold py-2 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-white">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden h-16 bg-white flex justify-center items-center">
        <div className="whitespace-nowrap animate-slideRight text-xl font-bold text-gray-800 h-full w-full flex items-center bg-[#89cff0]">
          <marquee className="font-bold text-3xl text-white">
            WELCOME TO HOPEFELT FOUNDATION
          </marquee>
        </div>
      </div>
    </>
  );
}

export default Header;