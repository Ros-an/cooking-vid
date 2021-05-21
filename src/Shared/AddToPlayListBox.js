import React, { useRef, useEffect } from "react";
import { usePlayList } from "../ContextAPI/playlist-context";

const customStyleInput = {
  outlineColor: "var(--vid-primary)",
};
function AddToPlayListBox() {
  const inputRef = useRef(null);
  const { dispatchPlayList } = usePlayList();

  useEffect(() => {
    console.log("roshan");
    inputRef.current.focus();
  }, []);

  return (
    <div className="playlist-modal__input">
      <input
        ref={inputRef}
        type="text"
        placeholder="ENTER NAME"
        style={customStyleInput}
      />
      <button onClick={() => dispatchPlayList({ type: "INPUT_BOX_STATE" })}>
        ADD{" "}
      </button>
    </div>
  );
}

export default AddToPlayListBox;
