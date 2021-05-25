import React from "react";
import {
  VideoCardTypeList,
  SectionHeading,
  NoItem,
} from "../Shared/MiniComponent";
import { useWatchLater } from "../ContextAPI/watchlater-context";

function WatchLater() {
  const { watchLater } = useWatchLater();
  return (
    <div className="section-padding">
      <SectionHeading headingName={"Watch Later"} />
      {watchLater && (
        <div className="video-list-container">
          {watchLater.map((vid) => (
            <VideoCardTypeList key={vid.id} {...vid} />
          ))}
        </div>
      )}
      {!watchLater.length && (
        <NoItem heading={"No video to watch later"} buttonText={"Add Some"} />
      )}
    </div>
  );
}

export default WatchLater;
