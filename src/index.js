import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// CONTEXT
import { PlayListProvider } from "./ContextAPI/playlist-context";
import { AuthProvider } from "./ContextAPI/auth-context";
import { WatchLaterProvider } from "./ContextAPI/watchlater-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PlayListProvider>
        <WatchLaterProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </WatchLaterProvider>
      </PlayListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
