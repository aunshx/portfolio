import { faSchoolFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import sppuLogo from '../../../resources/images/education/sppuLogo.png';
import ucDavisLogo from '../../../resources/images/education/ucDavisLogo.png';
import Title from "../../shared/layout/Title";
import { EDUCATION_LIST } from "../../../resources/constants";

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
        {EDUCATION_LIST.map((data, index) => {
          return <Card data={data} key={index} />
        })}
      </div>
    </div>
  );
};

export default Education;