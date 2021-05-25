import React from "react";
import "./MiniComponent.css";
import { Link } from "react-router-dom";

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

function VideoCardTypeList({ image, title, views, timestamp, channel }) {
  return (
    <article className="playlist-video-card">
      <img src={image} alt={title} />
      <div className="details">
        <h3>{title}</h3>
        <p>Channel : {channel}</p>
        <p>{views}</p>
        <p>{timestamp}</p>
        <Link to="#">remove</Link>
      </div>
    </article>
  );
}
export { NoItem, SectionHeading, VideoCardTypeList };
