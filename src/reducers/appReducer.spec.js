import * as ActionTypes from '../constants/actionTypes';
import reducer from './appReducer';
import {getFormattedDateTime} from '../utils/dates';

describe('Reducers::Etsy', () => {
  const getInitialState = () => {
    return {
      fuelSavings: {
        newMpg: '',
        tradeMpg: '',
        newPpg: '',
        tradePpg: '',
        milesDriven: '',
        milesDrivenTimeframe: 'week',
        displayResults: false,
        dateModified: null,
        necessaryDataIsProvidedToCalculateSavings: false,
        savings: {
          monthly: 0,
          annual: 0,
          threeYear: 0
        }
      },
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
  };

  const getAppState = () => {
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
      fuelSavings: {
        newMpg: 20,
        tradeMpg: 10,
        newPpg: 1.50,
        tradePpg: 1.50,
        milesDriven: 100,
        milesDrivenTimeframe: 'week',
        displayResults: false,
        dateModified: null,
        necessaryDataIsProvidedToCalculateSavings: false,
        savings: {
          monthly: 0,
          annual: 0,
          threeYear: 0
        }
      }
    };
  };
  const dateModified = getFormattedDateTime();

  it('should set initial state by default', () => {
    const action = {type: 'unknown'};
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SAVE_FUEL_SAVINGS', () => {
    const action = {type: ActionTypes.SAVE_FUEL_SAVINGS, dateModified, settings: getAppState()};
    const expected = Object.assign(getAppState(), {fuelSavings: {dateModified}});

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it.skip('should handle CALCULATE_FUEL_SAVINGS', () => {
    const action = {type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: getAppState(), fieldName: 'newMpg', value: 30};

    const expectedMpg = 30;
    const expectedSavings = {monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88'};

    const reduced = reducer(getAppState(), action);
    expect(reduced.fuelSavings.newMpg).toEqual(expectedMpg);
    expect(reduced.fuelSavings.savings).toEqual(expectedSavings);
  });
});
