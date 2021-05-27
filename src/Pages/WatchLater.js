import React from "react";
import {
  VideoCardTypeList,
  SectionHeading,
  NoItem,
} from "../Shared/MiniComponent";
import { useLikeHistoryWatchLater } from "../ContextAPI/likeHistoryWatchLater-context";

function WatchLater() {
  const { watchLater, dispatchLikeHistoryWatchLater } =
    useLikeHistoryWatchLater();
  const remove = "REMOVE_FROM_WATCHLATER";
  return (
    <div className="section-padding">
      <SectionHeading headingName={"Watch Later"} />
      {!watchLater.length && (
        <NoItem heading={"No video to watch later"} buttonText={"Add Some"} />
      )}
      {watchLater && (
        <div className="video-list-container">
          {watchLater.map((vid) => (
            <VideoCardTypeList
              key={vid.id}
              {...vid}
              dispatch={dispatchLikeHistoryWatchLater}
              remove={remove}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchLater;
