import { connect } from 'react-redux'

import {
  loginRequest
} from '../../redux/actions/auth'

import LoginForm from './Component'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  loginRequest: (credentials) => dispatch(loginRequest(credentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
