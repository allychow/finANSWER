import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import ButtonExampleAttachedEvents from '../ButtonAddExpense/ButtonAddExpense.js'


class SidebarRightScaleDown extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='scale down'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='shop'>
              <Icon name='shop' />
              <Button>
              Expense Page
              </Button>
            </Menu.Item>
            <Menu.Item name='money'>
              <Icon name='money' />
              <Button>
              Owe Page
              </Button>
            </Menu.Item>
            <Menu.Item name='calculator'>
              <Icon name='calculator' />
              <Button>
              Budgeting
                </Button>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <ButtonExampleAttachedEvents>
              </ButtonExampleAttachedEvents>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarRightScaleDown