import React, { Component } from 'react';
import Header from './Header1/Header.js'
import SidebarLeftOverlay from './Sidebar/Sidebar1.js';

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
