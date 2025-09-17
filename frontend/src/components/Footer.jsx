import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaInfoCircle,
  FaCog,
  FaProjectDiagram,
  FaNewspaper,
  FaFileContract,
  FaShieldAlt,
  FaQuestionCircle,
  FaLaptop,
  FaGamepad
} from "react-icons/fa";
import "../assets/css/ContactUs.css";
import Logo from "../assets/kalinga_logo.png";
import { Phone } from "lucide-react";

const Footer = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusedInput = () => {
    setIsFocused(true);
  };

  const handleBlurredInput = () => {
    setIsFocused(false);
  };

  return (
    <footer className="bg-[#293751] text-white py-16 px-6 sm:px-16 rounded-t-xl shadow-md">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Logo Section */}
        <div className="w-full lg:w-2/5">
          <img src={Logo} alt="Logo" className="object-cover w-32 rounded-sm -mt-10" />
      <p className="text-white font-semibold mt-4">
  Thank you for visiting Rina Construction Ltd! <br />
  Stay connected and follow us on social media for updates, project highlights, and expert tips.
</p>

       
        </div>

        {/* Navigation Sections */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center text-gray-300 hover:text-[#47B2E4] transition"
                >
                  <FaHome className="mr-2 text-sm" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center text-gray-300 hover:text-[#47B2E4] transition"
                >
                  <FaInfoCircle className="mr-2 text-sm" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="flex items-center text-gray-300 hover:text-[#47B2E4] transition"
                >
                  <FaCog className="mr-2 text-sm" />
                  Services
                </Link>
              </li>
            
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Explore</h3>
            <ul className="space-y-3">
         
              <li>
                <Link
                  to="/blog"
                  className="flex items-center text-gray-300 hover:text-[#47B2E4] transition"
                >
                  <FaNewspaper className="mr-2 text-sm" />
                  News & Updates
                </Link>
              </li>
             
           <li>
                <Link
                  to="/faq"
                  className="flex items-center text-gray-300 hover:text-[#47B2E4] transition"
                >
                  <FaQuestionCircle className="mr-2 text-sm" />
                  FAQ
                </Link>
              </li>
               <li>
                <Link
                  to="/history"
                  className="flex items-center text-gray-300 hover:text-[#47B2E4] transition"
                >
                  <FaQuestionCircle className="mr-2 text-sm" />
                  History
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Legal & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="flex items-center text-gray-300 hover:text-[#47B2E4] transition"
                >
                  <FaFileContract className="mr-2 text-sm" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="flex items-center text-gray-300 hover:text-[#47B2E4] transition"
                >
                  <FaShieldAlt className="mr-2 text-sm" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/copyright"
                  className="flex items-center text-gray-300 hover:text-[#47B2E4] transition"
                >
                  <FaQuestionCircle className="mr-2 text-sm" />
                  copyright information
                </Link>
              </li>
            </ul>

        
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-600 pt-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Rina Construction Ltd . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;