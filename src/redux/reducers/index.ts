import { combineReducers } from '@reduxjs/toolkit';
import commonReducer from '../features/commonSlice';


const rootReducer = combineReducers({
  common: commonReducer,
});

export default rootReducer;
