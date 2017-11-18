import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import TableExamplePagination from '../ExpenseList/ExpenseList.js'
import ButtonAddExpense from '../ButtonAddExpense/ButtonAddExpense.js'
import Friends from '../Friends/Friends.js'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'expense' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  
  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Expense Page' active={activeItem === 'expense'} onClick={this.handleItemClick} />
          <Menu.Item name='Owe Page' active={activeItem === 'owe'} onClick={this.handleItemClick} />
          <Menu.Item name='Budgeting' active={activeItem === 'budget'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.onClick} />
          </Menu.Menu>
        </Menu>

        <Segment>
          <TableExamplePagination>
          </TableExamplePagination>
          <ButtonAddExpense>
          </ButtonAddExpense>
        </Segment>

        <Segment>
          <Friends>
          </Friends>
    
        </Segment>
      
      </div>
    )
  }

}