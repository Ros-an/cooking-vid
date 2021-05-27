import React, { useEffect, useState } from "react";
import { usePlayList } from "../ContextAPI/playlist-context";
import "./PlayListVideoList.css";
import { useParams } from "react-router-dom";
import {
  NoItem,
  SectionHeading,
  VideoCardTypeList,
} from "../Shared/MiniComponent";

function PlayListVideoList() {
  const [list, setList] = useState([]);
  const { playListStorage, dispatchPlayList } = usePlayList();
  const { id } = useParams();
  const remove = "REMOVE_VID_FROM_PLAYLIST";

  useEffect(() => {
    const playList = playListStorage.find((list) => list.id === id);
    setList(playList);
  }, [id, playListStorage]);

  return (
    <section className="section-padding">
      <SectionHeading headingName={`Play List / ${list.name}`} />
      {list.videoList && (
        <div className="video-list-container">
          {list.videoList.map((vid) => (
            <VideoCardTypeList
              key={vid.id}
              {...vid}
              dispatch={dispatchPlayList}
              remove={remove}
              playListId={list.id}
            />
          ))}
        </div>
      )}
      {list.videoList && list.videoList.length === 0 && (
        <NoItem heading={"No Video Added"} buttonText={"Add Some"} />
      )}
    </section>
  );
}

export default PlayListVideoList;
