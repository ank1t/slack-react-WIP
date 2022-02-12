import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
import { AccessTimeOutlined } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar for logged in user */}
        <Avatar className="header__avatar" alt="Ankit Singh" src="" />
        <AccessTimeOutlined />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search slack" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
