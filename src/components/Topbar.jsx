import SearchBar from "./Search-bar";
import brandicon from "../assets/brand-icon.svg";

const Topbar = () => {
  return (
    <div className="flex flex-row justify-center font-sans gap-x-4 bg-white">
      <div className="flex flex-row justify-start ">
        <img className="h-25 mr-6" src={brandicon} alt="brand-logo" />
        <div>
          <ul className="flex flex-row justify-end">
            <li className="ml-5 mr-5 mt-10">
              <a
                className="hover:border-b-2 hover:border-b-purple-800"
                href="#"
              >
                Jobs
              </a>
            </li>
            <li className="ml-5 mr-5 mt-10">
              <a
                className="hover:border-b-2 hover:border-b-purple-800"
                href="#"
              >
                Companies
              </a>
            </li>
            <li className="ml-5 mr-5 mt-10">
              <a
                className="hover:border-b-2 hover:border-b-purple-800"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="ml-5 mr-5 mt-6 hover:cursor-pointer">
              <SearchBar placeholder="Search for jobs..." />
            </li>
            <li>
              <button className=" hover:bg-gray-200 text-purple-800 font-bold py-2 px-4 pr-4 pl-4 ml-5 h-10 w-25 rounded-full border-1 border-purple-800 mt-8 hover:cursor-pointer">
                Login
              </button>
            </li>
            <li>
              <button className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 pr-4 pl-4 ml-2 h-10 w-25 rounded-full border-1 mt-8 hover:cursor-pointer">
                Register
              </button>
            </li>
            <li>
              <div className="border-l-gray-500 border-l-1 pl-2 text-gray-600 text-semibold mt-10 ml-3">
                <button className=" hover:cursor-pointer hover:border-b-2 hover:border-b-purple-800">
                  {" "}
                  For Employers
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
