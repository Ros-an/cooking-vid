import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// CONTEXT
import { PlayListProvider } from "./ContextAPI/playlist-context";
import { AuthProvider } from "./ContextAPI/auth-context";
import { LikeHistoryWatchLaterProvider } from "./ContextAPI/likeHistoryWatchLater-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PlayListProvider>
        <LikeHistoryWatchLaterProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </LikeHistoryWatchLaterProvider>
      </PlayListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
