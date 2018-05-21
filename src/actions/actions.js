import * as types from '../constants/actionTypes';
import EtsyJsonp from '../utils/etsyApi';

const etsyApi = new EtsyJsonp();

export const fetchAllListings = () => {
  return (dispatch) => {
    return etsyApi.get({
      path: 'listings/active',
      success: (info) => {
        dispatch({
          type: types.UPDATE_LISTINGS,
          data: info.response
        });
      }
    });
  };
};

export const onSearch = (settings) => { // example of a thunk using the redux-thunk middleware
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.ON_SEARCH,
      settings
    });
  };
};

export const updateQuery = (settings, fieldName, value) => {
  return {
    type: types.UPDATE_QUERY,
    settings,
    fieldName,
    value
  };
};
