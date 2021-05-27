import React from "react";
import {
  VideoCardTypeList,
  SectionHeading,
  NoItem,
} from "../Shared/MiniComponent";
import { useLikeHistoryWatchLater } from "../ContextAPI/likeHistoryWatchLater-context";

function LikedOne() {
  const { likedOne, dispatchLikeHistoryWatchLater } =
    useLikeHistoryWatchLater();
  const remove = "REMOVE_FROM_LIKEDVID";
  return (
    <div className="section-padding">
      <SectionHeading headingName={"Liked Videos"} />
      {!likedOne.length && (
        <NoItem heading={"No video liked yet"} buttonText={"Like some"} />
      )}
      {likedOne && (
        <div className="video-list-container">
          {likedOne.map((vid) => (
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

export default LikedOne;
