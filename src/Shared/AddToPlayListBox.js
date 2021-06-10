import React, { useRef, useEffect, useState } from "react";
import { usePlayList } from "../ContextAPI/playlist-context";

const customStyleInput = {
  outlineColor: "var(--vid-primary)",
};
function AddToPlayListBox({ setterFun }) {
  const [playListName, setPlayListName] = useState("");
  const { dispatchPlayList } = usePlayList();
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("this is inside useeffect");
    inputRef.current.focus();
  }, []);
  console.log("this is after useeffect");
  const playListNamingHandler = () => {
    dispatchPlayList({
      type: "SAVE_NEW_PLAYLIST",
      payload: playListName,
    });
    setterFun(false);
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
          setterFun(false);
        }}
      >
        ADD{" "}
      </button>
    </div>
  );
}

export default AddToPlayListBox;
