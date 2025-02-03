import Topbar from "../components/Topbar";
import Tabsjob from "../components/Tabsjob";
import googleicon from "../assets/companies/google-logo.svg";
import homeicon from "../assets/home-icon.svg";
import caricon from "../assets/car-icon.svg";
import coffeeicon from "../assets/coffee-icon.svg";
import jobs from "../components/jobsdata";
import Jobcard from "../components/Job-card";
import parse from "html-react-parser";

import profileicon from "../assets/profile-icon.svg"
import locicon from "../assets/location-icon.svg"
import thumbsupicon from "../assets/thumbs-up-icon.svg"
import thumbsdownicon from "../assets/thumbs-down-icon.svg"

const displayedJobs = jobs.slice(0, 6);

const job = {
  companyLogo: googleicon,
  jobRole: "Software Engineer",
  nPositions: "3 Positions",
  roletype: "Full Time",
  salary: "10 Lakhs",
  Onsite: "WFO",
  experience: "2 Years",
  jobRequirements: `
        <p><strong>Job Requirements</strong></p>
        <ul>
            <li>Bachelor's degree in Computer Science, Information Technology, or a related field.</li>
            <li>3+ years of professional experience in software development.</li>
            <li>Proficiency in JavaScript, React, and Node.js.</li>
            <li>Strong problem-solving skills and the ability to think critically.</li>
            <li>Experience with front-end technologies such as HTML, CSS, and JavaScript frameworks.</li>
            <li>Familiarity with version control systems like Git.</li>
            <li>Understanding of RESTful APIs and web services.</li>
            <li>Knowledge of database systems such as MySQL, PostgreSQL, or MongoDB.</li>
            <li>Excellent debugging and optimization skills.</li>
            <li>Ability to write clean, maintainable, and efficient code.</li>
            <li>Strong communication and collaboration skills.</li>
            <li>Experience with Agile development methodologies.</li>
            <li>Knowledge of cloud platforms such as AWS or Azure is a plus.</li>
            <li>Familiarity with CI/CD pipelines and DevOps practices is a plus.</li>
        </ul>
    `,
  jobdscrp: `
        <p><strong>Role &amp; responsibilities</strong></p>
        <ul>
            <li>Develop and maintain web applications using JavaScript, React, and Node.js.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Write clean, maintainable, and efficient code.</li>
            <li>Participate in code reviews and provide constructive feedback to peers.</li>
            <li>Troubleshoot and debug applications to ensure optimal performance.</li>
            <li>Stay up-to-date with emerging technologies and industry trends.</li>
            <li>Mentor junior developers and contribute to team knowledge sharing.</li>
            <li>Assist in the design and architecture of new software solutions.</li>
        </ul>
        <p><strong>Preferred candidate profile</strong></p>
        <ul>
            <li>Experience in full-cycle software development.</li>
            <li>Excellent problem-solving and analytical skills.</li>
            <li>Strong communication and teamwork abilities.</li>
            <li>Ability to work in a fast-paced and dynamic environment.</li>
            <li>Experience with Agile development methodologies.</li>
            <li>Knowledge of cloud platforms such as AWS or Azure.</li>
            <li>Familiarity with CI/CD pipelines and DevOps practices.</li>
        </ul>
    `,
  abtcmpny: `
        <p>Google is a global technology leader focused on improving the ways people connect with information. Our mission is to organize the world's information and make it universally accessible and useful. We are committed to fostering an inclusive and diverse workplace where everyone can thrive.</p>
        <p>At Google, we work on cutting-edge technologies and innovative solutions that impact millions of users worldwide. Our team is composed of talented individuals who are passionate about making a difference and pushing the boundaries of what is possible.</p>
        <p>We offer a dynamic and collaborative work environment, opportunities for professional growth, and a range of benefits to support our employees' well-being and work-life balance.</p>
    `,
  n_emps: "10000+ Employees",
  hq: "Sunnyvale,CA",
  reviews: [
    {
      review: "Great place to work",
      isgood: true,
    },
    {
      review: "Needs better management",
      isgood: false,
    },
    {
      review: "Excellent benefits",
      isgood: true,
    },
    {
      review: "Long working hours",
      isgood: false,
    },
    {
      review: "Supportive team",
      isgood: true,
    },
  ],
  totalApplicants: 120,
  benefits: [
    { perk: "Cafeteria", icon: coffeeicon },
    { perk: "WFO", icon: homeicon },
    { perk: "Transportation", icon: caricon },
  ],
};

const Jobinfopage = () => {
  return (
    <>
    <div className="bg-purple-100">
      <Topbar />
      <main className="mt-5">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-cente m-5 ">
            <div className="flex flex-col items-start bg-white rounded-2xl m-5 p-10">
              {/* the main job box */}
              <h className="flex flex-row justify-start">
                <img
                  className="h-15 w-15 rounded-2xl mt-4 mb-4 ml-4 mr-8"
                  src={googleicon}
                  alt="logo"
                />
                <div className="m-4">
                  <h className="font-extrabold text-2xl">{job.jobRole}</h>
                  <ul className="flex flex-row justify-start mt-4">
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
                        className={`${bg} ${textColor} font-semibold m-1 p-1 text-center rounded-xl text-xs group-hover:bg-purple-900 group-hover:text-white duration-200`}
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="bg-purple-800 text-white rounded-xl p-2 h-10 mt-5 ml-60 mr-5 hover:cursor-pointer hover:scale-95">
                  Apply Now
                </button>
              </h>
              <body>
                <div>
                  <Tabsjob
                    jobdscrp={job.jobdscrp}
                    jobreq={job.jobRequirements}
                  />
                </div>
              </body>
            </div>
            <ul className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 ml-3'>
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
          <div className='mt-5'>
            <div className="flex flex-col gap-y-4 mt-4 bg-white rounded-2xl w-90 p-8">
                <h className='font-extrabold'>About Company</h>
                <div>{parse(job.abtcmpny)}</div>
                <div className="flex flex-row items-center justify-between">
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
    </div>
    </>
  );
};

export default Jobinfopage;
