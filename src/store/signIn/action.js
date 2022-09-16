import axios from 'axios';
import * as types from './type';

export const setError = value => {
  return {
    type: types.FAILED_SIGNIN,
    payload: value,
  };
};

export const setLoading = value => {
  return {
    type: types.LOADING_SIGNIN,
    payload: value,
  };
};

export const setData = value => {
  return {
    type: types.SUCCESS_SIGNIN,
    payload: value,
  };
};

export const onLogin = payload => {
  return async dispatch => {
    try {
      const res = await axios.post(
        'https://fe.dev.dxtr.asia/api/login',
        payload,
      );

      dispatch(setData(res.data));
      console.log('INI RES BRAY =>', res.data);
    } catch (error) {
      dispatch(setError(error));
      dispatch(setLoading(false));
    }
  };
};
