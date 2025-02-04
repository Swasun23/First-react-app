import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">JobPortal</h2>
          <p className="text-gray-400 mt-2">
            Your one-stop destination for job seekers and employers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-purple-500">Home</a></li>
            <li><a href="#" className="hover:text-purple-500">Jobs</a></li>
            <li><a href="#" className="hover:text-purple-500">About Us</a></li>
            <li><a href="#" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-purple-500"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}
