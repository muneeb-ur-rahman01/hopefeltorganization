import React from "react";
import MainContent from "./MainContent";
import Reach from "./Reach";
import background from "../../assets/Images/background.jpg";

function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE (FULL COVER) */}
        <img
          src={background}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        {/* CONTENT */}
        <div className="relative text-center text-white max-w-4xl px-4">

          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-sans">
            Hopefelt Foundation A Public Health Society
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl sm:mt-6 font-sans text-gray-200 leading-relaxed">
            Hopefelt Foundation is a non profit public health society working
            to improve the health & well-being of vulnerable communities in Karachi.

            Led by a team of skilled Public Health and medical professionals,
            along with experienced non-medical experts. The foundation provides
            accessible health care services through community outreach,
            hospital visits, free medical screening, health check-ups,
            awareness camps, and health education initiatives focused on
            disease prevention, maternal and child health, family planning,
            malnutrition, and hygiene.

            Our mission is to empower communities to lead healthier lives.
          </p>

          {/* CTA BUTTON (NEW) */}
         
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <MainContent />
      <Reach />
    </>
  );
}

export default Hero;