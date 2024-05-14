import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// @stores
import {RootState} from '@app';

interface InitialState {
  isAppIntro: boolean;
  isLoggedIn: boolean;
  isOpenAddTransaction: boolean;
}

const initialState: InitialState = {
  isAppIntro: true,
  isLoggedIn: false,
  isOpenAddTransaction: false,
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
    toggleModalAddTransaction: (state) => {
      state.isOpenAddTransaction = !state.isOpenAddTransaction;
    },
  },
});

export const {setAppIntro, setLoggedIn, toggleModalAddTransaction} =
  appSlice.actions;

export const appSelector = (state: RootState) => state.app;

export default appSlice.reducer;
