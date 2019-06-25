import { connect } from 'react-redux'

import {
  signUpRequest
} from '../../redux/actions/auth'

import SignUpForm from './Component'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  signUpRequest: credentials => dispatch(signUpRequest(credentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
