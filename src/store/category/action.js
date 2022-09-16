import axios from 'axios';
import * as types from './type';

export const setError = value => {
  return {
    type: types.FAILED_CATEGORY,
    payload: value,
  };
};

export const setLoading = value => {
  return {
    type: types.LOADING_CATEGORY,
    payload: value,
  };
};

export const setData = value => {
  return {
    type: types.SUCCESS_CATEGORY,
    payload: value,
  };
};

export const onCategory = payload => {
  return async dispatch => {
    try {
      const res = await axios.get('https://fe.dev.dxtr.asia/api/category', {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      });
      dispatch(setData(res.data));
    } catch (error) {
      dispatch(setError(error));
      dispatch(setLoading(false));
    }
  };
};
