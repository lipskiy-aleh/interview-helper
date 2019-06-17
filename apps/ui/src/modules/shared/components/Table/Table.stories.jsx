import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Table from './'
import StoriesContainer from '../StoriesContainer'

const tableConfig = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
    key: 'surname',
  },
]

const data = [{
  name: 'John',
  surname: 'Doe',
}, {
  name: 'John',
  surname: 'Doe',
}]

const actions = {
  onChangePagination: action('onChangePagination'),
}

storiesOf('Table', module)
  .add('basic view', () => {
    const props = {
      tableConfig,
      data,
      currentPg: 1,
      pageSize: 10,
      total: 100,
    }
    return <StoriesContainer><Table {...props} {...actions} /></StoriesContainer>
  })
  .add('without data', () => {
    const props = {
      tableConfig,
      data: [],
      currentPg: 1,
      pageSize: 10,
      total: 100,
    }
    return <StoriesContainer><Table {...props} {...actions} /></StoriesContainer>
  })
