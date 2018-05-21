import React from 'react';
import {func, string, object, number} from 'prop-types';
import SearchResults from './SearchResults';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class SearchForm extends React.Component {
  static get propTypes () {
    return {
      onChange: func.isRequired,
      onSearch: func.isRequired,
      query: string,
      page: number,
      listings: object
    };
  }

  render () {
    const {query, listings = {results: []}, onSearch, page} = this.props;

    return (
      <div>
        <h2>Etsy Product Search</h2>
        <h3>Results Page {page}</h3>

        <TextField
          id="full-width"
          label="Search Term"
          InputLabelProps={{
            shrink: true
          }}
          placeholder="Enter a search term here"
          fullWidth={true}
          margin="normal"
          defaultValue={query}
          onChange={(e) => this.props.onChange(e)}
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              this.props.onSearch();
              ev.preventDefault();
            }
          }}
        />
        <Button variant="raised" color="primary" onClick={onSearch}>Search</Button>

        {!!listings.results.length && <SearchResults listings={listings} />}
      </div>
    );
  }
}
