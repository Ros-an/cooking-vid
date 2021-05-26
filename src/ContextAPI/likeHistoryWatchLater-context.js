import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/likeHistoryWatchLater-reducer";

const LikeHistoryWatchLaterContext = createContext();

const defaultState = {
  watchLater: [],
  history: [],
};

export const LikeHistoryWatchLaterProvider = ({ children }) => {
  const [state, dispatchLikeHistoryWatchLater] = useReducer(
    reducer,
    defaultState
  );
  console.log("ye raha mera history : ", state.history);
  return (
    <LikeHistoryWatchLaterContext.Provider
      value={{ ...state, dispatchLikeHistoryWatchLater }}
    >
      {children}
    </LikeHistoryWatchLaterContext.Provider>
  );
};

export const useLikeHistoryWatchLater = () => {
  return useContext(LikeHistoryWatchLaterContext);
};
