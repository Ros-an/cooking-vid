import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import StarsIcon from "@material-ui/icons/Stars";

import "./Sidebar.css";

const sidebarTitle = [
  { id: 1, Icon: HomeIcon, title: "Home" },
  { id: 6, Icon: StarsIcon, title: "Recommended" },
  { id: 2, Icon: VideoLibraryIcon, title: "Library" },
  { id: 3, Icon: HistoryIcon, title: "History" },
  { id: 4, Icon: WatchLaterIcon, title: "Watch Later" },
  { id: 5, Icon: ThumbUpAltOutlinedIcon, title: "Liked One" },
];
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-firstchild">
        {sidebarTitle.map((sideItem) => {
          const { Icon, title } = sideItem;
          return (
            <div className="sidebar__item">
              {<Icon />}
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      <div className="socialmedia">
        <GitHubIcon className="socialmedia-icon" />
        <LinkedInIcon className="socialmedia-icon" />
      </div>
    </div>
  );
}

export default Sidebar;
