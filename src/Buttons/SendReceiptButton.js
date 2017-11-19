import React, { Component } from 'react'
import axios from 'axios'
import { Button, Grid, Segment } from 'semantic-ui-react'
import ExpenseForm from '../ExpenseTable/ExpenseForm.js'

export default class SendReceiptButton extends Component {
  constructor() {
    super();
    this.state = {clicked: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({clicked: true});
  }

  render() {
    return (
      <div>
          {this.state.inputPanel}
          { !this.state.clicked ? 
          <Button
            content='Send Recipt'
            onClick={this.handleClick}>
          </Button> : null
          }
          </div>
    )
  }
}