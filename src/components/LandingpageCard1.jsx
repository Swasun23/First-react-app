import PropTypes from 'prop-types';

const LandingpageCard1 = ({ img,title, description, hoverEnabled }) => {
  return (
    <div className={`border-gray-400 shadow-lg p-4 rounded-xl 
                      ${hoverEnabled ? 'hover:shadow-2xl hover:scale-105 hover:bg-purple-800 hover:text-white transition-transform duration-300' : ''} 
                      h-30 w-30 p-0.5 text-xs md:text-sm md:h-60 md:w-50 md:p-2 overflow-clip aspect-w-4 aspect-h-5`} >
      <img className='h-8' src={img} alt={title} />
      <h2 className='font-bold mt-3 md:mt-6'>{title}</h2>
      <p className='text-wrap'>{description}</p>
    </div>
  );
};

LandingpageCard1.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hoverEnabled: PropTypes.bool,
};

export default LandingpageCard1;