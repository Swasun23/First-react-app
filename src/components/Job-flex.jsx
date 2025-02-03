// import { useState, useEffect } from 'react';

// const JobFlex = () => {
//   const [position1, setPosition1] = useState(0);
//   const [direction1, setDirection1] = useState(-1); 
//   const [position2, setPosition2] = useState(0);
//   const [direction2, setDirection2] = useState(1); 
//   const jobs = {
//     job1: { title: "Software Engineer" },
//     job2: { title: "Product Manager" },
//     job3: { title: "UX Designer" },
//     job4: { title: "Data Scientist" },
//     job5: { title: "DevOps Engineer" },
//     job6: { title: "Cloud Architect" },
//     job7: { title: "Security Analyst" },
//     job8: { title: "Network Engineer" },
//     job9: { title: "Database Administrator" },
//   };

//   useEffect(() => {
//     const animate = () => {
//       setPosition1(prev => {
//         // If reaching the limits (-50 or 0), change direction
//         if (direction1 < 0 && prev <= -30) {
//           setDirection1(1);  // Start moving right
//           return prev + direction1;
//         }
//         if (direction1 > 0 && prev >= 30) {
//           setDirection1(-1); // Start moving left
//           return prev + direction1;
//         }
//         // Continue moving in current direction
//         return prev + direction1;
//       });
//     };

//     const interval = setInterval(animate, 500);
//     return () => clearInterval(interval);
//   }, [position1, direction1]);

//   useEffect(() => {
//     const animatePosition2 = () => {
//       setPosition2((prev) => {
//         if (direction2 < 0 && prev <= -30) {
//           setDirection2(1);
//           return prev + direction2;
//         }
//         if (direction2 > 0 && prev >= 30) {
//           setDirection2(-1);
//           return prev + direction2;
//         }
//         return prev + direction2;
//       });
//     };

//     const interval2 = setInterval(animatePosition2, 500);
//     return () => clearInterval(interval2);
//   }, [position2, direction2]);

//   return (
//     <div className="flex flex-col mt-20 mb-20 overflow-hidden">
//       {/* First row - scrolling left */}
//       <div className="relative h-24">
//         <div 
//           className="absolute flex justify-center transition-transform duration-1000 ease-linear"
//           style={{ transform: `translateX(${position1}%)` }}
//         >
//           {Object.keys(jobs).map((key) => (
//             <button
//               key={key}
//               className="text-black border-1 border-gray-500 h-12 w-60 hover:text-purple-800 
//                          hover:border-purple-800 rounded-full m-5 whitespace-nowrap"
//             >
//               {jobs[key].title}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Second row - scrolling right */}
//       <div className="relative h-24">
//         <div 
//           className="absolute flex justify-center transition-transform duration-1000 ease-linear"
//           style={{ transform: `translateX(${position2}%)` }}
//         >
//           {Object.keys(jobs).map((key) => (
//             <button
//               key={`${key}-dup`}
//               className="text-black border-1 border-gray-500 h-12 w-60 hover:text-purple-800 
//                          hover:border-purple-800 rounded-full m-5 whitespace-nowrap"
//             >
//               {jobs[key].title}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobFlex;


const JobFlex = () => {
  const jobs = [
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Data Scientist",
    "DevOps Engineer",
    "Cloud Architect",
    "Security Analyst",
    "Network Engineer",
    "Database Administrator",
  ];

  return (
    <div className="flex flex-col mt-20 mb-20 overflow-hidden">
      {/* First row - Left to Right */}
      <div className="relative h-24 w-full overflow-hidden">
        <div className="absolute flex justify-center animate-scroll-left whitespace-nowrap">
          {jobs.concat(jobs).map((job, index) => (
            <button
              key={`job1-${index}`}
              className="text-black border-1 border-gray-500 h-12 w-60 hover:text-purple-800 
//                          hover:border-purple-800 rounded-full m-5 whitespace-nowrap"
            >
              {job}
            </button>
          ))}
        </div>
      </div>

      {/* Second row - Right to Left */}
      <div className="relative h-24 w-full overflow-hidden">
        <div className="absolute flex justify-center animate-scroll-right whitespace-nowrap">
          {jobs.concat(jobs).map((job, index) => (
            <button
              key={`job2-${index}`}
              className="text-black border-1 border-gray-500 h-12 w-60 hover:text-purple-800 
//                          hover:border-purple-800 rounded-full m-5 whitespace-nowrap"
            >
              {job}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobFlex;