import React from 'react'
import { Image, List } from 'semantic-ui-react'
import SendReceiptButton from '../Buttons/SendReceiptButton.js'

const Suggestion = () => (
  <List horizontal>
    <List.Item>

      <List.Content>
        <List.Header>A</List.Header>
        Stop buying Chatime. 
      </List.Content>
    </List.Item>
    <List.Item>

      <List.Content>
        <List.Header>B</List.Header>
        Go to hackathons for free food.
      </List.Content>

    </List.Item>
    <List.Item>

      <List.Content>
        <List.Header>C</List.Header>
      </List.Content>
    Have air for dinner. 
    </List.Item>
  </List>
)

export default Suggestion;