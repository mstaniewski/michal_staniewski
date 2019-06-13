import Api from "utils/api-client";

import {
  REQUEST_CHARACTERS,
  REQUEST_CHARACTERS_SUCCESS,
  REQUEST_CHARACTERS_FAILURE,
  CREATE_CHARACTER,
  CREATE_CHARACTER_SUCCESS,
  CREATE_CHARACTER_FAILURE,
  REMOVE_CHARACTER,
  REMOVE_CHARACTER_SUCCESS,
  REMOVE_CHARACTER_FAILURE,
  SET_CHARACTERS_FILTERS,
  SET_PAGE
} from "actions/constants";

const getTotalPages = header =>
  header
    ? header
        .split(",")
        .slice(-1)[0]
        .match(/<([a-z:/?&].+)>/)[1]
        .split("?")[1]
        .split("&")
        .map(param => param.split("="))
        .find(param => param[0] === "_page")[1]
    : 1;

export const requestCharacters = (params = {}) => async (state, dispatch) => {
  dispatch({
    type: REQUEST_CHARACTERS,
    payload: {
      isFetching: true
    }
  });
  try {
    const { data, headers } = await Api.get("/characters", params);
    const totalPages = getTotalPages(headers.get("Link"));

    dispatch({
      type: REQUEST_CHARACTERS_SUCCESS,
      payload: {
        items: data,
        isFetching: false,
        pagination: {
          totalPages: Number(totalPages)
        }
      }
    });
  } catch (e) {
    dispatch({ type: REQUEST_CHARACTERS_FAILURE });
  }
};

export const createCharacter = (postData = {}) => async (state, dispatch) => {
  dispatch({
    type: CREATE_CHARACTER,
    payload: {
      isFetching: true
    }
  });
  try {
    await Api.post("/characters", postData);

    dispatch({
      type: CREATE_CHARACTER_SUCCESS,
      payload: {
        isFetching: false
      }
    });
  } catch (e) {
    dispatch({ type: CREATE_CHARACTER_FAILURE });
  }
};

export const removeCharacter = param => async (state, dispatch) => {
  dispatch({
    type: REMOVE_CHARACTER
  });
  try {
    await Api.delete("/characters", param);

    dispatch({
      type: REMOVE_CHARACTER_SUCCESS,
      payload: {
        id: param,
        isFetching: false
      }
    });
  } catch (e) {
    dispatch({ type: REMOVE_CHARACTER_FAILURE });
  }
};

export const setPage = page => ({
  type: SET_PAGE,
  payload: page
});

export const setFilters = (filters = {}) => ({
  type: SET_CHARACTERS_FILTERS,
  payload: filters
});
