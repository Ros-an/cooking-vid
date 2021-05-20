import { createContext, useReducer, useContext } from "react";
import { reducer } from "../Reducer/playlist-reducer";
const PlayListContext = createContext();

const defaultState = {
  playListModalState: {
    status: false,
    videoData: "",
  },
  playListStore: [],
};

export const PlayListProvider = ({ children }) => {
  const [state, dispatchPlayList] = useReducer(reducer, defaultState);
  return (
    <PlayListContext.Provider value={{ ...state, dispatchPlayList }}>
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlayList = () => {
  return useContext(PlayListContext);
};
