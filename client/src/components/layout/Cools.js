import React from "react";
import TagCloud from "react3dtagcloud_withclick";
 
const Cools = () => {
  const handleClick = (tag) => {
    // alert(`id:${tag.id};name:${tag.name}`);
  }
 
    let tagName = [
      { id: "java", name: "java" },
      { id: "javscript", name: "javscript" },
      { id: "C", name: "CSS" },
      { id: "C++", name: "Html" },
      { id: "fe", name: "node" },
      { id: "React", name: "React" },
      { id: "Vue", name: "express" },
      { id: "redux", name: "postgres" },
      { id: "writing", name: "mongodb" },
      { id: "programmer", name: "dsa" },
      { id: "programme", name: "inspire" }
    ];
    tagName = [...tagName, ...tagName, ...tagName];
 
    return (
      <div
        style={{
          width: "300px",
          height: "300px",
          padding: "100px",
          color: 'black'
        }}
      >
        <TagCloud
          tagName={tagName}
          radius={200}
          onClick={handleClick}
        ></TagCloud>
      </div>
    );
}

export default Cools