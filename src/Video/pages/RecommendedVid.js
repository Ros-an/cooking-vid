import React from "react";
import VideoCard from "../components/VideoCard";

import "./RecommendedVid.css";

function RecommendedVid() {
  return (
    <div className="recommended-vid">
      <h2>Recommended</h2>
      <div className="recommended-vid__videos">
        {[1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1].map((item) => (
          <VideoCard />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVid;
