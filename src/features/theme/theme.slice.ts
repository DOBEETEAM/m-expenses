// @packages
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// @types
import {RootState} from '@app';
import {BASE_LIGHT_THEME_NAME} from '@resources/theme';

interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: BASE_LIGHT_THEME_NAME,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;

export const themeSelector = (state: RootState) => state.theme;

export default themeSlice.reducer;
