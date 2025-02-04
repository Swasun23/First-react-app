import Filterdock from "../components/Filterdock";
import Jobcard from "../components/Job-card";
import Navbar from "../components/Navbar";
import BottomDrawer from "../components/BottomDrawer";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import filterData from "../components/filter_data";

const Mainpage = () => {
  const [selectedItems, setSelectedItems] = useState(
    filterData.reduce((acc, filter) => {
      filter.items.forEach((item) => {
        acc[item.id] = false;
      });
      return acc;
    }, {})
  );
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    fetch("./src/assets/data/jobs.json")
      .then((response) => response.json())
      .then((data) => {
        // Apply filtering logic
        console.log("Selected Items:", JSON.stringify(selectedItems, null, 2));
        const filteredJobs = data.filter((job) => {
          return Object.keys(selectedItems).every((filterKey) => {
            if (!selectedItems[filterKey]) return true; // If filter is not selected, include all
            
            // Check if job's filterable list contains the selected filter id
            return job.filterable.includes(filterKey);
          });
        });
  
         setJobsData(filteredJobs);
      })
      .catch((error) => console.error("Error fetching jobs data:", error));
  }, [selectedItems]); // Runs whenever selectedItems changes
  


  
  return (
    <div className="bg-gray-100 overflow-hidden lg:text-md">
      <div className="flex flex-col">
        <Navbar />
        <main className="flex flex-row relative justify-around sm:justify-between xl:justify-evenly mx-4 mt-25 ">
          <div className="lg:hidden">
            <BottomDrawer
              setSelectedItems={setSelectedItems}
              selectedItems={selectedItems}
            />
          </div>
          <div className="hidden lg:block">
            <Filterdock selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
          </div>
          {jobsData.length === 0 ? (
                    <div className="text-center mt-10">
                        <p>No jobs available. Please adjust your filters.</p>
                    </div>
                ) : (
                    <ul className="grid xl:grid-cols-3 gap-1 s:grid-cols-2 ml-3 s:justify-between justify-items-start content-start">
                        {jobsData.map((job, index) => (
                            <li key={index}>
                                <Jobcard
                                    companyLogo={job.companyLogo}
                                    companyName={job.companyName}
                                    jobLocation={job.jobLocation}
                                    jobRole={job.jobRole}
                                    description={job.description}
                                    nPositions={job.nPositions}
                                    roleType={job.roleType}
                                    pay={job.pay}
                                />
                            </li>
                        ))}
                    </ul>
                )}
        </main>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
