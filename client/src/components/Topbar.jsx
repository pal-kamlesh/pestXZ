import { FaFacebook, FaSearch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";

export default function Topbar() {
  return (
    <div className="w-full bg-yellow-400 text-black py-2">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Contact Info */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Santacruz (W), Mumbai - 400054
          </a>
          <a href="#" className="flex items-center">
            <i className="fas fa-phone-alt mr-2"></i>
            6138 6600
          </a>
          <a href="#" className="flex items-center">
            <i className="fas fa-envelope mr-2"></i>
            epcorn@yahoo.com
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-black rounded-full overflow-hidden">
          <input
            type="search"
            placeholder="Search Here"
            className="px-4 py-1 text-black focus:outline-none"
          />
          <button className="px-3 py-1 bg-black text-yellow-400">
            <FaSearch />
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-lg">
          <a href="#" className="hover:text-gray-700">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-gray-700">
            <RiInstagramFill />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
