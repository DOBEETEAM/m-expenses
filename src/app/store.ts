// @packages
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
// @others
import themeReducer from '@features/theme';
import appReducer from '@features/app'

const reducers = combineReducers({
  theme: themeReducer,
  app: appReducer
});

const persistConfig = {
  key: 'MONTRA',
  storage: AsyncStorage,
  debug: true,
  blacklist: [],
  whitelist: ['theme', 'app'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
