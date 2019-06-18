import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

export default class CandidatePg extends Component {
  render() {
    return (
      <div>
        <Button type="primary">
          Setup interview
        </Button>
        {this.props.match.params.candidateId}
      </div>
    );
  }
}
