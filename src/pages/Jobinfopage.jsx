import Tabsjob from "../components/Tabsjob";
import jobs from "../components/jobsdata";
import Jobcard from "../components/Job-card";
import parse from "html-react-parser";
import googleicon from "../assets/companies/google-logo.svg"

import profileicon from "../assets/profile-icon.svg"
import locicon from "../assets/location-icon.svg"
import thumbsupicon from "../assets/thumbs-up-icon.svg"
import thumbsdownicon from "../assets/thumbs-down-icon.svg"
import Navbar from "../components/Navbar";
import job from "../components/jobinfo";
import Footer from "../components/Footer";

const displayedJobs = jobs.slice(0, 6);

const Jobinfopage = () => {
  
  return (
    <>
    <div className="bg-purple-100 overflow-hidden min-h-screen">
      <Navbar />
      <main className="mt-15">
        <div className="flex flex-col justify-center lg:flex-row lg:justify-center lg:flex-grow">
          <div className="flex flex-col items-stretch m-5 ">
            <div className="flex flex-col items-start bg-white rounded-xl m-1 p-1 md:p-2 flex-grow 2xl:w-250 2xl:text-xl 2xl:p-4">
              {/* the main job box */}
              <h1 className="flex flex-row justify-start 2xl:justify-center flex-grow">
                <img
                  className="h-8 w-8 rounded-xl m-1 md:h-12 md:w-12 md:m-2"
                  src={googleicon}
                  alt="logo"
                />
                <div className="m-2">
                  <h1 className="font-extrabold text-lg xl:text-2xl xl:mx-3">{job.jobRole}</h1>
                  <ul className="flex flex-row justify-start mt-1">
                    {[
                      {
                        text: `${job.nPositions}`,
                        bg: "bg-blue-200",
                        textColor: "text-blue-700",
                      },
                      {
                        text: job.roletype,
                        bg: "bg-orange-200",
                        textColor: "text-orange-700",
                      },
                      {
                        text: job.salary,
                        bg: "bg-teal-200",
                        textColor: "text-teal-700",
                      },
                      {
                        text: job.Onsite,
                        bg: "bg-red-200",
                        textColor: "text-red-700",
                      },
                      {
                        text: job.experience,
                        bg: "bg-green-200",
                        textColor: "text-green-700",
                      },
                    ].map(({ text, bg, textColor }) => (
                      <li
                        key={text}
                        className={`${bg} ${textColor} font-semibold m-1 p-1 text-center rounded-xl text-xs group-hover:bg-purple-900 group-hover:text-white duration-200 2xl:text-lg 2xl:mx-3`}
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="relative bg-purple-800 text-white rounded-xl p-1  mt-1 mx-1 md:ml-45 md:text-lg xl:ml-65 mb-15 text-xs hover:cursor-pointer hover:scale-95 ">
                  Apply Now
                </button>
              </h1>
              <body>
                <div>
                  <Tabsjob
                    jobdscrp={job.jobdscrp}
                    jobreq={job.jobRequirements}
                  />
                </div>
              </body>
            </div>
            {/* <ul className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 ml-3'> */}
            <div className="flex flex-col">
            <h className='relative w-sm bg-white my-2 rounded-sm font-extrabold p-4'>Similar jobs</h>
            <ul className='flex flex-row justify-start xs:max-lg:overflow-x-auto xs:max-lgwhitespace-nowrap gap-1 w-full lg:grid lg:grid-cols-2 lg:gap-2 lg:ml-1 xl:grid-cols-3 xl:gap-1 xl:justify-items-center xl:mt-5'>
                {displayedJobs.map((job, index) => (
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
            </div>
          </div>
          <div className='m-1 md:p-3 lg:w-95 2xl:w-175 2xl:m-2'>
            <div className="flex flex-col gap-y-2 mt-1 bg-white rounded-xl p-2 2xl:text-xl">
                <h1 className='font-extrabold'>About Company</h1>
                <div>{parse(job.abtcmpny)}</div>
                <div className="flex flex-row items-center justify-between md:justify-start">
                    <img src={profileicon} className="h-8"/>
                    <p className="text-s font-extralight">{job.n_emps}</p>
                    <img src={locicon} className="h-8"/>
                    <p className="text-s font-extralight">{job.hq}</p>
                </div>
                <div>
                    <p className="font-extrabold">Review</p>
                    <ul className="flex flex-col justify-start">
                        {job.reviews.map((review, index) => (
                            <li key={index} className="flex flex-row items-center mt-2">
                                <img
                                    src={review.isgood ? thumbsupicon : thumbsdownicon}
                                    className="h-6 mr-2"
                                    alt={review.isgood ? "Thumbs Up" : "Thumbs Down"}
                                />
                                <p className="text-s font-extralight">{review.review}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="font-bold">Benefits and Perks</p>
                    <ul className="flex flex-row justify-evenly mt-2">
                        {job.benefits.map((benefit) =>(
                            <li className='flex flex-col items-center'key={benefit.perk}>
                            <img src={benefit.icon} className="h-6 mr-2"/>
                            <p className="font-light">{benefit.perk}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bottom-0 mt-5">
      <Footer/>
      </div>
      
    </div>
    </>
  );
};

export default Jobinfopage;
