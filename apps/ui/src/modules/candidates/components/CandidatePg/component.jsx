import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import { components } from '../../../shared'
const { EditableText } = components

export default class CandidatePg extends Component {
  state = {
    text: 'test'
  }

  render() {
    return (
      <div>
        <EditableText value={this.state.text} onChange={(value) => this.setState({text: value})}/>
        <div>{this.state.text}</div>
        <Button type="primary">
          Setup interview
        </Button>
        {this.props.match.params.candidateId}
      </div>
    );
  }
}
