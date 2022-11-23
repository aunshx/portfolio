import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const actions = [
  {
    icon: "M",
    name: "Medium Profile",
    link: "https://aunsh.medium.com",
  },
  {
    icon: <LinkedInIcon />,
    name: "Linkedin Profile",
    link: "https://www.linkedin.com/in/aunsh",
  },
  {
    icon: <GitHubIcon />,
    name: "Github Profile",
    link: "https://www.github.com/aunshx",
  },
];

const SpeedDialMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const goToLink = (e, link) => {
    e.preventDefault()
    setOpen(false)
    window.open(link, '_blank')
  }

  return (
    <SpeedDial
      ariaLabel='SpeedDial controlled open example'
      icon={<AccountCircleIcon />}
      sx={{
        "& .MuiFab-primary": {
          backgroundColor: "rgb(0, 145, 255)",
          color: "white",
          width: 50,
          height: 50,
          "& .MuiSpeedDialIcon-icon": { fontSize: 25 },
          "&:hover": { backgroundColor: "rgb(105, 182, 242)" },
          margin: "0 0em 0 0.8em",
        },
      }}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={(e) => goToLink(e, action.link)}
          sx={{
            "& .MuiFab-primary": {
              "& .MuiSpeedDialIcon-icon": { fontSize: 300 },
            },
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default SpeedDialMenu;
