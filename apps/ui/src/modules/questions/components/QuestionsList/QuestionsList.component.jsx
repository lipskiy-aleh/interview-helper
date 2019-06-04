import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class QuestionsList extends Component {
  static propTypes = {
    questionsList: PropTypes.array,
  }

  render() {
    const { questionsList } = this.props

    return (
      <div>
        {questionsList.map((question, index) => <div key={index}> {question.text} </div>)}
      </div>
    )
  }
}
