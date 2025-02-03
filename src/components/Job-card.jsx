import PropTypes from 'prop-types';
import Likeheart from './Like-heart';

const Jobcard = ({ companyLogo,companyName, jobLocation, jobRole, description, nPositions, roleType, pay }) => {
  return (
    <>
      <div className="flex flex-col justify-start h-80 w-80 p-6 bg-white rounded-lg hover:shadow-lg hover:bg-purple-800 hover:text-white duration-200 group">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-start ">
            <img
              className="h-8 w-8 rounded-full mr-5 mb-5"
              src={companyLogo}
              alt="logo"
            />
            <p className="mb-5">
              <span className="font-extrabold">{companyName}</span>
              <br />
              <span>{jobLocation}</span>
            </p>
          </div>
          <Likeheart />
        </div>
        <div>
          <h2 className="font-extrabold">{jobRole}</h2>
          <p className="whitespace-pre-wrap line-clamp-3 overflow-hidden">
            {description}
          </p>
        </div>
        <div>
          <ul className="flex flex-row justify-start">
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
                className={`${bg} ${textColor} font-semibold m-1 p-1 text-center rounded-xl text-xs group-hover:bg-purple-900 group-hover:text-white duration-200`}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-row justify-start mt-4'>
          <button className='bg-purple-800 text-white font-semibold rounded-lg p-2 hover:cursor-pointer group-hover:bg-purple-900 '>Apply Now</button>
          <button className='bg-white-800 text-purple-800 font-semibold rounded-lg border-1 border-purple-800 p-2 ml-4 hover:cursor-pointer group-hover:bg-purple-900 group-hover:text-white'>View Details</button>
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