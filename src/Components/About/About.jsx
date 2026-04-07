import React, { useState } from "react";
import { Link } from "react-router-dom";
import e1 from "../../assets/Images/e1.jpg";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-x-hidden font-sans">

      {/* Header */}
      <div className="w-full bg-[#4da6ff] py-4 px-4 sm:px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <div className="text-white text-lg sm:text-xl font-bold tracking-wide">
            HOPEFELT FOUNDATION
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link to="/">
              <button className="bg-[#1F7EC4] text-white font-semibold py-2 px-6 rounded-full border-2 border-white">
                Home
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

      {/* MOBILE SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#4da6ff] shadow-lg transform transition-transform duration-300 z-50 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-white"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-4 px-6 text-lg font-medium text-white">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* About Section */}
      <section className="text-gray-600 bg-white body-font">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                alt="about"
                src={e1}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">

              <h2 className="text-sm text-gray-500 tracking-widest mb-2">
                HOPEFELT FOUNDATION
              </h2>

              <h1 className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-4">
                ABOUT US
              </h1>

              <p className="leading-relaxed text-sm sm:text-base">
                Hopefelt Foundation is a nonprofit public health society working
                to improve the health & well-being of vulnerable communities in
                Karachi. Led by a team of skilled public health and medical
                professionals along with experienced non-medical experts.
                The foundation provides accessible health care services
                through community outreach, hospital visits, free medical
                screening, health check-ups, awareness camps, and health
                education initiatives focused on disease prevention,
                maternal and child health, family planning initiatives,
                malnutrition, and hygiene—aiming to empower communities
                to lead healthier lives.
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;