import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import SearchForm from '../SearchForm';

export class SearchWrapper extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.saveFuelSavings = this.saveFuelSavings.bind(this);
    this.calculateFuelSavings = this.calculateFuelSavings.bind(this);
  }

  saveFuelSavings () {
    this.props.actions.saveFuelSavings(this.props.fuelSavings);
  }

  calculateFuelSavings (e) {
    this.props.actions.calculateFuelSavings(this.props.fuelSavings, e.target.name, e.target.value);
  }

  render () {
    return (
      <SearchForm
        onSaveClick={this.saveFuelSavings}
        onChange={this.calculateFuelSavings}
        fuelSavings={this.props.fuelSavings}
      />
    );
  }
}

SearchWrapper.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {
    fuelSavings: state.fuelSavings
  };
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
