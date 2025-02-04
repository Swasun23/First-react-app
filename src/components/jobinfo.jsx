import googleicon from "../assets/companies/google-logo.svg";
import homeicon from "../assets/home-icon.svg";
import caricon from "../assets/car-icon.svg";
import coffeeicon from "../assets/coffee-icon.svg";

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

export default job;