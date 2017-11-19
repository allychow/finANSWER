import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import Header from './Header/Header.js'
import TopMenu from './TopMenu/TopMenu.js';
import Login from './Login/Login.js';
import ExpenseTable from './ExpenseTable/ExpenseTable.js'
import Friends from './Friends/Friends.js'
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header>
        </Header>
        <TopMenu>
        </TopMenu>

      </div>
    );
  }
}

export default App;

