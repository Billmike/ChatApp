import { createReducer, createAction } from 'redux-starter-kit';

const initialState = {
  isLoading: false,
  user: {},
  error: {}
};

export const signupRequest = createAction('SIGNUP_REQUEST');

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
