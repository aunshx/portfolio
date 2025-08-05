import { faSchoolFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { EDUCATION_LIST } from "../../../resources/constants";
import sppuLogo from '../../../resources/images/education/sppuLogo.png';
import ucDavisLogo from '../../../resources/images/education/ucDavisLogo.png';

const universityColors = {
  UCD: 'from-blue-500 to-cyan-500',
  SPPU: 'from-orange-500 to-red-500'
};
const Card = ({
  data: { title, degree, start, end, abbr, gpa, extra },
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const logo = abbr === "UCD" ? ucDavisLogo : sppuLogo;


  return (
    <div
      className='glass-card hover:scale-105 transition-all duration-500 flex gap-x-6 py-6 px-6 max-w-md w-full rounded-xl relative overflow-hidden group cursor-pointer md:flex-col md:items-center md:gap-4'
    >
      <div className="relative flex-shrink-0 group/logo">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center w-16 h-16 bg-gray-800/50 rounded-lg">
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
          </div>
        )}
        <div className="w-16 h-16 glass-button rounded-lg p-2">
          <div className={`absolute inset-0 bg-gradient-to-br ${universityColors[abbr]} opacity-0 group-hover/logo:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
          <img
            src={logo}
            alt={title}
            className={`w-full h-full object-contain relative z-10 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 items-start justify-between md:items-center flex-1 relative h-full">
        <div className="flex flex-col md:items-center gap-y-1">
          <div className='text-md font-bold group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 md:text-center'>
            {title}
          </div>
          <div className='text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 font-medium md:text-center'>
            {degree}
          </div>
        </div>
        <div className='glass-button px-3 py-1 rounded-lg text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 italic'>
          {start} to {end}
        </div>
      </div>

      <div className="absolute top-3 right-3 w-2 h-2 bg-white/20 rounded-full twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-sm"></div>
    </div>
  );
};

const Education = () => {
  return (
    <div className='grid grid-cols-[20%_80%] gap-8 w-full lg:grid-cols-1 items-start education'>
      <div className=" p-6 rounded-xl group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 rounded-xl"></div>
        <div className="relative z-10 flex items-center gap-4 lg:justify-center">
          <div className="text-brand text-2xl">
            <FontAwesomeIcon icon={faSchoolFlag} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Education
            </h2>
          </div>
        </div>

        <div className="absolute top-2 right-4 w-2 h-2 bg-white/20 rounded-full twinkle opacity-0 group-hover:opacity-100"></div>
        <div className="absolute bottom-3 left-8 w-1 h-1 bg-brand/40 rounded-full twinkle opacity-0 group-hover:opacity-100" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className='grid grid-cols-2 gap-8 w-[90%] lg:w-full lg:grid-cols-1'>
        {EDUCATION_LIST.map((data, index) => {
          return (
            <div key={index} className="flex items-stretch justify-center">
              <Card data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;