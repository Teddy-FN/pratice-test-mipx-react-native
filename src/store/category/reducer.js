import * as types from './type';

const initalState = {
  data: [],
  loading: false,
  error: false,
};

export const getCategoryReducers = (state = initalState, action) => {
  switch (action.type) {
    case types.SUCCESS_CATEGORY: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        erorr: false,
      };
    }
    case types.LOADING_CATEGORY: {
      return {
        ...state,
        data: {},
        loading: true,
        error: false,
      };
    }
    case types.FAILED_CATEGORY: {
      return {
        loading: false,
        error: true,
      };
    }

    default:
      return {...state};
  }
};
