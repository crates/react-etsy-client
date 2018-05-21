// import * as ActionTypes from '../constants/actionTypes';
import appReducer from './appReducer';
// import {getFormattedDateTime} from '../utils/dates';

describe('Reducers::Etsy', () => {
  const getInitialState = () => {
    return {
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
      },
      'page': 1,
      'query': ''
    };
  };

  it('should set initial state by default', () => {
    const action = {type: 'unknown'};
    const expected = getInitialState();

    expect(appReducer(undefined, action)).toEqual(expected);
  });
});
