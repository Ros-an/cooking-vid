import React from "react";
import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";
import RecommendedVid from "./video/pages/RecommendedVid";
import Authenticate from "./pages/Authenticate";
import PlayList from "./pages/PlayList";
import WatchLater from "./pages/WatchLater";
import History from "./pages/History";
import LikedOne from "./pages/LikedOne";
import VideoPage from "./video/pages/VideoPage";
import PrivateRoute from "./private/PrivateRoute";
import PlayListVideoList from "./pages/PlayListVideoList";
import { useAuthContext } from "./context/auth-context";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlayListModal from "./shared/PlayListModal";
import "./style.css";
function App() {
  const { authPage } = useAuthContext();
  
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <PlayListModal />
      <main className={`main-content ${authPage && "main-content-slide-off"}`}>
        <Routes>
          <Route path="/" element={<RecommendedVid />} />
          <Route path="/:videoid" element={<VideoPage />} />
          <PrivateRoute path="/playlist" element={<PlayList />} />
          <PrivateRoute path="/watchlater" element={<WatchLater />} />
          <PrivateRoute path="/history" element={<History />} />
          <PrivateRoute path="/likedone" element={<LikedOne />} />
          <PrivateRoute
            path="/playlist/:name/:id"
            element={<PlayListVideoList />}
          />
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>
      </main>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </div>
  );
}

export default App;
