import React from 'react';
import {func, string, object} from 'prop-types';
import SearchResults from './SearchResults';
import TextInput from './TextInput';
import {fuelSavings} from '../types';

const SearchForm = ({query, listings = {results: []}, onSearch, onChange}) => (
  <div>
    <h2>Etsy Products</h2>
    <table>
      <tbody>
        <tr>
          <td><label htmlFor="query">Search Query</label></td>
          <td><TextInput onChange={onChange} name="query" value={query} /></td>
          <td><input type="submit" value="Search" onClick={onSearch} /></td>
        </tr>
      </tbody>
    </table>

    {!!listings.results.length && <SearchResults listings={listings} />}
  </div>
);

SearchForm.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  query: string,
  listings: object
};

export default SearchForm;
