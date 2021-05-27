import React from "react";
import "./MiniComponent.css";

function NoItem({ heading, buttonText }) {
  return (
    <article className="no-item">
      <p>{heading}</p>
      <button>{buttonText}</button>
    </article>
  );
}
function SectionHeading({ headingName }) {
  return <h2 className="section-heading">{headingName}</h2>;
}

function VideoCardTypeList({
  id,
  image,
  title,
  views,
  timestamp,
  channel,
  dispatch,
  remove,
  playListId,
}) {
  console.log(remove);
  return (
    <article className="playlist-video-card">
      <img src={image} alt={title} />
      <div className="details">
        <h3>{title}</h3>
        <p>Channel : {channel}</p>
        <p>{views}</p>
        <p>{timestamp}</p>
        <span
          className="pointer-cursor"
          onClick={() =>
            dispatch({
              type: remove,
              payload: { id, playListId },
            })
          }
        >
          remove
        </span>
      </div>
    </article>
  );
}
export { NoItem, SectionHeading, VideoCardTypeList };
