import { PROFILE_DATA, LOADING } from "../Actions/types";

const initialState = {
  userdata: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case PROFILE_DATA:
      return { ...state, userdata: action.payload, loading: false };
    default:
      return state;
  }
};
