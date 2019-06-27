import { connect } from 'react-redux'

import {
  signUpRequest
} from '../../redux/actions/auth'

import SignUpForm from './Component'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  signUpRequest: userData => dispatch(signUpRequest(userData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
