import React from "react";
import Header from "./Shared/components/Header";
import Sidebar from "./Shared/components/Sidebar";
import RecommendedVid from "./Shared/components/RecommendedVid";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Sidebar />
        <RecommendedVid />
      </main>
    </div>
  );
}

export default App;
