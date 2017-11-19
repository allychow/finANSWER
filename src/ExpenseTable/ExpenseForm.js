import React, { Component } from 'react'
import axios from 'axios'
import { Dropdown, Button } from 'semantic-ui-react'

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', amount: 0, type: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);    
}

  handleClick(e) {
    console.log(this.state);
    e.preventDefault();
    axios.post('http://localhost:3001/api/expenses', {
        title: this.state.title,
        amount: this.state.amount,
        type: this.state.type
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleAmountChange(e) {
    this.setState({amount: e.target.value});
  }

  handleTypeChange(e, d) {
      console.log(d);
    this.setState({type: d.value});
  }

  render() {
    const transactionTypeOptions = [{text: 'Deposit', value: 'Deposit'},{text:'Withdrawal', value: 'Withdrawal'}];
    return (
    <div className="ui form">
          <div className="equal width fields">

        <div className="required field">
    <label>Description of Transaction</label>
    <input value={this.state.title} onChange={this.handleTitleChange} type="text" name="description" placeholder="Description" />
  </div>
  <div className="required field">
  <label>Amount</label>

  <div className="ui right labeled input">
        <label for="amount" className="ui label">$</label>
  <input value={this.state.amount} onChange={this.handleAmountChange} type="text" name="amount" placeholder="Amount" id="amount" />
  </div>
</div>
        <div className="required field">
            <label>Type of Transaction</label>
            <Dropdown placeholder="Type of Transaction" onChange={this.handleTypeChange} fluid selection options={transactionTypeOptions} />
        </div>
        </div>
        <Button
            attached='bottom'
            content='Submit Expense'
            onClick={this.handleClick}>
        </Button>
    </div>
    );
  }
}
export default ExpenseForm;