import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SearchBar from "./Search-bar";
import brandicon from "../assets/brand-icon.svg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

//   Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    console.log("handlescroll effect called!")
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen size changes to prevent menu staying open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    console.log("handleResize effect called!")
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-2xl" : "bg-white"
    } 2xl:text-xl`}>
      {/* <div className="container mx-2 px-2 w-full"> */}
        <div className="flex justify-evenly items-center h-16 space-x-7 w-full s:mx-1 sm:mx-3">
          {/* Logo */}
          <div className="flex items-center mr-8">
            <img 
              className="h-12 w-auto 2xl:h-15" 
              src={brandicon}
              alt="Brand Logo" 
            />
          </div>
          <div className="md:hidden">
          <SearchBar placeholder="Search for jobs..." />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 2xl:space-x-12">
            <div className="flex items-center space-x-6 2xl:space-x-10">
              <a href="#" className="text-gray-700 hover:text-purple-800 hover:border-b-2 hover:border-purple-800 transition-colors">
                Jobs
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-800 hover:border-b-2 hover:border-purple-800 transition-colors">
                Companies
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-800 hover:border-b-2 hover:border-purple-800 transition-colors">
                Services
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <SearchBar placeholder="Search for jobs..." />
              
              <button className="px-4 py-2 text-purple-800 font-semibold rounded-full border border-purple-800 hover:bg-gray-100 transition-colors">
                Login
              </button>
              
              <button className="px-4 py-2 text-white font-semibold bg-orange-600 rounded-full hover:bg-orange-500 transition-colors">
                Register
              </button>
              
              <div className="border-l border-gray-300 pl-4">
                <button className="text-gray-600 hover:text-purple-800 hover:border-b-2 hover:border-purple-800 transition-colors">
                  For Employers
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Jobs</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Companies</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Services</a>
            <div className="flex flex-col space-y-2 p-3">
              <button className="w-full px-4 py-2 text-purple-800 font-semibold rounded-full border border-purple-800 hover:bg-gray-100">
                Login
              </button>
              <button className="w-full px-4 py-2 text-white font-semibold bg-orange-600 rounded-full hover:bg-orange-500">
                Register
              </button>
              <button className="w-full px-4 py-2 text-gray-600 hover:text-purple-800">
                For Employers
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;