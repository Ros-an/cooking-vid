import React from "react";
import { usePlayList } from "../ContextAPI/playlist-context";

function ListOfPlayListInModal() {
  const { dispatchPlayList, playListStorage, singleVideo } = usePlayList();

  if (!playListStorage.length) {
    return "Playlist will be displayed here!";
  }

  const checkHandler = (id) => {
    const reqPlayList = playListStorage.filter((list) => list.id === id)[0];
    const { videoList } = reqPlayList;
    return videoList.some((video) => video.id === singleVideo.id);
  };
  const playListAccessHandler = (singleVideo, id) => {
    const reqPlayList = playListStorage.find((list) => list.id === id);
    const presentOrNot = reqPlayList.videoList.some(
      (video) => video.id === singleVideo.id
    );
    let updatedPlaylistStorage;
    //if vid not present, then add
    if (!presentOrNot) {
      updatedPlaylistStorage = playListStorage.map((list) =>
        list.id === id
          ? { ...reqPlayList, videoList: [...list.videoList, singleVideo] }
          : list
      );
      //if present, then remove
    } else {
      const newVideoList = reqPlayList.videoList.filter(
        (video) => video.id !== singleVideo.id
      );
      updatedPlaylistStorage = playListStorage.map((list) => {
        return list.id === id
          ? { ...reqPlayList, videoList: [...newVideoList] }
          : list;
      });
    }
    dispatchPlayList({
      type: "ADD_REMOVE_VIDEO_OF_PLAYLIST",
      payload: updatedPlaylistStorage,
    });
  };
  return (
    <>
      {playListStorage.map((playList) => {
        return (
          <div key={playList.id}>
            <input
              type="checkbox"
              checked={checkHandler(playList.id)}
              onChange={() => playListAccessHandler(singleVideo, playList.id)}
            />
            <label htmlFor={playList.name}>{playList.name}</label>
          </div>
        );
      })}
    </>
  );
}

export default ListOfPlayListInModal;
