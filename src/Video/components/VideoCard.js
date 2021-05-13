import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./VideoCard.css";

function VideoCard({ videoInfo }) {
  const {
    image,
    title,
    views,
    timestamp,
    channel,
    gif,
    avatar_img,
  } = videoInfo;
  return (
    <div className="video-card pointer-cursor">
      <img className="video-card__thumbnail static" src={image} alt={title} />
      <img className="video-card__thumbnail active" src={gif} alt={title} />
      <div className="video-card__info">
        <Avatar alt={title} src={avatar_img} className="avatar" />
        <div className="video-card__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
        <span className="video-card__option dropdown">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          <div class="dropdown-content">
            <a href="#">Save to Watch Later</a>
            <a href="#">Save to playlist</a>
            <a href="#">Share</a>
            <a href="#">Save to liked one</a>
          </div>
        </span>
      </div>
    </div>
  );
}

export default VideoCard;
