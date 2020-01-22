import React from "react";
import { GiZeusSword, GiRosaShield, GiHealthNormal } from "react-icons/gi";

const DDIcon = GiZeusSword;
const TANKIcon = GiRosaShield;
const HEALIcon = GiHealthNormal;

const getRoleIcon = (role: string) => {
  switch (role) {
    case "dd":
      return <DDIcon />;

    case "tank":
      return <TANKIcon />;

    case "heal":
      return <HEALIcon />;
  }
};

export { DDIcon, TANKIcon, HEALIcon, getRoleIcon };
export { FiSettings as SettingsIcon } from "react-icons/fi";
export { FiSearch as SearchIcon } from "react-icons/fi";
export { FiUsers as PlayersIcons } from "react-icons/fi";
