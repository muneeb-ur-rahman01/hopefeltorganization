import React from "react";
import hopefeltLogo from '../../../assets/Images/hopefeltLogo.png'
function Footer() {
  return (
    <>
    <section class="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                    <img class="w-auto h-9" src={hopefeltLogo} alt="Logo of Organization" /> <span>HOPEFELT ORGANIZATION</span>

                    <p class="text-base leading-relaxed text-gray-600 mt-7">Hopefelt Foundation is a nonprofit public health organization working to improve the health and well-being of vulnerable communities in Karachi through accessible healthcare, medical screenings, and community outreach programs..</p>

                   <ul className="flex items-center space-x-3 mt-9">

  {/* LinkedIn */}
  <li>
    <a
      href="https://www.linkedin.com/company/hopefelt-foundation/posts/?feedView=all"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-9 h-9 hover:bg-blue-700"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452H16.89v-5.569c0-1.329-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.598 0 4.263 2.368 4.263 5.451v6.292zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM6.78 20.452H3.893V9H6.78v11.452z"/>
      </svg>
    </a>
  </li>

  {/* Instagram */}
  <li>  
    <a
      href="https://www.instagram.com/hopefelt_foundation?igsh=NjZwYTVzaHkxdHYz"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-9 h-9 hover:bg-pink-600"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm4.25 5a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
      </svg>
    </a>
  </li>

  {/* WhatsApp */}
  <li>
    <a
      href="https://wa.me/923710137556"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center text-white transition-all duration-200 bg-green-600 rounded-full w-9 h-9 hover:bg-green-700"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.91 11.91 0 0012.04 0C5.43 0 .04 5.39.04 12c0 2.12.56 4.19 1.63 6.02L0 24l6.18-1.62A11.94 11.94 0 0012.04 24c6.61 0 12-5.39 12-12 0-3.2-1.25-6.21-3.52-8.52zM12.04 21.8c-1.82 0-3.6-.49-5.15-1.42l-.37-.22-3.67.96.98-3.58-.24-.37A9.77 9.77 0 012.24 12c0-5.41 4.39-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87A9.72 9.72 0 0121.84 12c0 5.41-4.39 9.8-9.8 9.8zm5.39-7.36c-.29-.15-1.72-.85-1.98-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.29-1.05 1.02-1.05 2.49s1.08 2.88 1.23 3.08c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.35z"/>
      </svg>
    </a>
  </li>
</ul>
                </div>

            <div>
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Organization</p>

                <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
                    </li>
                </ul>
            </div>

            {/* <div>
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div> */}

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
             <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                 Contact With Us
             </p>

            <form className="mt-6 space-y-4">

             {/* Email */}
             <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none           focus:border-blue-600"
                  />
             </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
             <textarea
                         name="message"
                         id="message"
                         rows="4"
                 placeholder="Write your message..."
                         className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
               ></textarea>
              </div>

              {/* Send Button */}
              <button
                type="submit"
               className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
    >
               Send Message
                </button>

            </form>
            </div>          
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-600">© Copyright 2024, All Rights Reserved by Hopefelt organization</p>
    </div>
</section>

    </>
  );
}
export default Footer;