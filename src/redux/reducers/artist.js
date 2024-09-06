import { GET_ARTIST } from "../actions";

const initialState = {
  results: {},
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        results: { ...action.payload },
      };
    default:
      return state;
  }
};

export default artistReducer;
