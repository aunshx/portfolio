import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from "react";
import useWindow from "react-window-size-simple";

import npmLogo from '../../../resources/images/npm/npmlogo.png';

import Card from "./tools/Card";

import Title from "../../common/layout/Title";

const NpmLogo = () => {
  return (
    <div style={{ marginTop: "0.2em" }}>
      <img src={npmLogo} alt='npm logo' style={{ height: "20px" }} />
    </div>
  );
}

const Npm = ({
  innerRef,
}) => {
  const { width } = useWindow()

  return (
    <div className='app' ref={innerRef}>
      <div className='npm-packages'>
        <div style={{ marginBottom: "2em" }}>
          <Title icon={<NpmLogo />} title={"Packages"} />
        </div>
        <div className='body app'>
          <Card
            icon={
              <AspectRatioIcon
                style={
                  width < 510
                    ? { fontSize: 25, color: "orange" }
                    : { fontSize: 35, color: "orange" }
                }
              />
            }
            title={"Whatsapp React Component"}
            link={"https://www.npmjs.com/package/whatsapp-react-component"}
            description={
              "A package to send messages through Whatsapp directly through your React app."
            }
          />
          <Card
            icon={
              <WhatsAppIcon
                style={
                  width < 510
                    ? { fontSize: 25, color: "green" }
                    : { fontSize: 35, color: "green" }
                }
              />
            }
            title={"Window Size React"}
            link={"https://www.npmjs.com/package/react-window-size-simple"}
            description={
              "A simple package to get real time height and width of web-app window"
            }
          />
        </div>
        <div className='read-more flex_middle' style={{ marginTop: "3em" }}>
          <div className='ft-bold' style={{ marginLeft: "0.5em" }}>
            <a
              href='https://www.npmjs.com/~aunshx'
              rel='noreferrer nofollow'
              target='_blank'
            >
              NPM Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Npm
