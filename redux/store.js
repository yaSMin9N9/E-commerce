// store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardReducer';
import DarkReducer from './darkReducer';

  const rootReducer = ( {
    cart:cardReducer,
    mode:DarkReducer
  })
  const store = configureStore({
    reducer: rootReducer,
  });

export default store;
