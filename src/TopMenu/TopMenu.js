import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import ExpenseTable from '../ExpenseTable/ExpenseTable.js'
import AddExpenseButton from '../Buttons/AddExpenseButton.js'
import Friends from '../Friends/Friends.js'
import Login from '../Login/Login.js'
import Suggestion from '../Suggestion/Suggestion.js'
import ExpenseBarChart from '../ExpenseTable/ExpenseBarChart.js'
import OweChart from '../Friends/OweChart.js'
import ExpensePieChart from '../ExpenseTable/ExpensePieChart.js'
import SuggestionBarChart from '../Suggestion/SuggestionBarChart.js'
import axios from 'axios'

class TopMenu extends Component {

  constructor() {
    super();
    this.state = {clicked: false, inputPanel: <Segment>
    <ExpenseTable>
    </ExpenseTable>
    <ExpenseBarChart>
    </ExpenseBarChart>
    <ExpensePieChart>
    </ExpensePieChart>
    </Segment>};
    this.handleItemClick1 = this.handleItemClick1.bind(this);
    this.handleItemClick2 = this.handleItemClick2.bind(this);
    this.handleItemClick3 = this.handleItemClick3.bind(this);
  }


  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Expense Page' onClick={this.handleItemClick1} />
          <Menu.Item name='Owe Page' onClick={this.handleItemClick2} />
          <Menu.Item name='Budgeting' onClick={this.handleItemClick3} />
          <Menu.Menu position='right'>
            <Login></Login>
          </Menu.Menu>
        </Menu>

        {this.state.inputPanel}


      </div>
    )
  }
  handleItemClick1() {
    this.setState({clicked: true,inputPanel: 
    <Segment>
  
    <ExpenseTable>
    </ExpenseTable>
    <ExpenseBarChart>
    </ExpenseBarChart>
    <ExpensePieChart>
    </ExpensePieChart>
    </Segment>});
}
handleItemClick2() {
  this.setState({clicked: true,inputPanel: 
  <Segment>
  <Friends>
  </Friends>
  <OweChart>
    </OweChart>
  </Segment>});
}
handleItemClick3() {
  this.setState({clicked: true,inputPanel: 
  <Segment>
  <Suggestion>
  </Suggestion>
  <ExpenseBarChart>
  </ExpenseBarChart>
  </Segment>});
}
}



export default TopMenu;
