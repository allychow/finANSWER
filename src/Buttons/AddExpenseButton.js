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
    this.setState({clicked: true});
    if (this.state.clicked === true) {
      this.setState({inputPanel: <ExpenseForm></ExpenseForm>});
    }
  }

  render() {
    return (
      <div>
          {this.state.inputPanel}
          <Button
            attached='bottom'
            content='Add Expense'
            onClick={this.handleClick}>
          </Button>
          </div>
    )
  }
}