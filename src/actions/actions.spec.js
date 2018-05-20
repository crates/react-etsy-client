import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './actions';

describe('Actions', () => {
  const appState = {
    listings: {
      count: 0,
      results: [],
      params: {},
      type: 'Listing',
      pagination: {
        'effective_limit': 25,
        'effective_offset': 0,
        'next_offset': 25,
        'effective_page': 1,
        'next_page': 2
      }
    }
  };

  // it('should create an action to save fuel savings', () => {
  //   const dispatch = jest.fn();
  //   const expected = {
  //     type: ActionTypes.SAVE_FUEL_SAVINGS,
  //     dateModified,
  //     settings: appState
  //   };
  //
  //   // we expect this to return a function since it is a thunk
  //   expect(typeof (ActionCreators.saveFuelSavings(appState))).toEqual('function');
  //   // then we simulate calling it with dispatch as the store would do
  //   ActionCreators.saveFuelSavings(appState)(dispatch);
  //   // finally assert that the dispatch was called with our expected action
  //   expect(dispatch).toBeCalledWith(expected);
  // });
  //
  // it('should create an action to calculate fuel savings', () => {
  //   const fieldName = 'newMpg';
  //   const value = 100;
  //   const actual = ActionCreators.calculateFuelSavings(appState, fieldName, value);
  //   const expected = {
  //     type: ActionTypes.CALCULATE_FUEL_SAVINGS,
  //     dateModified,
  //     settings: appState,
  //     fieldName,
  //     value
  //   };
  //
  //   expect(actual).toEqual(expected);
  // });

  it.skip('should create action to fetch from the Etsy API', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.UPDATE_LISTINGS,
      data: {}
    };
    expect(typeof (ActionCreators.fetchAllListings(appState))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.fetchAllListings(appState)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });
});
