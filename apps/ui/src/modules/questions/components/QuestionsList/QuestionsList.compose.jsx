import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionsList from './QuestionsList.component';

const withFetchQuestions = WrappedComponent => {
  return class extends Component {
    static propTypes = {
      fetchData: PropTypes.func,
    }

    componentDidMount() {
      this.props.fetchData()
    }

    render () {
      return <WrappedComponent
        {...this.props}
      />
    }
  }
}

export default withFetchQuestions(QuestionsList)
