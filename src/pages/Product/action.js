import { FAILED, LOADING, SUCCESS } from './constants';
import axios from 'axios';
import { BASIC_URL } from '../../utils/fetch';

export function getAllProducts() {
  return (dispatch) => {
    dispatch(loadingAction(true, ''));

    const options = {
      method: 'GET',
      url: `${BASIC_URL}`,
      headers: {},
    };

    axios(options)
      .then((res) => {
        const { status, data } = res;
        dispatch(loadingAction(false, ''));
        if (status === 200) {
          dispatch(successAction(data.shoes, ''));
        } else {
          dispatch(failedAction('You are not allowed to access'));
        }
      })
      .catch((err) => {
        //const { status, message } = err.response.data;
        //if (status === 401) {
        //  clearStorages();
        //  window.location.href = '/login';
        //}
        //if (status === 403) {
        //  clearStorages();
        //  window.location.href = '/login';
        //}
        //const messageStatus =
        //  status > 403 && status <= 500
        //    ? 'Sedang ada masalah, silahkan refresh halaman'
        //    : message;
        //toasterError(messageStatus);
        //dispatch(failedAction(messageStatus));
        //dispatch(loadingAction(false, ''));
      });
  };
}

export function resetMessage() {
  return failedAction('');
}

function failedAction(message, key) {
  return { type: FAILED, message, key };
}

function loadingAction(isLoading, key) {
  return { type: LOADING, isLoading, key };
}

function successAction(data, key) {
  return { type: SUCCESS, data, key };
}
