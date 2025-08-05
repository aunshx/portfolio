import { faVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import Card from "./tools/Card";

import { RESEARCH_LIST, VERTICAL_MARGIN } from "../../../resources/constants";
import Title from "../../shared/layout/Title";

const Research = ({
}) => {
  return (
    <div className='w-full'>
      <Title icon={<FontAwesomeIcon icon={faVial} />} title={'Research'} />
      <div className={`flex justify-center w-full flex-wrap gap-16 items-stretch ${VERTICAL_MARGIN}`}>
        {RESEARCH_LIST.map(({ title, link, description, tags, achievements }, index) => (
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