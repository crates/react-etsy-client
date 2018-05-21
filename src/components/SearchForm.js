import React from 'react';
import {func, string, object} from 'prop-types';
import SearchResults from './SearchResults';
import TextField from '@material-ui/core/TextField';
// import {fuelSavings} from '../types';

export default class SearchForm extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
  }

  static get propTypes () {
    return {
      onChange: func.isRequired,
      onSearch: func.isRequired,
      query: string,
      listings: object
    };
  }

  handleChange = name => event => {
    debugger;
    this.props.onChange(event);
    // console.log(event.target.value);
    // this.setState({
    //   [name]: event.target.value
    // });
  };

  render () {
    const {query, listings = {results: []}, onSearch} = this.props;

    return (
      <div>
        <h2>Etsy Product Search</h2>

        <TextField
          id="full-width"
          ref="search"
          label="Search Term"
          InputLabelProps={{
            shrink: true
          }}
          placeholder="Enter a search term here"
          fullWidth={true}
          margin="normal"
          defaultValue={query}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" onClick={onSearch} />

        {!!listings.results.length && <SearchResults listings={listings} />}
      </div>
    );
  }
}
