import React, { useRef, useEffect, useState } from "react";
import { usePlayList } from "../ContextAPI/playlist-context";

const customStyleInput = {
  outlineColor: "var(--vid-primary)",
};
function AddToPlayListBox() {
  const [playListName, setPlayListName] = useState("");
  const { dispatchPlayList } = usePlayList();
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const playListNamingHandler = () => {
    dispatchPlayList({
      type: "SAVE_NEW_PLAYLIST",
      payload: playListName,
    });
  };
  return (
    <div className="playlist-modal__input">
      <input
        ref={inputRef}
        type="text"
        value={playListName}
        placeholder="ENTER NAME"
        style={customStyleInput}
        onChange={(e) => setPlayListName(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && playListNamingHandler()}
      />
      <button
        onClick={() => {
          playListNamingHandler();
        }}
      >
        ADD{" "}
      </button>
    </div>
  );
}

export default AddToPlayListBox;
