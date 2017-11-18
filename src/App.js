import React, { Component } from 'react';
import Header from './Header1/Header.js'
import SidebarLeftOverlay from './Sidebar/Sidebar1.js';
// import Header from './Header/Header.js';
import Login from './Login/Login.js';


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Header>
        </Header>
        <SidebarLeftOverlay>
        </SidebarLeftOverlay>
        
        <Login></Login>
      </div>
    );
  }
}

export default App;
