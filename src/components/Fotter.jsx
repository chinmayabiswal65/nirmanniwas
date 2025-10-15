import React from "react";
import { assets } from "../assets/assets";

const Fotter = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark}></img>
          {/* <p className="text-gray-400 mt-4"></p> */}
          <div className="text-gray-400 mt-4 mb-3">
            <iframe
              title="Nirman Awas Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.488947807812!2d78.47469267482084!3d17.406498683468507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9777b1a7a1ab%3A0x3d0a893cf4b90d0!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1696922948457!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Home" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletetr
          </h3>
          <p className="text-gray-400 mb-4 max-w-80"></p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            ></input>
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mty-10 text-center text-gray-500">
        Copyright © 2025 Nirman Awas. All rights reserved.
      </div>
    </div>
  );
};

export default Fotter;
