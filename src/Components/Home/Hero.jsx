import React from "react";
import MainContent from "./MainContent";
import Reach from "./Reach";
import background from '../../assets/Images/background.jpg'

function Hero() {
  return (
   <>
    <div className="relative bg-gray-50">
    <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img className="w-auto h-full" src="" alt="" />
    </div>

     <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
                <div>
                    <div className="text-center lg:text-left">
                       <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl font-pj">
                          Hopefelt Foundation A Public Health Society
                        </h1>

                        {/* JUSTIFIED TEXT */}
                        <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter text-justify">
                        Hopefelt Foundation is a non profit public health society working to improve the health & well-being of vulnerable communities in Karachi <br/>
                        Led by a team of skilled Public health and medical professionals, along with experienced non-medical experts. The foundation provides accessible health care services through community outreach, hospital visits, free medical screening, health check-ups, awareness camps, and health education initiatives focused on disease prevention, maternal and child health, family planning initiatives, malnutrition and hygiene, aiming to empower communities to lead healthier lives.
                        </p>
                    </div>                
                </div>

                {/* IMAGE WITH BORDER + 3D EFFECT */}
                <div>
                    <img 
                      className="w-full rounded-2xl border-4 border-white shadow-2xl hover:scale-105 transition duration-500"
                      src={background} 
                      alt=""
                    />
                </div>

            </div>
        </div>
    </section>
    </div>

    <MainContent/>
    <Reach/>

   </>
  );
}

export default Hero;