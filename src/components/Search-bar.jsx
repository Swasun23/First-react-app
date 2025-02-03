import { useState } from "react";
import { Search, X } from "lucide-react";
import PropTypes from "prop-types";

const SearchBar = ({ placeholder = "Search for jobs..." }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative flex flex-row h-10 mt-2">
      <button className="hover:cursor-pointer">
        <Search className="absolute left-3 top-2 text-gray-500 size-5 hover:text-purple-800" />
      </button>

      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200"
      />

      {/* Clear Button (Right) */}
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
        >
          <X className="size-5" />
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
