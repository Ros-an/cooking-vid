export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "ADD_TO_WATCHLATER":
      const { payload } = action;
      const presentOrNot = state.watchLater.some(
        (vid) => vid.id === payload.id
      );
      if (presentOrNot) {
        return { ...state };
      }
      return { ...state, watchLater: [...state.watchLater, payload] };

    default:
      return state;
  }
};
