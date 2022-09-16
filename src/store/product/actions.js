import axios from 'axios';
import * as types from './type';

export const setError = value => {
  return {
    type: types.FAILED_PRODUCTS,
    payload: value,
  };
};

export const setLoading = value => {
  return {
    type: types.LOADING_PRODUCTS,
    payload: value,
  };
};

export const setData = value => {
  return {
    type: types.SUCCESS_PRODUCTS,
    payload: value,
  };
};

export const onProducts = payload => {
  return async dispatch => {
    try {
      const res = await axios.get('https://fe.dev.dxtr.asia/api/products', {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      });

      console.log('INI RES BRAY =>', res.data);
      dispatch(setData(res.data));
    } catch (error) {
      dispatch(setError(error));
      dispatch(setLoading(false));
    }
  };
};
