import "tailwindcss";
import JobFlex from "../components/Job-flex";
import LandingpageCard1 from "../components/LandingpageCard1";
import Jobcard from "../components/Job-card";

import playicon from "../assets/play-icon.svg";
import profileicon from "../assets/profile-icon.svg";
import briefcaseicon from "../assets/briefcase-icon.svg";
import brandLogo from "../assets/brand-icon.svg";
import lensicon from "../assets/lens-icon.svg";
import doumenticon from "../assets/document-icon.svg";
import adminicon from "../assets/admin-icon.svg";
import automobileicon from "../assets/automobile-icon.svg";
import constructionicon from "../assets/construction-icon.svg";
import designicon from "../assets/design-icon.svg";
import financeicon from "../assets/finance-icon.svg";
import marketingicon from "../assets/marketing-icon.svg";
import salesicon from "../assets/sales-icon.svg";
import logisticsicon from "../assets/logistics-icon.svg";

import googlelogo from "../assets/companies/google-logo.svg";
import amazonlogo from "../assets/companies/amazon-logo.svg";
import figmalogo from "../assets/companies/figma-logo.svg";
import eylogo from "../assets/companies/ey-logo.svg";
import netflixlogo from "../assets/companies/netflix-logo.svg";
import nvidialogo from "../assets/companies/nvidia-logo.svg";

