const initialState = {
  status: "",
  base_url: "https://potentivio.my.id",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "status":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
