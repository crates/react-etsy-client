import { combineReducers } from 'redux';
import fuelSavings from './appReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
