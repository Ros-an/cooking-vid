import React from "react";
import { usePlayList } from "../../ContextAPI/playlist-context";

function DropDownList() {
  const { dispatchPlayList } = usePlayList();
  return (
    <span className="video-card__option dropdown">
      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
      <div className="dropdown-content">
        <p onClick={() => dispatchPlayList({ type: "MODAL_CONTROL" })}>
          Save to playlist
        </p>
        <p>Save to watch Later</p>
        <p>Share</p>
        <p>Save to liked one</p>
      </div>
    </span>
  );
}

export default DropDownList;
