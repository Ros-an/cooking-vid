import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <button className="header__logo">
          <span className="logoText">
            C<span className="ooking">ooking</span> Vid
          </span>
          <PlayCircleFilledIcon style={{ fontSize: "1.5rem" }} />
        </button>
      </NavLink>
      <div className="search-section">
        <input type="text" placeholder="Search" />
        <button className="search-icon">
          <SearchIcon className="search-icon" />
        </button>
      </div>
      <NavLink to="/authenticate">
        <p className="login">
          {" "}
          <span className="login-item__text">Login/SignUp</span>
          <span className="login-item__logo">
            <AccountCircleRoundedIcon style={{ fontSize: "1.75rem" }} />
          </span>
        </p>
      </NavLink>
    </div>
  );
}

export default Header;
