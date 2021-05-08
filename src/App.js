import React from "react";
import Header from "./Shared/components/Header";
import Sidebar from "./Shared/components/Sidebar";
import RecommendedVid from "./Video/pages/RecommendedVid";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/roshan" element={<RecommendedVid />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
