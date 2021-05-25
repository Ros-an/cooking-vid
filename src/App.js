import React from "react";

import Header from "./Shared/Header";
import Sidebar from "./Shared/Sidebar";
import RecommendedVid from "./Video/pages/RecommendedVid";
import SignUpSignIn from "./Pages/SignUpSignIn";
import PlayList from "./Pages/PlayList";
import WatchLater from "./Pages/WatchLater";
import History from "./Pages/History";
import LikedOne from "./Pages/LikedOne";
import PlayListVideoList from "./Pages/PlayListVideoList";
import { useAuthContext } from "./ContextAPI/auth-context";
import VideoPage from "./Video/pages/VideoPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const { authPage } = useAuthContext();
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main className={`main-content ${authPage && "main-content-slide-off"}`}>
        <Routes>
          <Route path="/" element={<RecommendedVid />} />
          <Route path="/:videoid" element={<VideoPage />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/history" element={<History />} />
          <Route path="/likedone" element={<LikedOne />} />
          <Route path="/playlist/:name/:id" element={<PlayListVideoList />} />
          <Route path="/authenticate" element={<SignUpSignIn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
