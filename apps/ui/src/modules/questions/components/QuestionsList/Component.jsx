import React, { Component } from 'react'
import PropTypes from 'prop-types'
import tableConfig from './tableConfig'
import {} from 'antd'
import { components } from '../../../shared'

import SearchBar from '../SearchBar'
import QuestionForm from '../QuestionForm'
const { Table } = components

export default class QuestionsList extends Component {
  static propTypes = {
    questionsList: PropTypes.array,
  }

  render() {
    const { questionsList } = this.props

    return (
      <div>
        <QuestionForm />
        <SearchBar />
        <Table
          tableConfig={tableConfig}
          data={questionsList}
          currentPg={1}
          total={100}
        />
      </div>
    )
  }
}
