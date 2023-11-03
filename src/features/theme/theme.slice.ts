// @packages
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// @types
import {Theme} from '@resources/theme';

interface ThemeState {
  theme: Theme | null;
}

const initialState: ThemeState = {
  theme: null,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme | null>) {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
