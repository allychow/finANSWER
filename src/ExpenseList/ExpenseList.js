import React, {Component} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios'

class TableExamplePagination extends Component {
    constructor() {
        super();
        this.state = {expenses: []}
        
    }
    componentDidMount() {
        var th = this;
        axios.get('http://localhost:3001/api/expenses')
        .then(function (res) {
            console.log(res.data);
            th.setState({expenses:res.data});
        })
        .catch(console.log)    
    }
    
    render() {
        const expensesTableCells = this.state.expenses.map((e) => <Table.Row><Table.Cell>{e.title}</Table.Cell><Table.Cell>{e.amount}</Table.Cell><Table.Cell>{e.type}</Table.Cell></Table.Row>);
        return (
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Type of Transaction</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {expensesTableCells}
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='left chevron' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='right chevron' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
        );
    }
}
export default TableExamplePagination