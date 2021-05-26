import React from "react";
import {
  VideoCardTypeList,
  SectionHeading,
  NoItem,
} from "../Shared/MiniComponent";
import { useLikeHistoryWatchLater } from "../ContextAPI/likeHistoryWatchLater-context";

function WatchLater() {
  const { watchLater } = useLikeHistoryWatchLater();
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
