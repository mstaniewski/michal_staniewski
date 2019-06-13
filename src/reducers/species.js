import { REQUEST_SPECIES, REQUEST_SPECIES_SUCCESS } from "actions/constants";

export const initialState = {
  isFetching: false,
  items: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case REQUEST_SPECIES:
      return {
        ...state,
        ...action.payload
      };
    case REQUEST_SPECIES_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default {
  initialState,
  reducer
};
