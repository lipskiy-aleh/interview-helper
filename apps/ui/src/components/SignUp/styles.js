import styled from 'styled-components'
import { Form } from 'antd'

export const StyledForm = styled(Form)`
  max-width: 500px;
  margin: 100px auto;

  & .login-form-checkbox {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  & .login-form-button {
    width: 100%;
  }
`
