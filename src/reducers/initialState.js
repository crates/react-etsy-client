export default {
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
  }
};
