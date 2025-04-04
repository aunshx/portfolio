import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVial } from "@fortawesome/free-solid-svg-icons";

import Card from "./tools/Card";

import Title from "../../shared/layout/Title";
import { VERTICAL_MARGIN } from "../../../resources/constants";

const projects = [
  {
    title: "ResView: A PBFT visualizer based on the ResilientDb blockchain fabric",
    description: "A novel PBFT graphical visualizer based on the ResilientDb sustainable blockchain fabric to simulate consensus protocol transactions",
    tags: ["Blockchain", "DDS", "D3.js"],
    achievements: [],
    link: "https://blog.resilientdb.com/2023/12/06/ResView.html"
  },
  {
    title: "5G Dual Band Pass Filter for Wi-Fi and WLAN Operations",
    description: "Project proposes a new generation of dual band pass 5G filter for Wi-Fi and WLAN operating t 2.45 GHz and 5.5 GHz.",
    tags: ["5G", "Sponsored", "Telecommunication"],
    achievements: ["Published", "Best Paper"],
    link: "https://drive.google.com/file/d/1vU5t8YAz7mKWWKG1-l77xMDisG6grjzA/view?usp=sharing"
  },
  {
    title: "Automated Steering Mechanism",
    description: "An autonomous steering mechanism that uses Sobel filters (OpenCV) to detect lanes and passes deviation data to steering in real-time.",
    tags: ["Image Processing", "ML", "Electronics"],
    achievements: ["Project Expo"],
    link: "https://drive.google.com/file/d/1ttdNB7z2pF7-3aN8B8jFnxNZ0vlveiLR/view?usp=sharing"
  },
  {
    title: "Industrial Processes Smart Safety System",
    description: "Designed and developed an smart industrial safety system with parameter logging and automated measures",
    tags: ["Mechatronics", "Processors", "Digital"],
    achievements: [],
    link: ""
  }
];

const Research = ({
}) => {
  return (
    <div className='w-full'>
      <Title icon={<FontAwesomeIcon icon={faVial} />} title={"Research"} />
      <div className={`flex justify-center w-full flex-wrap gap-16 items-center ${VERTICAL_MARGIN}`}>
        {projects.map(({ title, link, description, tags, achievements }, index) => (
          <div key={index}>
            <Card
              title={title}
              link={link}
              description={description}
              tags={tags}
              achievements={achievements}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Research.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Research);
