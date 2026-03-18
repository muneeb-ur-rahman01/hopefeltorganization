import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden">

      {/* Header */}
      <header className="w-full bg-[#4da6ff] shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

          {/* Logo / Title */}
          <div className="text-white text-sm sm:text-lg md:text-xl font-[Cambria] font-bold tracking-wide">
            HOPEFELT FOUNDATION
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white font-semibold hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>

        {/* Mobile Links */}
        {menuOpen && (
          <div className="md:hidden bg-[#3a90c1] w-full px-6 py-4 flex flex-col space-y-3">
            <Link
              to="/"
              className="text-white font-semibold hover:text-gray-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </div>
        )}
      </header>

      {/* Contact Section */}
      <section className="text-gray-800 bg-white body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center gap-10">

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-xl overflow-hidden p-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              Get in Touch
            </h1>

            <p className="leading-relaxed mb-8 text-gray-700 text-center">
              Have any health-related questions or need guidance? Fill out the form below and our medical team will respond promptly.
            </p>

            <form className="space-y-5 w-full max-w-md">

              {/* Name */}
              <div>
                <label className="leading-7 text-sm text-gray-700 flex items-center">
                  <FiUser className="mr-2 text-blue-500" /> Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 text-base outline-none text-gray-900 py-3 px-4"
                />
              </div>

              {/* Email */}
              <div>
                <label className="leading-7 text-sm text-gray-700 flex items-center">
                  <FiMail className="mr-2 text-blue-500" /> Email
                </label>

                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 text-base outline-none text-gray-900 py-3 px-4"
                />
              </div>

              {/* Message */}
              <div>
                <label className="leading-7 text-sm text-gray-700 flex items-center">
                  <FiMessageSquare className="mr-2 text-blue-500" /> Message
                </label>

                <textarea
                  placeholder="How can we assist you?"
                  className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 h-36 text-base outline-none text-gray-900 py-3 px-4 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="button"
                className="flex items-center justify-center w-full text-white bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-lg text-lg font-medium shadow-md transition-all duration-300"
              >
                <FiSend className="mr-2" /> Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}
          <div
            className="w-full lg:w-2/3 bg-white shadow-lg overflow-hidden p-12 flex flex-col"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
          >

            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Contact Information
            </h2>

            <div className="space-y-6">

              {/* Location */}
              <div className="flex items-start">
                <div className="bg-blue-500 rounded-md p-3">
                  <FiMapPin className="text-white text-xl" />
                </div>

                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                  <p className="mt-1 text-gray-700">
                    Hopefelt Foundation <br />
                    Green Town, Karachi
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-500 rounded-md p-3">
                  <FiMail className="text-white text-xl" />
                </div>

                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                  <p className="mt-1 text-gray-700">
                    <a href="mailto:hopefeltfoundation@gmail.com" className="hover:text-blue-500">
                      hopefeltfoundation@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-500 rounded-md p-3">
                  <FiPhone className="text-white text-xl" />
                </div>

                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                  <p className="mt-1 text-gray-700">
                    <a href="tel:+923710137556" className="hover:text-blue-500">
                      0371-0137556
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start">
                <div className="bg-blue-500 rounded-md p-3">
                  <FiClock className="text-white text-xl" />
                </div>

                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Working Hours</h3>
                  <p className="mt-1 text-gray-700">
                    Monday - Thursday: 9:00 am - 6:00 pm
                  </p>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div className="mt-10 text-center">

              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Follow Us
              </h3>

              <div className="flex justify-center space-x-4">

                <a
                  href="https://www.instagram.com/hopefelt_foundation"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-100 hover:bg-blue-200 rounded-full p-3"
                >
                  <FaInstagram className="text-blue-600 text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/company/hopefelt-foundation/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-100 hover:bg-blue-200 rounded-full p-3"
                >
                  <FaLinkedin className="text-blue-600 text-xl" />
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923710137556"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

    </div>
  );
}

export default Contact;