import {createSlice} from '@reduxjs/toolkit';
import {APP_LANGUAGE, APP_THEME, NAME_REDUCER} from '../../utilities/constants';

const slice = createSlice({
  name: NAME_REDUCER.APP,
  initialState: {
    appTheme: APP_THEME.LIGHT,
    language: APP_LANGUAGE.VI,
  },
  reducers: {
    changeTheme: (state, {payload: {theme}}) => {
      state.appTheme = theme;
    },
    changeLang: (state, {payload: {lang}}) => {
      state.language = lang;
    },
  },
});

export const {changeTheme, changeLang} = slice.actions;

export default slice.reducer;
