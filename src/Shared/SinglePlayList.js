import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import playlistImage from "../asset/online-live-video-marketing-concept_12892-37.jpg";
import { Link } from "react-router-dom";

function SinglePlayList({ data }) {
  const { id, name, videoList } = data;
  return (
    <div key={id} className="playlist-card">
      <Link to={`/playlist/${name}/${id}`}>
        <img src={playlistImage} alt={name} />
      </Link>
      <article>
        <p className="playlist-card__heading">{name}</p>
        <p className="playlist-card__count">
          No. of videos : {videoList.length}
        </p>
        <DeleteIcon className="delete-icon" />
      </article>
    </div>
  );
}

export default SinglePlayList;
