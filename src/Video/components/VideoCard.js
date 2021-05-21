import React from "react";
import Avatar from "@material-ui/core/Avatar";
import DropDownList from "./DropDownList";

import PlayListModal from "../../Shared/PlayListModal";

import "./VideoCard.css";

function VideoCard({ videoInfo }) {
  const { id, image, title, views, timestamp, channel, gif, avatar_img } =
    videoInfo;
  return (
    <>
      <PlayListModal />
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
          <DropDownList />
        </div>
      </div>
    </>
  );
}

export default VideoCard;
