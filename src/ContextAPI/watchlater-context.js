import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/watchlater-reducer";

const WatchLaterContext = createContext();

const defaultState = {
  watchLater: [],
};

export const WatchLaterProvider = ({ children }) => {
  const [state, dispatchWatchLater] = useReducer(reducer, defaultState);
  console.log("ye raha mera watchlater : ", state.watchLater);
  return (
    <WatchLaterContext.Provider value={{ ...state, dispatchWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => {
  return useContext(WatchLaterContext);
};
