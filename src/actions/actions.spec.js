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

  it.skip('should create action to fetch from the Etsy API', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.UPDATE_LISTINGS,
      data: {}
    };
    expect(typeof (ActionCreators.fetchListings(appState))).toEqual('function');

    // then we simulate calling it with dispatch as the store would do
    ActionCreators.fetchListings(appState)(dispatch);

    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });
});
