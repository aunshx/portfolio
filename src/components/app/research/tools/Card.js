import PropTypes from "prop-types";
import { connect } from "react-redux";
import useSound from "use-sound";

import { faExternalLinkAlt, faFlask, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swoosh from "../../../../resources/sounds/resumeSwoosh.mp3";

const ResearchCard = ({
  title,
  link,
  description,
  tags,
  achievements,
  settings: { sound }
}) => {
  const [playOn] = useSound(swoosh, { volume: 0.2 });

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
            <h3 className="text-lg font-bold tracking-tight group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight flex items-center gap-3">
              <FontAwesomeIcon
                icon={faFlask}
                className="text-brand w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: 'drop-shadow(0 0 4px currentColor)'
                }}
              />
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

        <div className="w-full flex md:flex-col md:gap-8 md:items-center">
          <div className="flex flex-wrap gap-2 text-sm items-center justify-start w-full">
            {tags.length > 0 &&
              tags.map((element, index) => (
                <div key={index} className='glass-button text-gray-400 px-3 py-1 rounded-full text-xs hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-x-1 group/tag relative overflow-hidden'>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <span className="">{element}</span>
                  {index !== tags.length - 1 && (
                    <div className="w-1 h-1 bg-gray-500 rounded-full "></div>
                  )}
                </div>
              ))}
          </div>
          {achievements.length > 0 && (
            <div className="w-full flex items-center justify-end md:justify-start">
              <div className='flex flex-wrap gap-1 text-xs'>
                {achievements.map((val, index) => (
                  <div
                    className='glass-button px-3 py-2 rounded-lg border border-violet-500/30 flex items-center justify-center gap-x-2 min-w-[120px] group/achievement relative overflow-hidden'
                    key={index}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 group-hover/achievement:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-violet-400  group-hover/achievement:scale-110 group-hover/achievement:text-violet-300 transition-all duration-300"
                      style={{
                        filter: 'drop-shadow(0 0 4px currentColor)'
                      }}
                    />
                    <span className=" text-gray-300 group-hover/achievement:text-white transition-colors duration-300 font-medium">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

ResearchCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  achievements: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(ResearchCard);