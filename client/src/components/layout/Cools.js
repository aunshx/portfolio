import React, { useEffect } from "react";
import TagCloud from "react3dtagcloud_withclick";
 
const Cools = ({ radius }) => {
  
    let tagName = [
      { id: "java", name: "Figma" },
      { id: "javscript", name: "javscript" },
      { id: "C", name: "CSS" },
      { id: "C++", name: "Html" },
      { id: "fe", name: "Node" },
      { id: "React", name: "React" },
      { id: "Vue", name: "express" },
      { id: "redux", name: "postgres" },
      { id: "writing", name: "mongodb" },
      { id: "programmer", name: "algo" },
      { id: "programme", name: "es5/es6" }
    ];
    tagName = [...tagName, ...tagName, ...tagName];
 
    return (
      <div
        style={{
          width: "300px",
          height: "300px",
          padding: "100px",
          color: "black",
        }}
      >
        <TagCloud tagName={tagName} radius={radius}></TagCloud>
      </div>
    );
}

export default Cools