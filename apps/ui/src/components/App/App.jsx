import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import 'antd/dist/antd.css'

import store from '../../redux'
import history from '../../utils/history'

import AuthContainer from '../AuthContainer'
import Login from '../LoginForm'
import SignUp from '../SignUp'
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
              <Route path="/" exact render={() => <div>Landing PG will be here soon</div>} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />

              <AuthContainer>
                <Route path="/home" render={() => <div>This is your home page</div>} />
                <Route path="/questions" component={Questions} />
                <Route path="/candidates" component={Candidates} />
              </AuthContainer>

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
