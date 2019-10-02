import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/index'
import ConnectedIntlProvider from './components/IntlProvider';

ReactDOM.render(
    <Provider store={store}>
      <ConnectedIntlProvider>
        <App />
      </ConnectedIntlProvider>
    </Provider>,
  document.getElementById('root')
);
