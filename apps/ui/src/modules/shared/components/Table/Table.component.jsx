import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { Pagination, TableWrapper } from './styles'

export default class SearchBar extends Component {
  static propTypes = {
    onChangePagination: PropTypes.func,
  }

  onRow=(record, rowIndex) => {
    return {
      onClick: event => console.log(event),
    }
  }

  onChangePg = page => {
    const { onChangePagination, pageSize } = this.props
    onChangePagination(page, pageSize)
  }

  render() {
    const {
      tableConfig,
      data,
      filter,

      currentPg,
      pageSize,

      total,
      onChangePagination,
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
          pageSize={pageSize}
          total={total}
          onChange={this.onChangePg}
          onShowSizeChange={onChangePagination}
          showSizeChanger
          showQuickJumper
        />
      </TableWrapper>
    )
  }
}
