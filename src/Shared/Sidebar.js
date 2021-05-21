import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ViewListIcon from "@material-ui/icons/ViewList";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-firstchild">
        <NavLink to="/" end className="sidebar__item">
          <HomeIcon />
          <p>Home</p>
        </NavLink>
        <NavLink to="/playlist" className="sidebar__item">
          <ViewListIcon />
          <p>PlayList</p>
        </NavLink>
        <NavLink to="/watchlater" className="sidebar__item">
          <WatchLaterIcon />
          <p>Watch Later</p>
        </NavLink>
        <NavLink to="/history" className="sidebar__item">
          <HistoryIcon />
          <p>History</p>
        </NavLink>{" "}
        <NavLink to="/likedone" className="sidebar__item">
          <ThumbUpIcon />
          <p>Liked One</p>
        </NavLink>
      </div>
      <div className="socialmedia">
        <GitHubIcon className="socialmedia-icon" />
        <LinkedInIcon className="socialmedia-icon" />
      </div>
    </div>
  );
}

export default Sidebar;
