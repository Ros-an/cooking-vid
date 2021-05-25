import React from "react";
import VideoCard from "../components/VideoCard";
import { SectionHeading } from "../../Shared/MiniComponent";
import { videoData } from "../data";

import "./RecommendedVid.css";

function RecommendedVid() {
  return (
    <div className="section-padding">
      <SectionHeading headingName={"Recommended"} />
      <div className="recommended-vid__videos">
        {videoData.map((item) => (
          <VideoCard videoInfo={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVid;
