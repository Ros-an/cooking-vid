import React from "react";
import { usePlayList } from "../ContextAPI/playlist-context";
import SinglePlayList from "../Shared/SinglePlayList";
import { SectionHeading, NoItem } from "../Shared/MiniComponent";

import "./PlayList.css";
function PlayList() {
  const { playListStorage } = usePlayList();
  return (
    <div className="section-padding">
      <SectionHeading headingName={"Play List"} />
      {!playListStorage.length && (
        <NoItem heading={"No Playlist"} buttonText={"Create One"} />
      )}
      <div className="display-playlist">
        {playListStorage.map((singleList) => (
          <SinglePlayList key={singleList.id} data={singleList} />
        ))}
      </div>
    </div>
  );
}

export default PlayList;
