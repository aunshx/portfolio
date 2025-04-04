import { faSchoolFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import sppuLogo from '../../../resources/images/education/sppuLogo.png';
import ucDavisLogo from '../../../resources/images/education/ucDavisLogo.png';
import Title from '../../common/layout/Title';

const data = [
  {
    title: "University of California, Davis",
    degree: "MS. Electrical and Computer Engineering",
    start: "Sep 2023",
    end: "Sep 2025",
    logo: ucDavisLogo,
    abbr: "UCD",
  },
  {
    title: "University of Pune",
    degree: "BE. Electronics and Telecommunication",
    start: "June 2016",
    end: "May 2020",
    logo: sppuLogo,
    abbr: "SPPU",
    // gpa: '3.94/4.00',
    extra: 'Student Council | Top 10 of the class in all years'
  },
];

const Card = ({
  data: { title, degree, start, end, abbr, gpa, extra },
}) => {
  const logo = abbr === "UCD" ? ucDavisLogo : sppuLogo;
  return (
    <div className='element hover:scale-105 transition flex gap-x-4 py-2 px-4'>
      <img src={logo} alt={title} />
      <div className="flex flex-col gap-y-1">
        <div className='text-lg'>{title}</div>
        <div className='text-sm'>{degree}</div>
          <div className='text-sm italic'>
            {start} to {end}
          </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className='grid grid-cols-[20%_80%] gap-5 w-full lg:grid-cols-1 items-center education'>
      <Title
        icon={<FontAwesomeIcon icon={faSchoolFlag} />}
        title={"Education"}
      />
        <div className='flex gap-x-8'>
          {data.map((data, index) => {
            return <Card data={data} key={index} />
          })}
        </div>
    </div>
  );
};

export default Education;