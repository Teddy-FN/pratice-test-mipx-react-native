import * as types from './type';

const initalState = {
  data: [],
  loading: false,
  error: false,
};

export const getProductsReducers = (state = initalState, action) => {
  switch (action.type) {
    case types.SUCCESS_PRODUCTS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        erorr: false,
      };
    }
    case types.LOADING_PRODUCTS: {
      return {
        ...state,
        data: {},
        loading: true,
        error: false,
      };
    }
    case types.FAILED_PRODUCTS: {
      return {
        loading: false,
        error: true,
      };
    }

    default:
      return {...state};
  }
};
