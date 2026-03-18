import React from "react";
import osama from '../../assets/Images/Osama.jpeg'
import Rizwan from '../../assets/Images/Rizwan.jpeg'
import Sharjeel from "../../assets/Images/Sharjeel.png"
import Alishba from "../../assets/Images/Alishba.jpeg"
import Afrah from '../../assets/Images/Afrah.jpg'

function MainContent() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">EXECUTIVE DIRECTORS</h2>
          </div>

          {/* Founder Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto text-center mb-16">

           

             <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-xl border-4 border-white"
               src={Afrah}
               alt=""
             />
             <h3 className="mt-6 text-2xl font-bold">Afrah Sadia</h3>
             <p className="text-gray-600">Founder</p>
            </div>

             <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                 <img
                 className="w-40 h-40 mx-auto rounded-full object-cover shadow-xl border-4 border-white"
                  src={Alishba}
                  alt=""
             />
             <h3 className="mt-6 text-2xl font-bold">Alishba Noor</h3>
                <p className="text-gray-600">Co-Founder</p>
             </div>

            </div>
          {/* Divider */}
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-12"></div>

          {/* Team Members */}
           <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">OUR TEAM</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">

            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover"
                src={osama}
                alt=""
              />
              <h3 className="mt-5 text-xl font-bold">Usama Bin Zahid</h3>
              <p className="text-gray-600">Content Creator  | Operational Team Member</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover"
                src={Rizwan}
                alt=""
              />
              <h3 className="mt-5 text-xl font-bold">Muhammad Rizwan</h3>
              <p className="text-gray-600">Operation Team Member</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover"
                src={Sharjeel}
                alt=""
              />
              <h3 className="mt-5 text-xl font-bold">Sharjeel</h3>
              <p className="text-gray-600">Operation Team Member</p>
            </div>  

          </div>

        </div>
      </section>
    </>
  );
}

export default MainContent;