import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import 'antd/dist/antd.css'

import store from '../../redux'
import history from '../../utils/history'

import HeaderCmp from '../Header'
import Questions from '../../modules/questions'
import Candidates from '../../modules/candidates'
import { pages } from '../../modules/shared'

const { NotFound } = pages

const {
  Header, Footer, Content,
} = Layout

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout className="app">
          <Header><HeaderCmp /></Header>
          <Content className="mainWrapper">
            <Switch>
              <Route path="/questions" component={Questions} />
              <Route path="/candidates" component={Candidates} />
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
