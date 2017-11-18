import React, {Component} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios'

class ExpenseTable extends Component {
    constructor() {
        super();
        this.state = {expenses: [], total: 0};
        this.sum = this.sum.bind(this);
    }
    componentDidMount() {
        var th = this;
        axios.get('http://localhost:3001/api/expenses')
        .then(function (res) {
            console.log(res.data);
            th.setState({expenses:res.data});
            th.sum();
        })
        .catch(console.log)    
    }

    sum() {
        var total = 0;
        this.state.expenses.forEach(function(element) {
            if (element.type == "Deposit" || element.type == "deposit") {
                total += element.amount;
            } else {
                total -= element.amount;
            }
        });
        this.setState({total: total});
        console.log(this.state);
    }
    
    render() {
        const expensesTableCells = this.state.expenses.map((e) => <Table.Row><Table.Cell>{e.title}</Table.Cell><Table.Cell>{e.amount}</Table.Cell><Table.Cell>{e.type}</Table.Cell></Table.Row>);
        return (
            // <div class="ui card">
            //   <div class="content">
            //     <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg">
            //     <div class="header">
            //       Elliot Fu
            //     </div>
            //     <div class="meta">
            //       Friends of Veronika
            //     </div>
            //     <div class="description">
            //       Elliot requested permission to view your contact details
            //     </div>
            //   </div>
            //   <div class="extra content">
            //     <div class="ui two buttons">
            //       <div class="ui basic green button">Approve</div>
            //       <div class="ui basic red button">Decline</div>
            //     </div>
            //   </div>
            // </div>
            
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
  </Table>
        );
    }
}
export default ExpenseTable