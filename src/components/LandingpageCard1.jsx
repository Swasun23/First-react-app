import PropTypes from 'prop-types';

const LandingpageCard1 = ({ img,title, description, height, hoverEnabled }) => {
  return (
    <div className={` border-gray-400  shadow-lg p-4 ${height ? `h-${height}` : 'h-70'} w-90 rounded-2xl 
                      ${hoverEnabled ? 'hover:shadow-2xl hover:scale-105 hover:bg-purple-800 hover:text-white transition-transform duration-300' : ''}`} >
      <img className='h-8' src={img} alt={title} />
      <h2 className='font-bold mt-6'>{title}</h2>
      <p className='whitespace-pre-wrap  '>{description}</p>
    </div>
  );
};

LandingpageCard1.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.string,
  hoverEnabled: PropTypes.bool,
};

export default LandingpageCard1;