import React from "react";
import VideoCard from "../components/VideoCard";

import "./RecommendedVid.css";
import { videoData } from "../data";

function RecommendedVid() {
  return (
    <div className="recommended-vid">
      <h2>Recommended</h2>
      <div className="recommended-vid__videos">
        {videoData.map((item) => (
          <VideoCard videoInfo={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVid;
