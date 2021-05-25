export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "MODAL_CONTROL":
      return {
        ...state,
        singleVideo: state.singleVideo === "" ? action.payload : "",
        playListModalState: state.playListModalState ? false : true,
      };
    case "INPUT_BOX_STATE":
      return {
        ...state,
        playListInputBox: state.playListInputBox ? false : true,
      };
    case "SAVE_NEW_PLAYLIST":
      return {
        ...state,
        playListInputBox: state.playListInputBox ? false : true,
        playListStorage: [
          ...state.playListStorage,
          {
            id: new Date().getTime().toString(),
            name: action.payload,
            videoList: [],
          },
        ],
      };
    case "ADD_REMOVE_VIDEO_OF_PLAYLIST":
      const { payload } = action;
      return {
        ...state,
        playListStorage: payload,
      };
    default:
      return state;
  }
};
