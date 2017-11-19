import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import Header from './Header/Header.js'
import SidebarLeftOverlay from './Sidebar/Sidebar1.js';
import Login from './Login/Login.js';
import ExpenseTable from './ExpenseTable/ExpenseTable.js'
import Friends from './Friends/Friends.js'
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header>
        </Header>
        
        <SidebarLeftOverlay>
        </SidebarLeftOverlay>

      </div>
    );
  }
}

export default App;

