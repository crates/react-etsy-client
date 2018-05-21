/* eslint-disable import/no-named-as-default */
import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import PropTypes from 'prop-types';

import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import SearchWrapper from './containers/SearchWrapper';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

const TabContainer = (props) => {
  return (
    <Typography component={'div'} style={{padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class App extends React.Component { // Class-based, as React's hot reloading currently doesn't support top-level stateless components
  constructor (props, context) {
    super(props, context);

    this.state = {
      value: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, value) {
    this.setState({value});
  }

  render () {
    const {value} = this.state;

    return (
      <div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
          >
            <Tab label="Search Etsy Catalog" component={Link} to="/" />
            <Tab label="About the Developer" component={Link} to="/about" />
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path="/" component={SearchWrapper} />
          <Route path="/search" component={SearchWrapper} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default withStyles(styles)(hot(module)(App));
