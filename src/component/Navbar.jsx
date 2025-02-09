import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 text-white p-4 shadow-md bg-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Biogas Portal Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-black text-lg">
          <li><Link to="/" className="hover:underline cursor-pointer">Home</Link></li>
          <li><Link to="/aboutus" className="hover:underline cursor-pointer">About</Link></li>
          <li><Link to="/contactus" className="hover:underline cursor-pointer">Contact us</Link></li>
          <li><Link to="/faq" className="hover:underline cursor-pointer">FAQs</Link></li>
          {/* <li><Link to="/wasteform" className="hover:underline cursor-pointer">Waste</Link></li> */}
          {/* <li><Link to="/producerform" className="hover:underline cursor-pointer">Producerform</Link></li> */}
          {/* <li><Link to="/admin" className="hover:underline cursor-pointer">Admin</Link></li> */}
        </ul>

        {/* Login and Signup Buttons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-green-600">
            <Link to="/login">Login</Link>
            
          </button>
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600">
          <Link to="/signup">Sign Up</Link>
            
          </button>
        </div>

        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden flex mt-2">
          <button className="text-white text-lg">☰</button>
        </div>
      </div>
    </nav>
  );
};
