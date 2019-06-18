import React from 'react'

import { Wrapper, OpacityBlock, Content } from './styles'

export default function NotFound() {
  return (
    <Wrapper>
      <OpacityBlock />
      <Content>
        <div>(≥o≤)</div>
        <div>Unfortunately, this page doesn't exist.</div>
      </Content>
    </Wrapper>
  )
}
