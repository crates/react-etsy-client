import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_LISTINGS:
      return objectAssign({}, state, {'listings': action.data});

    case types.UPDATE_QUERY:
      return objectAssign({}, state, {'query': action.value});

    case types.UPDATE_PAGE:
      return objectAssign({}, state, {'page': action.value});

    case types.ON_SEARCH:
      return objectAssign({}, state, {'listings': action.data});

    default:
      return state;
  }
};

export default reducer;
