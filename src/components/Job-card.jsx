import PropTypes from 'prop-types';
import Likeheart from './Like-heart';

const Jobcard = ({ companyLogo,companyName, jobLocation, jobRole, description, nPositions, roleType, pay }) => {
  return (
    <>
      <div className="flex flex-col justify-start p-2 w-45 md:w-70 bg-white rounded-lg hover:shadow-lg hover:bg-purple-800 hover:text-white duration-200 group">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-start ">
            <img
              className="h-5 w-5 rounded-full mr-1 mb-1"
              src={companyLogo}
              alt="logo"
            />
            <p className="mb-1">
              <span className="font-extrabold">{companyName}</span>
              <br />
              <span>{jobLocation}</span>
            </p>
          </div>
          <Likeheart />
        </div>
        <div>
          <h2 className="font-extrabold">{jobRole}</h2>
          <p
            className="hidden md:block whitespace-pre-wrap line-clamp-3 overflow-hidden 
               max-w-[300px] max-h-[100px]"
          >
            {description}
          </p>
        </div>
        <div>
          <ul className="flex flex-row justify-start flex-wrap">
            {[
              {
                text: `${nPositions} Positions`,
                bg: "bg-blue-200",
                textColor: "text-blue-700",
              },
              {
                text: roleType,
                bg: "bg-orange-200",
                textColor: "text-orange-700",
              },
              { text: pay, bg: "bg-teal-200", textColor: "text-teal-700" },
            ].map(({ text, bg, textColor }) => (
              <li
                key={text}
                className={`${bg} ${textColor} font-semibold m-1 p-1 text-center rounded-xl text-xs md:m-2 md:p-2 md:text-md group-hover:bg-purple-900 group-hover:text-white duration-200`}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-start mt-1 md:ml-2">
          <button className="bg-purple-800 text-white font-semibold rounded-lg p-0.5 hover:cursor-pointer group-hover:bg-purple-900 text-xs md:text-md">
            Apply Now
          </button>
          <button className="bg-white-800 text-purple-800 font-semibold rounded-lg border-2 border-purple-800 p-1 ml-1 md:p-2 md:ml-2 hover:cursor-pointer group-hover:bg-purple-900 group-hover:text-white text-xs md:text-md">
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

Jobcard.propTypes = {
    companyLogo : PropTypes.string.isRequired,
    companyName : PropTypes.string.isRequired,
    jobLocation : PropTypes.string.isRequired,
    jobRole     : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    nPositions  : PropTypes.string.isRequired,
    roleType    : PropTypes.string.isRequired, 
    pay         : PropTypes.number.isRequired,
};

export default Jobcard;