import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import SearchForm from '../SearchForm';

export class SearchWrapper extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.onSearch = this.onSearch.bind(this);
    this.calculateFuelSavings = this.calculateFuelSavings.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchAllListings();
  }

  onSearch () {
    this.props.actions.onSearch(this.props.fuelSavings);
  }

  calculateFuelSavings (e) {
    this.props.actions.calculateFuelSavings(this.props.fuelSavings, e.target.name, e.target.value);
  }

  render () {
    return (
      <SearchForm
        onSearch={this.onSearch}
        onChange={this.calculateFuelSavings}
        query={this.props.query}
        listings={this.props.listings}
      />
    );
  }
}

SearchWrapper.propTypes = {
  actions: PropTypes.object.isRequired,
  query: PropTypes.string,
  listings: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return state.fuelSavings;
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWrapper);
