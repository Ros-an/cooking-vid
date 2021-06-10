export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "MODAL_CONTROL":
      return {
        ...state,
        singleVideo: state.singleVideo === "" ? action.payload : "",
        playListModalState: state.playListModalState ? false : true,
      };
    // case "INPUT_BOX_STATE":
    //   return {
    //     ...state,
    //     playListInputBox: state.playListInputBox ? false : true,
    //   };
    // playListInputBox: state.playListInputBox ? false : true,
    case "SAVE_NEW_PLAYLIST":
      return {
        ...state,
        playListStorage: [
          ...state.playListStorage,
          {
            id: new Date().getTime().toString(),
            name: action.payload,
            videoList: [],
          },
        ],
      };
    case "TOGGLING_VID_CHECKBOX":
      const { payload } = action;
      return {
        ...state,
        playListStorage: payload,
      };

    case "REMOVE_VID_FROM_PLAYLIST":
      const {
        payload: { id, playListId },
      } = action;
      const reqPlayList = state.playListStorage.find(
        (list) => list.id === playListId
      );
      const reqPlayListUpdated = reqPlayList.videoList.filter(
        (vid) => vid.id !== id
      );
      const updatedPlaylistStorage = state.playListStorage.map((list) =>
        list.id === playListId
          ? { ...reqPlayList, videoList: reqPlayListUpdated }
          : list
      );
      return {
        ...state,
        playListStorage: updatedPlaylistStorage,
      };
    default:
      return state;
  }
};
