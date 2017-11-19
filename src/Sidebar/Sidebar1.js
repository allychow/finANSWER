import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import ExpenseTable from '../ExpenseTable/ExpenseTable.js'
import AddExpenseButton from '../Buttons/AddExpenseButton.js'
import Friends from '../Friends/Friends.js'
import Login from '../Login/Login.js'
import Suggestion from '../Suggestion/Suggestion.js'

class MenuExampleSecondaryPointing extends Component {

  constructor() {
    super();
    this.state = {clicked: false, inputPanel: <Segment>
    <ExpenseTable>
    </ExpenseTable>
    </Segment>};
    this.handleItemClick1 = this.handleItemClick1.bind(this);
    this.handleItemClick2 = this.handleItemClick2.bind(this);
    this.handleItemClick3 = this.handleItemClick3.bind(this);
  }

  
  render() {
    var weatherNetworkBaseUrl = "https://hackathon.pic.pelmorex.com/api";
    var precipUrl = "https://hackathon.pic.pelmorex.com/api/precip/date?locationcode=CAON0383&locale=en-CA";
    var dataShort = "https://hackathon.pic.pelmorex.com/api/data/shortterm?locationcode=CAON0383";
    
    axios.get(weatherNetworkBaseUrl+'/search/string?keyword=London&prov=ON')
    .then(function (res) {
      var locationCode = res.data.code;
        console.log(locationCode);
    })
    .catch(console.log)  

    axios.get(precipUrl)
    .then(function (res) {
      var verylongspeech=res.data.speech;
        console.log(verylongspeech);
    })
    .catch(console.log) 
    axios.get(dataShort)
    .then(function (res) {
      var dataValue=res.data;
        //console.log(dataValue);
    })
    .catch(console.log) 
    
    weatherPeriodData(){
    var dataList = [100]; 
    var suggestionList = [100]; 

    for(var i=0;i<dataValue.length;i++){
      if(res.dat.period==3){
        dataList[i]=dataValue.date;
      }
        if(dataValue.rain>=0.7){
          suggestionList[i] = "There will be a high chance of rain today! Please dress appropriately and bring an umbrella in case.";
        }
        if(dataValue.snow>=0.7){
          suggestionList[i] = "There will be a high chance of snow today! Please wear a jacket and your winter boots.";
        }
    }
    for(var i=0;i<dataList.length;i++){
      console.log(dataList[i]);
      console.log(suggestionList[i]);
    }
    }
    



    return (
      <div>
         
        <Menu pointing secondary>
          <Menu.Item name='Expense Page' onClick={this.handleItemClick1} />
          <Menu.Item name='Owe Page' onClick={this.handleItemClick2} />
          <Menu.Item name='Budgeting'  onClick={this.handleItemClick3} />
          <Menu.Menu position='right'>
          <Login></Login>
          </Menu.Menu>
        </Menu>
      
        {this.state.inputPanel}


      </div>
    )
  }
  handleItemClick1() {
    this.setState({clicked: true,inputPanel: 
    <Segment>
    <ExpenseTable>
    </ExpenseTable>
    </Segment>});
}
handleItemClick2() {
  this.setState({clicked: true,inputPanel: 
  <Segment>
  <Friends>
  </Friends>
  </Segment>});
}
handleItemClick3() {
  this.setState({clicked: true,inputPanel: 
  <Segment>
  <Suggestion>
  </Suggestion>
  </Segment>});
}
}



export default MenuExampleSecondaryPointing;
