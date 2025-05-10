// store/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import feature1Reducer from '../features/feature1/slice';


const rootReducer = combineReducers({
  feature1: feature1Reducer,
  
});

export default rootReducer;