import Api from "utils/api-client";

import {
  REQUEST_SPECIES,
  REQUEST_SPECIES_SUCCESS,
  REQUEST_SPECIES_FAILURE
} from "actions/constants";

export const requestSpecies = (params = {}) => async (state, dispatch) => {
  dispatch({
    type: REQUEST_SPECIES,
    payload: {
      isFetching: true
    }
  });
  try {
    const { data } = await Api.get("/species", params);

    dispatch({
      type: REQUEST_SPECIES_SUCCESS,
      payload: {
        items: data,
        isFetching: false
      }
    });
  } catch (e) {
    dispatch({ type: REQUEST_SPECIES_FAILURE });
  }
};