import jobrecom from "../assets/images/job-recommendation.jpg";
import profilebld from "../assets/images/profile-building.jpg";
import crconsult from "../assets/images/consultation.jpg";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <main className="flex flex-col min-h-screen bg-gray-100 w-full max-w-[2560px] min-w-0 mx-auto overflow-hidden">
        <nav className="relative bg-white text-black p-4 flex justify-evenly md:justify-between items-center flex-grow ">
          <img src={brandLogo} className="h-8 md:h-10" alt="Brand Logo" />
          <ul className="flex justify-start space-x-1 ">
            <li className="hover:text-purple-800 p-1 mx-1 md:mx-3 lg:mx-5 cursor-pointer">
              Home
            </li>
            <li className="hover:text-purple-800 p-1 mx-1 md:mx-3 lg:mx-5 cursor-pointer">
              About
            </li>
            <li className="hover:text-purple-800 p-1 mx-1 md:mx-3 lg:mx-5 cursor-pointer">
              Jobs
            </li>
            <li className="hover:text-purple-800 p-1 mx-1 md:mx-3 lg:mx-5 cursor-pointer">
              Services
            </li>
            <li>
              <button className="bg-white border border-purple-800 hover:bg-purple-800 hover:text-white text-black font-bold py-1 px-1 md:mx-2 lg:mx-5 rounded-xl duration-200">
                Login
              </button>
            </li>
            <li>
              <button className="bg-white border border-purple-800 hover:bg-purple-800 hover:text-white text-black font-bold py-1 px-1 rounded-xl duration-200">
                Register
              </button>
            </li>
          </ul>
        </nav>
        <div className="mt-4 px-4">
          <p className="whitespace-pre-wrap text-center p-4">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
              Search, Apply & <br className="m-5" />
              Get your <span className="text-purple-800 ">Dream Job</span>
            </span>
            <br />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl mt-5 leading-normal">
              Start your hunt for the best career changing opportunities from
              here in your
              <br />
              selected areas conveniently and get hired quickly.
            </span>
          </p>
          <div className="flex flex-row justify-center items-center mt-5">
            <button className="bg-purple-800 hover:scale-97 transition-transform duration-200 text-white font-bold py-2 px-4 rounded-xl">
              Browse Jobs
            </button>
            <div className="flex justify-center pl-3">
              <button className="w-12 h-12 bg-purple-800 text-white font-bold py-2 px-4 rounded-full ml-4 hover:scale-97 transition-transform duration-200">
                <img src={playicon} className="h-6" alt="play icon" />
              </button>
              <span className="font-bold p-3">How it works?</span>
            </div>
          </div>
        </div>
        <div>
          {/* jobs banner here */}
          <JobFlex />
        </div>
        <div className="flex flex-col justify-center px-4">
          {/* process content here */}
          <p className="whitespace-pre-wrap text-center xs:mt-5 sm:mt-25 ">
            <span className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
              Get Hired in{" "}
              <span className="text-purple-800"> 4 Quick Easy Steps</span>
            </span>
            <br />
            <span className="text-10 xs:text-4 sm:text-6 md:text-8 mt-25 leading-tight font-normal font-sans-serif">
              The quickest most efficient way to get hired by the top firms
              working in your
              <br />
              career interested areas.
            </span>
          </p>
          <ul className="flex xs:flex-row justify-evenly flex-wrap items-center">
            <li className="mt-20">
              <LandingpageCard1
                img={profileicon}
                title="Sign Up"
                description="Create an account by entering your email and password. Confirm your password, verify your email, and complete your registration in minutes."
              />
            </li>
            <li>
              <LandingpageCard1
                img={lensicon}
                title="Search Job"
                description="Explore a vast array of job opportunities. Use filters and keywords to narrow down your search and find roles that match your skills."
              />
            </li>
            <li className="mt-20">
              <LandingpageCard1
                img={doumenticon}
                title="Upload CV/Resume"
                description="Easily upload your CV or resume to showcase your skills and experience. A well-crafted resume increases your chances of landing the perfect job."
              />
            </li>
            <li>
              <LandingpageCard1
                img={briefcaseicon}
                title="Get Job"
                description="Apply to jobs with a single click. Track your applications, attend interviews, and secure your ideal position quickly and efficiently."
              />
            </li>
          </ul>
        </div>
        <div className="xs:mt-10 sm:mt-20">
        <div className="flex flex-col justify-center px-4">
          <span className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-center">
            <span className="text-purple-800">Countless Career Options</span>{" "}
            Are Waiting
            <br />
            For You to Explore
          </span>
          <ul className="flex flex-row justify-evenly m-3 gap-1 xl:grid xl:grid-cols-4 xl:ml-65 xl:mr-65 flex-wrap">
            <li>
              <LandingpageCard1
                img={designicon}
                title="design"
                description="120+ openings"
                hoverEnabled={true}
              />
            </li>
            <li>
              <LandingpageCard1
                img={salesicon}
                title="Sales"
                description="120+ openings"
                hoverEnabled={true}
              />
            </li>
            <li>
              <LandingpageCard1
                img={marketingicon}
                title="Marketing"
                description="120+ openings"
                hoverEnabled={true}
              />
            </li>
            <li>
              <LandingpageCard1
                img={financeicon}
                title="Finance"
                description="120+ openings"
                hoverEnabled={true}
              />
            </li>
            <li>
              <LandingpageCard1
                img={automobileicon}
                title="Automobile"
                description="120+ openings"
                hoverEnabled={true}
              />
            </li>
            <li>
              <LandingpageCard1
                img={logisticsicon}
                title="Logistics/Delivery"
                description="120+ openings"
                hoverEnabled={true}
              />
            </li>
            <li>
              <LandingpageCard1
                img={adminicon}
                title="Admin"
                description="120+ openings"
                hoverEnabled={true}
              />
            </li>
            <li>
              <LandingpageCard1
                img={constructionicon}
                title="Construction"
                description="120+ openings"
                hoverEnabled={true}
              />
            </li>
          </ul>
          <button className="m-auto bg-purple-800 hover:scale-97 transition-transform duration-200 text-white font-bold py-2 px-4 rounded-xl">
            View All Categories
          </button>
        </div>
        </div>
        <div className="flex flex-col justify-start m-5">
          <div className="whitespace-pre-wrap xl:ml-55">
            <span className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-start">
              <span className="text-purple-800">Latest and Top</span> Job
              Openings
              <br />
            </span>
            <span>
              Discover the latest job openings from the giant firms which you
              might want to apply
              <br />
              and take a chance to get hired by the top fortune companies
            </span>
          </div>
          <div>
            <div className="flex flex-col">
            <div className="relative flex flex-row justify-end mt-4 ">
              <button className=" bg-gray-100  hover:cursor-pointer transition-transform duration-200 text-purple-800 font-bold py-2 px-4 rounded-xl xl:mr-145">
                View All jobs
              </button>
            </div>
            <ul className="relative flex flex-row justify-center lg:justify-center m-auto gap-0.5 md:gap-1 lg:gap-1.5 flex-wrap xl:grid xl:grid-cols-4 xl:justify-items-start xl:gap-5 ">
              <li>
                <Jobcard
                  companyLogo={googlelogo}
                  companyName="Google"
                  jobLocation="USA"
                  jobRole="Senior Product Designer"
                  description="Design, develop, and maintain software applications. Write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions. Stay updated with industry trends and continuously improve skills."
                  nPositions="2"
                  roleType="Full Time"
                  pay={120000}
                />
              </li>
              <li>
                <Jobcard
                  companyLogo={amazonlogo}
                  companyName="Amazon"
                  jobLocation="USA"
                  jobRole="Senior Product Designer"
                  description="Design, develop, and maintain software applications. Write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions. Stay updated with industry trends and continuously improve skills."
                  nPositions="2"
                  roleType="Full Time"
                  pay={120000}
                />
              </li>
              <li>
                <Jobcard
                  companyLogo={eylogo}
                  companyName="EY"
                  jobLocation="USA"
                  jobRole="Senior Product Designer"
                  description="Design, develop, and maintain software applications. Write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions. Stay updated with industry trends and continuously improve skills."
                  nPositions="2"
                  roleType="Full Time"
                  pay={120000}
                />
              </li>
              <li>
                <Jobcard
                  companyLogo={figmalogo}
                  companyName="Figma"
                  jobLocation="USA"
                  jobRole="Senior Product Designer"
                  description="Design, develop, and maintain software applications. Write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions. Stay updated with industry trends and continuously improve skills."
                  nPositions="2"
                  roleType="Full Time"
                  pay={120000}
                />
              </li>
              <li>
                <Jobcard
                  companyLogo={nvidialogo}
                  companyName="Nvidia"
                  jobLocation="USA"
                  jobRole="Senior Product Designer"
                  description="Design, develop, and maintain software applications. Write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions. Stay updated with industry trends and continuously improve skills."
                  nPositions="2"
                  roleType="Full Time"
                  pay={120000}
                />
              </li>
              <li>
                <Jobcard
                  companyLogo={netflixlogo}
                  companyName="Netflix"
                  jobLocation="USA"
                  jobRole="Senior Product Designer"
                  description="Design, develop, and maintain software applications. Write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions. Stay updated with industry trends and continuously improve skills."
                  nPositions="2"
                  roleType="Full Time"
                  pay={120000}
                />
              </li>
              <li>
                <Jobcard
                  companyLogo={nvidialogo}
                  companyName="Nvidia"
                  jobLocation="USA"
                  jobRole="Senior Product Designer"
                  description="Design, develop, and maintain software applications. Write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions. Stay updated with industry trends and continuously improve skills."
                  nPositions="2"
                  roleType="Full Time"
                  pay={120000}
                />
              </li>
              <li>
                <Jobcard
                  companyLogo={netflixlogo}
                  companyName="Netflix"
                  jobLocation="USA"
                  jobRole="Senior Product Designer"
                  description="Design, develop, and maintain software applications. Write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions. Stay updated with industry trends and continuously improve skills."
                  nPositions="2"
                  roleType="Full Time"
                  pay={120000}
                />
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start m-5 xl:m-15">
          <p className="whitespace-pre-wrap">
            <span className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-start">
              What We Offer
            </span>
            <br />
            <span>
              Job Portal is the right platform for you to get various job
              recommendations, get career
              <br />
              counselling and find your ideal job profile.
            </span>
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 justify-items-start gap-1">
            <li className="flex flex-col justify-start">
              <img
                src={jobrecom}
                alt="job recommendation"
                className="h-45 md:h-75 lg:h-95 rounded-xl"
              />
              <div className="flex flex-row mt-4">
                <h2 className="font-bold text-2xl lg:text-3xl pr-3">01</h2>
                <div className="font-bold border-l-purple-800 border-l-4 pl-3 text-xl lg:text-2xl">
                  {" "}
                  Job Recommendation
                </div>
              </div>
            </li>
            <li className="flex flex-col justify-center">
              <img
                src={profilebld}
                alt="job recommendation"
                className="h-45 md:h-75 lg:h-95 rounded-xl"
              />
              <div className="flex flex-row mt-4">
                <h2 className="font-bold text-2xl lg:text-3xl pr-3">02</h2>
                <div className="font-bold border-l-purple-800 border-l-4 pl-3 text-xl lg:text-2xl">
                  {" "}
                  Create & Build Portfolio
                </div>
              </div>
            </li>
            <li className="flex flex-col justify-start">
              <img
                src={crconsult}
                alt="job recommendation"
                className="h-45 md:h-75 lg:h-95 rounded-xl"
              />
              <div className="flex flex-row mt-4">
                <h2 className="font-bold text-2xl lg:text-3xl pr-3">03</h2>
                <div className="font-bold border-l-purple-800 border-l-4 pl-3 text-xl lg:text-2xl">
                  {" "}
                  Career Consultation
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-items-center mt-10 px-4">
          <p className="whitespace-pre-wrap text-center">
            <span className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
              Testimonials
            </span>
            <br />
            <span>
              Now, let's hear from our happy customers who have successfully{" "}
              <br />
              found their dream job
            </span>
          </p>
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
