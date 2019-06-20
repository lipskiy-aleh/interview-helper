import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'antd'

export default class QuestionForm extends Component {
  state = { visible: false }

  showModal = () => this.setState({ visible: true })

  handleOk = e => this.setState({ visible: false })

  handleCancel = e => this.setState({ visible: false })

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          New question
        </Button>
        <Modal
          title="New question"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }

}
