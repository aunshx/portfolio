import PropTypes from "prop-types";
import { connect } from "react-redux";

import { faExternalLinkAlt, faEye, faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

const Stats = ({ type, value }) => {
  const icon = type === 'views' ? faEye : faHandsClapping;
  const tooltipTitle = type === 'views' ? 'Views' : 'Upvotes';
  const colorClass = type === 'views' ? 'text-blue-400' : 'text-green-400';

  return (
    <Tooltip title={tooltipTitle} arrow placement="top">
      <div
        title={tooltipTitle}
        className="glass-button flex items-center justify-center gap-x-2 text-sm px-3 py-1 rounded-lg transition-all duration-300 hover:scale-105 group"
      >
        <FontAwesomeIcon
          icon={icon}
          className={`${colorClass} group-hover:drop-shadow-lg transition-all duration-300`}
          style={{
            filter: 'drop-shadow(0 0 4px currentColor)'
          }}
        />
        <div className="text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
          {value}
        </div>
      </div>
    </Tooltip>
  );
};

const BlogCard = ({
  title,
  stats,
  link,
  description,
  technology,
}) => {
  return (
    <a
      href={link}
      target={"_blank"}
      rel='noreferrer nofollow'
      className="block group w-full h-full"

    >
      <div
        className="glass-card max-w-md min-h-[280px] flex flex-col items-start justify-between px-8 py-6 w-full text-white gap-y-4 md:gap-y-5 hover:scale-105 transition-all duration-500 relative overflow-hidden group cursor-pointer h-full"
      >
        <div className=" w-full">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-lg font-bold tracking-tight group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight">
              {title}
            </h3>
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="text-brand w-4 h-4"
                style={{
                  filter: 'drop-shadow(0 0 6px currentColor)'
                }}
              />
            </div>
          </div>
          <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
            {description}
          </div>
        </div>
        <div className=" w-full">
          <div className="flex flex-wrap gap-2">
            {technology.length > 0 &&
              technology.map((val, index) => (
                <div
                  className="glass-button text-gray-400 text-xs rounded-full px-3 py-1 min-w-16 text-center hover:text-white hover:bg-white/10 transition-all duration-300 group/tag relative overflow-hidden"
                  key={index}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <span className="">{val}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className=" w-full">
          <div className="flex gap-x-3 justify-start">
            {Object.entries(stats).map(([k, value], index) => (
              <Stats key={index} type={k} value={value} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technology: PropTypes.array.isRequired,
  delay: PropTypes.number,
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(BlogCard);