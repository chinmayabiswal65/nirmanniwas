import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passion About properties , Dedicated to Your Vision.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} className="w-full sm:w-1/2 max-w-lg"></img>

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence </p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Years of Excellence </p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Project Complted </p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Mn. Sq. Ft. Delivered </p>
            </div>
          </div>
          <p className="text-gray-600 my-10 max-w-lg">
            At Nirman Awas, we are passionate about transforming dreams into
            reality. With a commitment to excellence and a focus on quality, we
            specialize in creating homes that reflect your unique vision. Our
            team of experienced professionals works closely with you to ensure
            every detail is perfect, from design to construction. We believe in
            building more than just houses; we build communities where families
            can thrive and create lasting memories. Trust Nirman Awas to bring
            your dream home to life with integrity, innovation, and unparalleled
            craftsmanship.
          </p>

          <button className="bg-blue-600 text-white px-8 py-2 rounded">Lean more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
