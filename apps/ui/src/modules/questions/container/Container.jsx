import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'

import QuestionsList from '../components/QuestionsList'

class Container extends React.Component {
  static propTypes = {
    match: PropTypes.object
  }

  render () {
    const { match } = this.props

    return (
      <Switch>
        <Route path={`${match.url}/`} exact component={QuestionsList}/>
        <Route path={`${match.url}/:questionId`} render={() => <div>Hello world</div>} />
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container))
