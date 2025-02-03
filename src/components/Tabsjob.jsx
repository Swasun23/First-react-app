import { useState } from "react";
import PropTypes from 'prop-types';
import parse from "html-react-parser";

const Tabsjob = ({ jobdscrp, jobreq }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", tabname: "Job Description" },
    { id: "tab2", tabname: "Job Requirement" }
  ];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <nav className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
            }`}
          >
            {tab.tabname}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className=" mt-2 transition-transform duration-1000 p-2 font-light">
        {activeTab === "tab1" && parse(jobdscrp)}
        {activeTab === "tab2" && parse(jobreq) }
      </div>
    </div>
  );
};

Tabsjob.propTypes = {
    jobdscrp : PropTypes.string.isRequired,
    jobreq : PropTypes.string.isRequired
}

export default Tabsjob;
