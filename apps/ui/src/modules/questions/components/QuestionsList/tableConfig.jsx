import React from 'react'
import { Tag } from 'antd'

const EASY = 'EASY'
const MEDIUM = 'MEDIUM'
const HARD = 'HARD'

function mapColorByDifficulty(difficulty) {
  const dif = difficulty.toUpperCase()
  switch (dif) {
    case EASY:
      return 'green'
    case MEDIUM:
      return 'orange'
    case HARD:
      return 'red'
    default:
      return ''
  }
}

const tableConfig = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Difficulty',
    dataIndex: 'difficulty',
    key: 'difficulty',
    render: difficulty => (
      <Tag color={mapColorByDifficulty(difficulty)} key={difficulty}>
        {difficulty.toUpperCase()}
      </Tag>
    ),
  },
]

export default tableConfig
