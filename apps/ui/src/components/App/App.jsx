import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import store from '../../redux'
import history from '../../utils/history'

import Questions from '../../modules/questions/container'

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Switch>
            <Route path="/questions" component={Questions} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
