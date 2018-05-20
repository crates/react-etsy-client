import React from 'react';
import PropTypes from 'prop-types';
import {scrubFormatting} from '../utils/numberFormat';

const SearchResults = ({listings}) => {
  return (
    <div>{JSON.stringify(listings)}</div>
  );
};

SearchResults.propTypes = {
  listings: PropTypes.object.isRequired
};

export default SearchResults;
