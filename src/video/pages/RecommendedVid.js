import React from "react";
import VideoCard from "../components/VideoCard";
import CategoryList from "../components/CategoryList";
import { useFilterContext } from "../../context/filterContext";
import "./RecommendedVid.css";

function RecommendedVid() {
  const { filtered_videos } = useFilterContext();
  return (
    <>
      <CategoryList />
      <div className="section-padding">
        <div className="recommended-vid__videos">
          {filtered_videos?.length ? (
            filtered_videos?.map((item) => (
              <VideoCard videoInfo={item} key={item._id} />
            ))
          ) : (
            <h3>did not match any video.</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default RecommendedVid;
