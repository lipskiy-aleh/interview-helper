import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import './App.css';

import store from '../../redux'
import history from '../../utils/history'

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          Hello world
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
