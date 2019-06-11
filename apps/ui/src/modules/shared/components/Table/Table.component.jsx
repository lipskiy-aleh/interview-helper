import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { Pagination, TableWrapper } from './styles'

export default class SearchBar extends Component {
  static propTypes = {
  }

  onRow=(record, rowIndex) => {
    return {
      onClick: event => console.log(event),
    }
  }

  onChangePg = page => {
    console.log(page)
  }

  render() {
    const {
      tableConfig,
      data,
      currentPg,
      total
    } = this.props

    return (
      <TableWrapper>
        <Table
          onRow={this.onRow}
          columns={tableConfig}
          dataSource={data}
          pagination={false}
        />
        <Pagination
          current={currentPg}
          onChange={this.onChangePg}
          total={total}
          showSizeChanger
          showQuickJumper
        />
      </TableWrapper>
    )
  }
}
