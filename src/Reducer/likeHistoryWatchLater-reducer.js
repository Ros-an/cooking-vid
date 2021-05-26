export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_WATCHLATER":
      const presentOrNot = state.watchLater.some(
        (vid) => vid.id === payload.id
      );
      if (presentOrNot) {
        return { ...state };
      }
      return { ...state, watchLater: [...state.watchLater, payload] };

    case "ADD_TO_HISTORY":
      const newHistory = state.history.filter((vid) => vid.id !== payload.id);
      return {
        ...state,
        history: [payload, ...newHistory],
      };
    default:
      return state;
  }
};
