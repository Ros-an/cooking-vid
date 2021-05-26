import React from "react";
import { usePlayList } from "../../ContextAPI/playlist-context";
import { useLikeHistoryWatchLater } from "../../ContextAPI/likeHistoryWatchLater-context";

function DropDownList({ videoInfo }) {
  const { dispatchPlayList } = usePlayList();
  const { dispatchLikeHistoryWatchLater } = useLikeHistoryWatchLater();
  return (
    <span className="video-card__option dropdown pointer-cursor">
      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
      <div className="dropdown-content">
        <p
          onClick={() =>
            dispatchPlayList({ type: "MODAL_CONTROL", payload: videoInfo })
          }
        >
          Save to playlist
        </p>
        <p
          onClick={() =>
            dispatchLikeHistoryWatchLater({
              type: "ADD_TO_WATCHLATER",
              payload: videoInfo,
            })
          }
        >
          Save to watch Later
        </p>
      </div>
    </span>
  );
}

export default DropDownList;
