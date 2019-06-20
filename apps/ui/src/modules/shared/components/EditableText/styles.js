import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${props => props.width || '100%'};


  margin: 20px 0;
`

export const EditableArea = styled.div`
  display: flex;

  & > button {
    margin-left: 10px;
  }
`

export const Text = styled.div`
  cursor: default;

  height: 32px;
  line-height: 32px;
  padding-left: 11px;

  border: 1px solid transparent;
  border-radius: 4px;
  transition: border-color 1s;

  &:hover {
    border-color: #40a9ff;
  }
`
