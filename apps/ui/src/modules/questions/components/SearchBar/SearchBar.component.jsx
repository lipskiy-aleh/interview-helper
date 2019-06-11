import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {} from 'antd';

export default class SearchBar extends Component {
  static propTypes = {
    question: PropTypes.object, // Change to more specific definition
  }

  render() {
    const {} = this.props

    return (
      <div>
        Search Bar will be here
      </div>
    )
  }
}
