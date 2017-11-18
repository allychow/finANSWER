import React, { Component } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'

export default class ButtonExampleAttachedEvents extends Component {
  state = { log: [] }

  handleClick = () => this.updateLog('Button received click with mouse')

  handleKeyPress = (e) => {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault()
      this.updateLog('Button received click with keyboard')
    }
  }

  updateLog = message => this.setState({ log: [message, ...this.state.log] })

  render() {
    const { log } = this.state

    return (
     
          <Button
            attached='bottom'
            content='Add Expense'
            onClick={this.handleClick}
            onKeyPress={this.handleKeyPress}>
          </Button>
 
    )
  }
}