import React from 'react'
import { connect } from 'react-redux'
import { utils } from '../../modules/shared'

const { routerActions } = utils

class AuthContainer extends React.Component {
  componentDidMount() {
    const { isLoggedIn } = this.props

    if (!isLoggedIn) {
      routerActions.goTo('/login')
    }
  }

  render() {
    if (this.props.isLoggedIn && this.props.children) {
      return this.props.children
    }

    return null
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(AuthContainer)
