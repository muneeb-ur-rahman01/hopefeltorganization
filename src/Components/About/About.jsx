import React from "react";
import { Link } from "react-router-dom";
import e1 from "../../assets/Images/e1.jpg";

function About() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">

      {/* Header */}
      <div className="w-full bg-[#4da6ff] py-4 px-4 sm:px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <div className="text-white text-1xl sm:text-2xl md:text-1xl font-[Cambria] font-bold tracking-wide">
            HOPEFELT FOUNDATION
          </div>

          <div className="space-x-4">
            <Link to="/">
                                    <button className="bg-[#1F7EC4] text-white font-semibold py-2 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-white">
                                      Home
                                    </button>
                                  </Link>
          </div>

        </div>
      </div>

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