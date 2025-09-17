import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SimpleHeader = () => {
  return (
    <header className="bg-[#293751] text-white shadow-md flex flex-wrap flex-col lg:flex-row justify-between items-center pl-14 pr-14 pt-1 pb-1 rounded-b-lg w-full mb-6">
      {/* Left side: Location and Phone */}
      <div className="flex flex-wrap md:flex-row md:space-x-6 justify-center items-center">
        {/* Location */}
        <div className="flex items-center space-x-2">
          <Link to="/reservation" className="text-sm mb-2 md:mt-2">
            Near Kigali Mosque, 84 KN 74 St, Kigali, Rwanda
          </Link>
        </div>
        <span className="hidden md:inline">|</span>
        {/* Phone */}
        <div className="flex gap-2 justify-center items-center ml-4">
          <a href="tel:+250788495535" className="text-sm mb-2 md:mt-2">
            +250 788 495 535
          </a>
        </div>
      </div>

      {/* Right side: Social Media */}
      <div className="flex flex-wrap md:flex-row space-x-6 items-center">
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://x.com/RANIConstruction" className="text-white">
            <FaTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/RANIConstruction"
            className="text-white"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/rani-construction"
            className="text-white"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/@RANIConstruction"
            className="text-white"
          >
            <FaYoutube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
