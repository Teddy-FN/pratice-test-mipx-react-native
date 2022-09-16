import * as types from './type';

const initalState = {
  data: [],
  loading: false,
  error: false,
};

export const getLoginReducers = (state = initalState, action) => {
  switch (action.type) {
    case types.SUCCESS_SIGNIN: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        erorr: false,
      };
    }
    case types.LOADING_SIGNIN: {
      return {
        ...state,
        data: {},
        loading: true,
        error: false,
      };
    }
    case types.LOADING_SIGNIN: {
      return {
        loading: false,
        error: true,
      };
    }

    default:
      return {...state};
  }
};
