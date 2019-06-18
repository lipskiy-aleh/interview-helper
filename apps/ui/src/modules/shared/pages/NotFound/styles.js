import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const OpacityBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: #d3d3d3;
  opacity: 0.3;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: black;

  & > div:first-child {
    font-size: 100px;
  }
`
