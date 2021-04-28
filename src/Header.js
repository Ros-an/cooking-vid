import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <button className="header__logo">
        <span>
          C<span className="ooking">ooking</span> Vid
        </span>
        <PlayCircleFilledIcon style={{ fontSize: "1.5rem" }} />
      </button>
      <div className="search-section">
        <input type="text" />
        <button className="search-icon">
          <SearchIcon />
        </button>
      </div>
      <p className="login">Login</p>
    </div>
  );
}

export default Header;
