import * as types from '../constants/actionTypes';
import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/etsyHelpers';
import objectAssign from 'object-assign';
import initialState from './initialState';

export const appReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case types.UPDATE_LISTINGS:
      return objectAssign({}, state, {'listings': action.data});

    case types.SAVE_FUEL_SAVINGS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in actions.js
      return objectAssign({}, state, {'fuelSavings': {dateModified: action.dateModified}});

    case types.CALCULATE_FUEL_SAVINGS:
      newState = objectAssign({}, state);
      newState.fuelSavings[action.fieldName] = action.value;
      newState.fuelSavings.necessaryDataIsProvidedToCalculateSavings = necessaryDataIsProvidedToCalculateSavings(action.settings);
      newState.fuelSavings.dateModified = action.dateModified;

      if (newState.necessaryDataIsProvidedToCalculateSavings) {
        newState.fuelSavings.savings = calculateSavings(newState);
      }

      return objectAssign({}, newState);

    default:
      return state;
  }
};

export default appReducer;
