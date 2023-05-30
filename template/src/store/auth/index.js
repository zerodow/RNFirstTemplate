import {createSlice} from '@reduxjs/toolkit';
import {NAME_REDUCER} from '../../utilities/constants';

const slice = createSlice({
  name: NAME_REDUCER.AUTH,
  initialState: {
    userInfo: null,
    accessToken: null,
  },
  reducers: {
    setUserInfo: (state, {payload: {data}}) => {
      state.userInfo = data;
    },
    clearUserInfo: state => {
      state.userInfo = null;
    },
    setAccessToken: (state, {payload: {token}}) => {
      state.accessToken = token;
    },
    clearAccessToken: state => {
      state.accessToken = null;
    },
    logoutAction: state => {
      state.accessToken = null;
      state.userInfo = null;
    },
  },
});

export const {
  setUserInfo,
  clearUserInfo,
  setAccessToken,
  clearAccessToken,
  logoutAction,
} = slice.actions;

export default slice.reducer;
