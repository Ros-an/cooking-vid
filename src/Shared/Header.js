import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../ContextAPI/auth-context";
import "./Header.css";

function Header() {
  const { authPage, slideOpen, slideClose } = useAuthContext();
  return (
    <div className="header">
      <span
        className={`menu-icon ${
          authPage ? "rotate-clock" : "rotate-anticlock"
        }`}
        onClick={() => (authPage ? slideClose() : slideOpen())}
      >
        <MenuIcon />
      </span>
      <NavLink to="/" onClick={() => authPage && slideClose()}>
        <button className="header__logo pointer-cursor">
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
          <span className="login-item__text">Login</span>
          <span className="login-item__logo">
            <AccountCircleRoundedIcon style={{ fontSize: "1.75rem" }} />
          </span>
        </p>
      </NavLink>
    </div>
  );
}

export default Header;
