import React from 'react';
import PropTypes from 'prop-types';

export default class SearchResults extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.getListingsMarkup = this.getListingsMarkup.bind(this);
    this.listingUrl = '//www.etsy.com/se-en/listing/';
  }

  static get propTypes () {
    return {
      listings: PropTypes.object.isRequired
    };
  }

  getListingsMarkup (props = this.props) {
    const {listings} = props;
    const listingResults = [];

    for (let i = 0; i < listings.results.length; i++) {
      const listing = listings.results[i];
      listingResults.push(<li>
        <a
          href={this.listingUrl + listing.listing_id}
          title={listing.description}
          target="_blank"
        >{listing.title}</a>
      </li>);
    }

    return listingResults;
  }

  render () {
    return (
      <ul>{this.getListingsMarkup()}</ul>
    );
  }
}
