import React, { Component } from 'react'
import axios from 'axios'
import { Button, Grid, Segment } from 'semantic-ui-react'
import SendReceiptForm from '../Friends/SendReceiptForm.js'

export default class SendReceiptButton extends Component {
  constructor() {
    super();
    this.state = {clicked: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({clicked: true, inputPanel: <SendReceiptForm></SendReceiptForm>});
  }

  render() {
    return (
      <div>
          {this.state.inputPanel}
          { !this.state.clicked ? 
          <Button
            content='Send Receipt'
            onClick={this.handleClick}>
          </Button> : null
          }
          </div>
    )
  }
}