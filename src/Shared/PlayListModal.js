import React from "react";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import { usePlayList } from "../ContextAPI/playlist-context";
import AddToPlayListBox from "./AddToPlayListBox";
import "./PlayListModal.css";

function PlayListModal() {
  const { playListModalState, playListInputBox, dispatchPlayList } =
    usePlayList();

  return (
    <div
      className={`${
        playListModalState ? "playlist-modal show-modal" : "playlist-modal"
      }`}
    >
      <div className="playlist-modal__body">
        <div className="playlist-modal__content">
          {!playListInputBox && (
            <div className="add-to-playlist">
              <div className="add-to-playlist-text">Save video to...</div>
              <div
                className="add-to-playlist-icon pointer-cursor"
                onClick={() => {
                  dispatchPlayList({ type: "INPUT_BOX_STATE" });
                }}
              >
                <AddIcon />
                <span> NEW PLAYLIST</span>
              </div>
            </div>
          )}
          {playListInputBox && <AddToPlayListBox />}

          <div className="list">Here will be the list</div>
          <div
            className="done-btn pointer-cursor"
            onClick={() => dispatchPlayList({ type: "MODAL_CONTROL" })}
          >
            <DoneIcon />
            <span> Done</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayListModal;
