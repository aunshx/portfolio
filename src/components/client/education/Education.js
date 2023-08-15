import { faSchoolFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import sppuLogo from '../../../resources/images/education/sppuLogo.png';
import ucDavisLogo from '../../../resources/images/education/ucDavisLogo.png';
import Title from '../../common/layout/Title';

const data = [
  {
    title: "University of California, Davis",
    field: "Electrical and Computer Engineering",
    degree: "MS",
    start: "Sep 23",
    end: "May 25",
    logo: ucDavisLogo,
    abbr: "UCD",
  },
  {
    title: "University of Pune",
    field: "Electronics and Telecommunication",
    degree: "BE",
    start: "Jun 16",
    end: "May 20",
    logo: sppuLogo,
    abbr: "SPPU",
    gpa: '3.94/4.00',
    extra: 'Student Council | Top 10 of the class in all years'
  },
];

const Element = ({
  data: { title, field, degree, start, end, abbr, gpa, extra },
}) => {
  const logo = abbr === "UCD" ? ucDavisLogo : sppuLogo;
  return (
    <div className='element'>
      <div className='image'>
        <img src={logo} alt={title} />
      </div>
      <div className='info app'>
        <div className='flex_middle'>
          <div className='title'>{title}</div>
        </div>
        <div className='flex_middle'>
          <div className='degree'>{degree}.</div>
          <div className='degree'>{field}</div>
        </div>
        <div className='flex_middle'>
          <div className='date'>
            {start} to {end}
          </div>
          <div>&#8226;</div>
          <div className='date' style={{ marginLeft: "10px" }}>
            GPA: {gpa ?? "N/A"}
          </div>
        </div>
        <div className='flex_middle date'>{extra ?? "To be updated"}</div>
      </div>
    </div>
  );
};

const Education = ({ innerRef }) => {
  return (
    <div className='app education' ref={innerRef}>
      <div className='about' style={{ justifyContent: "center" }}>
        <div style={{ marginBottom: "3em" }}>
          <Title
            icon={<FontAwesomeIcon icon={faSchoolFlag} />}
            title={"Education"}
          />
        </div>
        <div className='app' style={{ rowGap: "50px" }}>
          {data.map((data, index) => {
            return <Element data={data} key={index}></Element>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;