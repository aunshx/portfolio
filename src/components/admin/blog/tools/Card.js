import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Type from "./Type";
import Feeling from "./Feeling";

const Article = ({
  title,
  imageUrl,
  author,
  createdAt,
  description,
  link,
  type,
  feeling,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [borderColor, setColorBorder] = useState('grey')

  useEffect(() => {
    if(type === 'life') {
        setColorBorder("#097ade");
    }
    if(type === 'ideas') {
        setColorBorder("#dede09");
    }
    if(type === 'plans') {
        setColorBorder("#18d100");
    }
    if(type === 'feelings') {
        setColorBorder("#f00a19");
    }
  }, [type])

  return (
    <Link to={link} target={"_blank"} rel='noreferrer nofollow'>
      <div
        className='normal-card'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && <div className='ribbon'>Check it out!</div>}
        <div
          className='image'
          style={{ borderBottom: `1px solid ${borderColor}` }}
        >
          <img src={imageUrl} alt='' />
        </div>
        <div className='title flex_middle'>{title}</div>
        <div className='description'>
          {description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </div>
        <div className='flex_middle'>
          <div className='metadata' style={{ width: "95%" }}>
            <div className='flex_left'>
              <Type type={type} />
            </div>
            <div className='flex_left'>
              <Feeling feeling={feeling} />
            </div>
            <div className='author flex_middle'>By {author}</div>
            <div className='time flex_right'>{createdAt}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Article;
