/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore, {history} from './store/configureStore';
import Root from './components/Root';
import './styles/styles.scss';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

require('./favicon.ico');

const theme = createMuiTheme();
const store = configureStore();

render(
  <AppContainer>
    <MuiThemeProvider theme={theme}>
      <Root store={store} history={history} />
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
