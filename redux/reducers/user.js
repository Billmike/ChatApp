import { createReducer, createAction } from 'redux-starter-kit';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const initialState = {
  isLoading: false,
  user: {},
  error: {}
};

export const signupRequest = createAction('SIGNUP_REQUEST');
const signupSuccess = createAction('SIGNUP_SUCCESS');

export const signupSuccessAction = (data) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    const options = {
      url: 'http://localhost:6000/api/v1/user/register',
      method: 'POST',
      data,
    };

    const response = await axios(options);
    await AsyncStorage.setItem('userData', JSON.stringify(response.data));
    dispatch(signupSuccess(response.data.user));
    return { success: true };
  } catch (error) {
    console.log('error', error);
  }
}

const user = createReducer(initialState, {
  SIGNUP_REQUEST: (state, { type, payload }) => ({
    ...state,
    isLoading: true
  }),
  SIGNUP_SUCCESS: (state, { type, payload }) => ({
    ...state,
    isLoading: false,
    user: payload
  }),
  SIGNUP_FAILURE: (state, { type, payload }) => ({
    ...state,
    isLoading: false,
    error: payload
  })
})

export default user;
