import React from 'react'
import { Image, List } from 'semantic-ui-react'
import SendReceiptButton from '../Buttons/SendReceiptButton.js'

const Friends = () => (
  <List horizontal>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/tom.jpg' />
      <List.Content>
        <List.Header>Tom</List.Header>
        Owes:
      </List.Content>
      <SendReceiptButton>
      </SendReceiptButton>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/christian.jpg' />
      <List.Content>
        <List.Header>Christian Rocha</List.Header>
        Owes:
      </List.Content>
      <SendReceiptButton>
      </SendReceiptButton>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/matt.jpg' />
      <List.Content>
        <List.Header>Matt</List.Header>
        Owes:
      </List.Content>
      <SendReceiptButton>
      </SendReceiptButton>
    </List.Item>
  </List>
)

export default Friends;