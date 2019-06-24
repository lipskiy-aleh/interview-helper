import styled from 'styled-components'
import { Form } from 'antd'

export const StyledForm = styled(Form)`
  max-width: 300px;
  margin: 100px auto;

  & .login-form-forgot {
    float: right;
  }

  & .login-form-button {
    width: 100%;
  }
`
