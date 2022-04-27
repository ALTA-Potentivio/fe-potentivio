const initialState = {
  status: "",
  base_url: "https://potentivio.my.id",
  dataArtist: [],
  profileOwner: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "status":
      return {
        ...state,
        status: action.payload,
      };
    case "setArtist":
      return {
        ...state,
        dataArtist: action.payload,
      };
    case "setProfileOwner":
      return {
        ...state,
        profileOwner: action.payload,
      };
    default:
      return state;
  }
};
