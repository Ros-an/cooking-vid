export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_WATCHLATER":
      const presentOrNot1 = state.watchLater.some(
        (vid) => vid.id === payload.id
      );
      if (presentOrNot1) {
        return { ...state };
      }
      return { ...state, watchLater: [...state.watchLater, payload] };

    case "REMOVE_FROM_WATCHLATER":
      const newWatchLater = state.watchLater.filter(
        (vid) => vid.id !== payload.id
      );
      return { ...state, watchLater: newWatchLater };

    case "ADD_TO_HISTORY":
      const newHistory = state.history.filter((vid) => vid.id !== payload.id);
      return {
        ...state,
        history: [payload, ...newHistory],
      };

    case "REMOVE_FROM_HISTORY":
      const newHistory1 = state.history.filter((vid) => vid.id !== payload.id);
      return {
        ...state,
        history: newHistory1,
      };

    case "TOGGLE_LIKE":
      const presentOrNot2 = state.likedOne.some((vid) => vid.id === payload.id);
      if (presentOrNot2) {
        const newLikedVid1 = state.likedOne.filter(
          (vid) => vid.id !== payload.id
        );
        return {
          ...state,
          likedOne: newLikedVid1,
        };
      }
      return {
        ...state,
        likedOne: [...state.likedOne, payload],
      };

    case "REMOVE_FROM_LIKEDVID":
      const newLikedVid2 = state.likedOne.filter(
        (vid) => vid.id !== payload.id
      );
      return {
        ...state,
        likedOne: newLikedVid2,
      };
    default:
      return state;
  }
};
