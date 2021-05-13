import React from "react";
import Header from "./Shared/components/Header";
import Sidebar from "./Shared/components/Sidebar";
import RecommendedVid from "./Video/pages/RecommendedVid";
import SignUpSignIn from "./Pages/SignUpSignIn";

import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Sidebar />
      <RecommendedVid />
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<SignUpSignIn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
