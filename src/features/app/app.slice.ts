import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// @stores
import {RootState} from '@app';

interface InitialState {
  isAppIntro: boolean;
  isLoggedIn: boolean;
}

const initialState: InitialState = {
  isAppIntro: true,
  isLoggedIn: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppIntro(state, action: PayloadAction<boolean>) {
      state.isAppIntro = action.payload;
    },
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {setAppIntro, setLoggedIn} = appSlice.actions;

export const appSelector = (state: RootState) => state.app;

export default appSlice.reducer;
