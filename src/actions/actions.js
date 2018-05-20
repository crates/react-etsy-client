import * as types from '../constants/actionTypes';
import {getFormattedDateTime} from '../utils/dates';
// import fetch from 'cross-fetch';

export function saveFuelSavings (settings) { // example of a thunk using the redux-thunk middleware
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SAVE_FUEL_SAVINGS,
      dateModified: getFormattedDateTime(),
      settings
    });
  };
}

export function calculateFuelSavings (settings, fieldName, value) {
  return {
    type: types.CALCULATE_FUEL_SAVINGS,
    dateModified: getFormattedDateTime(),
    settings,
    fieldName,
    value
  };
}

// export const fetchListings = () => {
//   return (dispatch) => {
//     const url = '/referencedata/currencies';
//
//     return $.get(url)
//       .then(response => {
//         dispatch({
//           type: types.SAVE_FUEL_SAVINGS,
//           data: response
//         });
//       });
//   };
// };
