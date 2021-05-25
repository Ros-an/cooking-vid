import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videoData } from "../data";
import Avatar from "@material-ui/core/Avatar";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import "./VideoPage.css";

function VideoPage() {
  const [video, setVideo] = useState(undefined);
  const { videoid } = useParams();
  useEffect(() => {
    const reqVideo = videoData.find((vid) => vid.id === Number(videoid));
    setVideo(reqVideo);
  }, [videoid]);
  return (
    <div className="section-padding video-page">
      {video && (
        <>
          <iframe
            width="100%"
            height="420"
            src={`https://www.youtube.com/embed/${video.videoLink}`}
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
              <div>
                <ThumbUpAltOutlinedIcon className="icon" />
                <span>Like</span>
              </div>
              <div>
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
