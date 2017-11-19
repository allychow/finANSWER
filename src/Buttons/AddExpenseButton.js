import React, { Component } from 'react'
import axios from 'axios'
import { Button, Grid, Segment } from 'semantic-ui-react'
import ExpenseForm from '../ExpenseTable/ExpenseForm.js'

export default class AddExpenseButton extends Component {
  constructor() {
    super();
    this.state = {clicked: false, inputPanel: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({clicked: true,inputPanel: <ExpenseForm></ExpenseForm>});
  }

  render() {
    return (
      <div>
          {this.state.inputPanel}
          { !this.state.clicked ? 
          <Button
            attached='bottom'
            content='Add Expense'
            onClick={this.handleClick}>
          </Button> : null
          }
          </div>
    )
  }
}