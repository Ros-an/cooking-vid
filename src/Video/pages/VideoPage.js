import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { useLikeHistoryWatchLater } from "../../ContextAPI/likeHistoryWatchLater-context";

import "./VideoPage.css";
import { useParams } from "react-router-dom";
import { videoData } from "../data";

function VideoPage() {
  const [video, setVideo] = useState(undefined);
  const { likedOne, dispatchLikeHistoryWatchLater } =
    useLikeHistoryWatchLater();
  let likedOrNot;

  const { videoid } = useParams();

  useEffect(() => {
    const reqVideo = videoData.find((vid) => vid.id === Number(videoid));
    setVideo(reqVideo);
    dispatchLikeHistoryWatchLater({
      type: "ADD_TO_HISTORY",
      payload: reqVideo,
    });
  }, [videoid, dispatchLikeHistoryWatchLater, video]);
  if (video) {
    likedOrNot = likedOne.some((vid) => vid.id === video.id);
  }

  return (
    <div className="section-padding video-page">
      {video && (
        <>
          <iframe
            width="100%"
            height="420"
            src={`https://www.youtube.com/embed${video.videoLink}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video-details">
            <h2>{video.title}</h2>
            <div>
              <p>{video.views} •</p>
              <p>{video.timestamp}</p>
            </div>
          </div>
          <div className="video-channel-and-control">
            <div className="channel">
              <Avatar
                alt={video.title}
                src={video.avatar_img}
                className="avatar"
              />
              <p>{video.channel}</p>
            </div>
            <div className="control">
              <div
                className="pointer-cursor"
                onClick={() =>
                  dispatchLikeHistoryWatchLater({
                    type: "TOGGLE_LIKE",
                    payload: video,
                  })
                }
              >
                {video && likedOrNot ? (
                  <ThumbUpIcon className="icon liked" />
                ) : (
                  <ThumbUpAltOutlinedIcon className="icon" />
                )}
                <span>Like</span>
              </div>
              <div className="pointer-cursor">
                <PlaylistAddIcon className="icon" />
                <span>Save</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default VideoPage;
