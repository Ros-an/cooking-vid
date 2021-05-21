import React from "react";

import Header from "./Shared/Header";
import Sidebar from "./Shared/Sidebar";
import RecommendedVid from "./Video/pages/RecommendedVid";
import SignUpSignIn from "./Pages/SignUpSignIn";
import PlayList from "./Pages/PlayList";
import WatchLater from "./Pages/WatchLater";
import History from "./Pages/History";
import LikedOne from "./Pages/LikedOne";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<RecommendedVid />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/history" element={<History />} />
          <Route path="/likedone" element={<LikedOne />} />
          <Route path="/authenticate" element={<SignUpSignIn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
