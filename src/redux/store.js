import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import userReducer from './user-slice';
import darkModeReducer from './dark-slice';

const reducers = combineReducers({
  user: userReducer,
  darkMode: darkModeReducer,
});

const persistConfig = {
  key: 'root',
  //로컬스토리지를 사용할 것이기때문에 storage를 적어주었다
  storage,
  whitelist: ['user', 'darkMode'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
