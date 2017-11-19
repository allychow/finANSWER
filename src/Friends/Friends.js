import React from 'react'
import { Image, List } from 'semantic-ui-react'
import SendReceiptButton from '../Buttons/SendReceiptButton.js'
import Allison from '../Img/allison.jpg'
import Colleen from '../Img/colleen.jpg'
import Welson from '../Img/welson.jpg'
import Ali from '../Img/ali.jpg'

const Friends = () => (
  <List horizontal>
    <List.Item>
      <Image avatar src={Allison} />
      <List.Content>
        <List.Header>Allison</List.Header>
        Owes:
      </List.Content>
      <SendReceiptButton>
      </SendReceiptButton>
    </List.Item>
    <List.Item>
      <Image avatar src={Colleen} />
    <List.Content>
        <List.Header>Colleen</List.Header>
        Owes:
      </List.Content>
      <SendReceiptButton>
      </SendReceiptButton>
    </List.Item>
    <List.Item>
    <Image avatar src={Welson} />
    <List.Content>
        <List.Header>Welson</List.Header>
        Owes:
      </List.Content>
      <SendReceiptButton>
      </SendReceiptButton>
    </List.Item>
    <List.Item>
    <Image avatar src={Ali} />
    <List.Content>
        <List.Header>Ali</List.Header>
        Owes:
      </List.Content>
      <SendReceiptButton>
      </SendReceiptButton>
    </List.Item>
  </List>
)

export default Friends;