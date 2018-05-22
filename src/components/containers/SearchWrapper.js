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
    this.updateQuery = this.updateQuery.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.state = {
      page: 1,
      query: ''
    };
  }

  componentDidUpdate (prevProps, prevState) {
    // if (this.props.page !== prevState.page || this.state.query !== prevState.query) {
    //   this.onSearch();
    // }
  }

  componentDidMount () {
    this.props.actions.fetchListings();
  }

  onSearch () {
    const {page} = this.props;
    const {query} = this.state;
    this.props.actions.fetchListings({page, query});
  }

  updateQuery (e) {
    this.props.actions.updatePage(1);
    this.setState({query: e.target.value});
    // this.props.actions.updateQuery(e.target.value);
  }

  updatePage (page) {
    this.props.actions.updatePage(page);
    this.onSearch();
  }

  render () {
    return (
      <SearchForm
        onSearch={this.onSearch}
        onChange={this.updateQuery}
        updatePage={this.updatePage}
        query={this.state.query}
        page={this.props.page}
        listings={this.props.listings}
      />
    );
  }
}

SearchWrapper.propTypes = {
  actions: PropTypes.object.isRequired,
  query: PropTypes.string,
  page: PropTypes.number,
  listings: PropTypes.object
};

function mapStateToProps (state) {
  return state.appReducer;
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
