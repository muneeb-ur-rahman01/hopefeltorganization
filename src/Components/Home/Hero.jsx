import React from "react";
import MainContent from "./MainContent";
import Reach from "./Reach";
import background from "../../assets/Images/background.jpg";

function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center justify-center">
        
        {/* BACKGROUND IMAGE (FULL FIT) */}
        <img
          src={background}
          alt="background"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative text-center text-white max-w-4xl px-4">
          
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-pj">
            Hopefelt Foundation A Public Health Society
          </h1>

          <p className="mt-4 text-lg sm:mt-8 font-inter">
            Hopefelt Foundation is a non profit public health society working
            to improve the health & well-being of vulnerable communities in Karachi
            
            Led by a team of skilled Public health and medical professionals,
            along with experienced non-medical experts. The foundation provides
            accessible health care services through community outreach,
            hospital visits, free medical screening, health check-ups,
            awareness camps, and health education initiatives focused on
            disease prevention, maternal and child health, family planning
            initiatives, malnutrition and hygiene, aiming to empower
            communities to lead healthier lives.
          </p>

        </div>
      </div>

      {/* OTHER SECTIONS */}
      <MainContent />
      <Reach />
    </>
  );
}

export default Hero;