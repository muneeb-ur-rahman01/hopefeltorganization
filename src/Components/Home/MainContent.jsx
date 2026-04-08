import React from "react";
import osama from '../../assets/Images/Osama.jpeg'
import Rizwan from '../../assets/Images/Rizwan.jpeg'
import Sharjeel from "../../assets/Images/Sharjeel.png"
import Alishba from "../../assets/Images/Alishba.jpeg"
import Afrah from '../../assets/Images/Afrah.jpg'

function MainContent() {
  const founders = [
    { name: "Afrah Sadia", role: "Founder", img: Afrah },
    { name: "Alishba Noor", role: "Co-Founder", img: Alishba },
  ];

  const team = [
    { name: "Usama Bin Zahid", role: "Content Creator | Operational Team Member", img: osama },
    { name: "Muhammad Rizwan", role: "Operation Team Member", img: Rizwan },
    { name: "Sharjeel", role: "Operation Team Member", img: Sharjeel },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
            Executive Directors
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Meet the visionaries behind our organization
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {founders.map((person, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                  {person.role}
                </span>
              </div>
              <h3 className="mt-6 text-xl md:text-2xl font-bold text-center">
                {person.name}
              </h3>
              <p className="text-gray-500 text-center mt-1">{person.role}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-12 rounded"></div>

        {/* Team Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
            Our Team
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            The people who make everything happen
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-gray-200 group-hover:scale-105 transition"
              />
              <h3 className="mt-5 text-lg md:text-xl font-semibold text-center">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm text-center mt-1 leading-snug">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MainContent;
