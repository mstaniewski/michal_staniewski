import {
  REQUEST_CHARACTERS,
  REQUEST_CHARACTERS_SUCCESS,
  REMOVE_CHARACTER_SUCCESS,
  SET_CHARACTERS_FILTERS,
  SET_PAGE
} from "actions/constants";

export const initialState = {
  isFetching: false,
  items: [],
  pagination: {
    page: 1,
    limit: 10,
    totalPages: 1
  },
  filters: {
    _page: 1,
    _limit: 10,
    _sort: null,
    _order: null,
    q: ""
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case REQUEST_CHARACTERS:
      return {
        ...state,
        ...action.payload
      };
    case REQUEST_CHARACTERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        pagination: { ...state.pagination, ...action.payload.pagination }
      };
    case REMOVE_CHARACTER_SUCCESS:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload.id)
      };
    case SET_CHARACTERS_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    case SET_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload
        },
        filters: {
          ...state.filters,
          _page: action.payload
        }
      };
    default:
      return state;
  }
};

export default {
  initialState,
  reducer
};
