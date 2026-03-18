import React from 'react';

function Reach() {
  const stats = [
    { number: '1+', title: 'Years for providing services', subtitle: 'Helping the needed people' },
    { number: '100+', title: 'Official members', subtitle: 'Working Actively' },
    { number: '300+', title: 'Volunteers', subtitle: 'Working Actively' },
    { number: '10+', title: 'Iftar Drives', subtitle: 'Community Support' },
    { number: '8+', title: 'Online Awareness Webinars', subtitle: 'Digital Outreach' },
    { number: '5+', title: 'Onsite Awareness Sessions', subtitle: 'Community Visits' },
    { number: '3+', title: 'Hospital & Clinic Visits', subtitle: 'Healthcare Support' },
    { number: '1', title: 'Research Workshop', subtitle: 'Educational Initiative' },
    { number: '7+', title: 'Medical Camps', subtitle: 'Annual Events' },
  ];

  // Duplicate array for infinite loop
  const loopingStats = [...stats, ...stats];

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      {/* Keyframes inline */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }    
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            OUR IMPACTS
          </h2>
        </div>

        {/* Marquee / Horizontal scroll */}
        <div className="overflow-hidden relative">
          <div
            className="flex w-max animate-marquee"
            style={{
              animation: 'marquee 40s linear infinite',
            }}
          >
            {loopingStats.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-60 sm:w-64 md:w-72 bg-white rounded-xl p-6 text-center mx-2 transition-shadow duration-300 hover:shadow-xl cursor-pointer"
              >
                <h3 className="font-bold text-5xl sm:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    {item.number}
                  </span>
                </h3>
                <p className="mt-4 text-lg sm:text-xl font-medium text-gray-900">{item.title}</p>
                <p className="text-base mt-0.5 text-gray-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reach;