export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "MODAL_CONTROL":
      return {
        ...state,
        playListModalState: state.playListModalState ? false : true,
      };
    case "INPUT_BOX_STATE":
      return {
        ...state,
        playListInputBox: state.playListInputBox ? false : true,
      };
    default:
      return state;
  }
};
