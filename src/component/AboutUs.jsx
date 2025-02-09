import React from "react";
// import { Navbar } from "./Navbar"; 

export const AboutUs = () => {
  return (
    
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20" style={{backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/5433129/pexels-photo-5433129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
       }}>
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        </div>
      </section>

      <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-lg font-bold text-green-600 mb-2">
            About Us
          </h2>
          <p className="text-5xl font-bold text-black mb-6">
            We are Taking Small Steps to Make Earth a Better Planet
          </p>
          <p className="text-md text-gray-400 mb-2">
            We are a forward-thinking company dedicated to creating a sustainable future through biogas production and efficient waste management. Our mission is to transform waste into valuable resources, contributing to a cleaner, greener planet for generations to come.
          </p>
          <p className="text-md text-gray-400 mb-2">
            Our team is composed of passionate individuals who are committed to driving change in the waste management and energy industries. We work tirelessly to ensure that waste is efficiently collected, processed, and converted into biogas, which can be used as a clean energy source.
          </p>
          <p className="text-md text-gray-400 mb-2">
            Join us in our journey to make the world a greener place. Together, we can build a sustainable future.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/5433129/pexels-photo-5433129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  );
};
