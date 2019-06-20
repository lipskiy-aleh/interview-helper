import { connect } from 'react-redux'

import {
  fetchQuestionsList,
} from '../../actions'

import {
  questionsList,
} from '../../selectors'

import QuestionsList from './Compose'

const mapStateToProps = state => ({
  questionsList: questionsList(state),
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchQuestionsList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
