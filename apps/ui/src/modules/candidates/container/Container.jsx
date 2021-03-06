import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'

import CandidatePg from '../components/CandidatePg'

class Container extends React.Component {
  static propTypes = {
    match: PropTypes.object
  }

  render () {
    const { match } = this.props

    return (
      <Switch>
        <Route path={`${match.url}/`} exact render={() => <div>Candidates module</div>}/>
        <Route path={`${match.url}/:candidateId`} component={CandidatePg}/>
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container))
