import React, { Component } from 'react';
import Header from './Header1/Header.js'
import MenuExampleSecondaryPointing from './Sidebar/Sidebar1.js';
import Login from './Login/Login.js';
import TableExamplePagination from './ExpenseList/ExpenseList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Header>
        </Header>
        <MenuExampleSecondaryPointing>
        </MenuExampleSecondaryPointing>

        <Login></Login>
      </div>
    );
  }
}

export default App;
