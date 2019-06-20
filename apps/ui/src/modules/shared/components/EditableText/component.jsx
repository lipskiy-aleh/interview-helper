import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Input as AntdInput, Button } from 'antd'
import { Wrapper, EditableArea, Text } from './styles'

const ENTER_KEY_CODE = 13
const ESCAPE_KEY_CODE = 27

export default function EditableText(props) {
  const [value, changeValue] = useState(props.value)
  const [edit, switchEdit] = useState(false)

  useEffect(() => {
    changeValue(props.value)
  }, [props.value])

  function handleVisibility() {
    switchEdit(!edit)
  }

  function onChange(e) {
    changeValue(e.target.value)
  }

  function onConfirm() {
    props.onChange(value)
    handleVisibility()
  }

  function onCancel() {
    changeValue(props.value)
    handleVisibility()
  }

  function onKeyDown(e) {
    switch (e.keyCode) {
      case ENTER_KEY_CODE: {
        return onConfirm()
      }
      case ESCAPE_KEY_CODE: {
        return onCancel()
      }
      default: return null
    }
  }

  return (
    <Wrapper>
      {edit ? (
        <EditableArea>
          <AntdInput
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <Button onClick={onConfirm}>Apply</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </EditableArea>
      ) : (
        <Text onClick={handleVisibility}>{value}</Text>
      )}
    </Wrapper>
  )
}

EditableText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

EditableText.defaultProps = {
  value: '',
}
