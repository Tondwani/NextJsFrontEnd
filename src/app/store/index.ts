import {configureStore} from '@reduxjs/toolkit';
import navReducer from '../store/Slice/navSlics';


export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});