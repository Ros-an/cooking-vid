import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./VideoCard.css";

const videoData = {
  title: "How to become a web dev in 10hr | 2021",
  views: "25K Views",
  timestamp: "5 hours ago",
  channel: "Roshan Kr. Mahato",
  image:
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
};

function VideoCard() {
  const { image, title, views, timestamp, channel } = videoData;
  return (
    <div className="video-card">
      <img className="video-card__thumbnail" src={image} alt={title} />
      <div className="video-card__info">
        <Avatar alt={title} src={image} />
        <div className="video-card__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}•{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
