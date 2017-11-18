import React, { Component } from 'react';
import Header from './Header/Header.js'
import SidebarLeftOverlay from './Sidebar/Sidebar1.js';
import Login from './Login/Login.js';


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Header>
        </Header>
        <Login></Login>
        <SidebarLeftOverlay>
        </SidebarLeftOverlay>
      </div>
    );
  }
}

export default App;
