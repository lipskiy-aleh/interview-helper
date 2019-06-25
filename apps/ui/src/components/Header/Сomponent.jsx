import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { Header, Logo } from './styles'

export default class HeaderComponent extends Component {
  static propTypes = {
  }

  render() {
    const {} = this.props

    return (
      <Header>
        <Logo />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="candidates">
            <Link to="/candidates">Candidates</Link>
          </Menu.Item>
          <Menu.Item key="questions">
            <Link to="/questions">Questions</Link>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}
