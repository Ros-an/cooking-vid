import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import "./VideoCard.css";

function VideoCard({ videoInfo }) {
  const { id, image, title, views, timestamp, channel, gif, avatar_img } =
    videoInfo;
  return (
    <div className="video-card pointer-cursor" key={id}>
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
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          <div className="dropdown-content">
            <Link to="#">Save to Watch Later</Link>
            <Link to="#">Save to playlist</Link>
            <Link to="#">Share</Link>
            <Link to="#">Save to liked one</Link>
          </div>
        </span>
      </div>
    </div>
  );
}

export default VideoCard;
