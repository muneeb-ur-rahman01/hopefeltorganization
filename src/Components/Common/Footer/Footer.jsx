import React from "react";
import hopefeltLogo from "../../../assets/Images/hopefeltLogo.png";

function Footer() {
  return (
    <section className="py-10 bg-[#4da6ff] text-white font-sans">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-8 text-center sm:text-left">

          {/* ABOUT */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <span className="text-xl font-bold">HOPEFELT FOUNDATION</span>

            <p className="text-sm leading-relaxed mt-4 text-white/90">
              Hopefelt Foundation is a nonprofit public health organization
              working to improve the health and well-being of vulnerable
              communities in Karachi through accessible healthcare.
            </p>

            {/* SOCIAL ICONS */}
            <ul className="flex justify-center sm:justify-start items-center space-x-3 mt-6">
              
              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/company/hopefelt-foundation/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white text-[#4da6ff] rounded-full w-9 h-9 hover:scale-110 transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452H16.89v-5.569c0-1.329-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.598 0 4.263 2.368 4.263 5.451v6.292z" />
                  </svg>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/hopefelt_foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white text-[#4da6ff] rounded-full w-9 h-9 hover:scale-110 transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5z" />
                  </svg>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/923710137556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white text-[#4da6ff] rounded-full w-9 h-9 hover:scale-110 transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.91 11.91 0 0012.04 0C5.43 0 .04 5.39.04 12" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* LINKS */}
          <div>
            <p className="text-sm font-semibold uppercase">Organization</p>

            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Updates</a></li>
              <li><a href="#" className="hover:underline">Donation</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-sm font-semibold uppercase">Contact With Us</p>

            <form className="mt-4 space-y-3">
              
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-black rounded-md outline-none"
              />

              <textarea
                rows="3"
                placeholder="Write your message..."
                className="w-full p-3 text-black rounded-md outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-white text-[#4da6ff] font-semibold rounded-md hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <hr className="mt-10 mb-6 border-white/30" />

        <p className="text-sm text-center">
          © Copyright 2024, All Rights Reserved by Hopefelt Organization
        </p>
      </div>
    </section>
  );
}

export default Footer;