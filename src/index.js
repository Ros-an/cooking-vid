import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// CONTEXT
import { PlayListProvider } from "./ContextAPI/playlist-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PlayListProvider>
        <App />
      </PlayListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
