import React, { Component } from 'react'
import { Image, List } from 'semantic-ui-react'
import SendReceiptButton from '../Buttons/SendReceiptButton.js'
import axios from 'axios'

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {suggestionList:[]};
    this.suggestion = [];
    // this.generateSuggestion = this.generateSuggestion.bind(this);
    this.generateWeatherSuggestions = this.generateWeatherSuggestions.bind(this);
    this.generateWeatherSuggestions();
  }
  generateWeatherSuggestions() {
    var precipUrl = "https://hackathon.pic.pelmorex.com/api/precip/date?locationcode=CAON0383&locale=en-CA";
    var dataShort = "https://hackathon.pic.pelmorex.com/api/data/shortterm?locationcode=CAON0383";
    var th = this;
    axios.get(precipUrl)
      .then(function (res) {
        var verylongspeech = res.data.speech;
        console.log(verylongspeech);
      })
      .catch(console.log)
    axios.get(dataShort)
      .then(function (res) {
        var suggestion = [];
        console.log(res);
        res.data.data.forEach(function(element) {
          if (element.period == 3) {
              if (element.rain >= 0.7) {
                suggestion.push({date: element.time, suggestion: "There will be a high chance of rain today! Please dress appropriately and bring an umbrella in case."});
            } else if (element.snow >= 0.7) {
              suggestion.push({date: element.time, suggestion: "There will be a high chance of snow today! Please wear a jacket and your winter boots."});
            }
          }
        }, this);

        th.setState({suggestionList:suggestion});
        // console.log(suggestion);
      })
      .catch(console.log)
  }

  render() {
    const expensesTableCells = this.state.suggestionList.map((e) => <List.Item>
              <List.Content>
                <List.Header>{e.date}</List.Header>
                {e.suggestion}
          </List.Content>
            </List.Item>);
    return (
      <List horizontal>
        {expensesTableCells}
        <List.Item>

          <List.Content>
            <List.Header>A</List.Header>
            Stop buying Chatime.
      </List.Content>
        </List.Item>
        <List.Item>

          <List.Content>
            <List.Header>B</List.Header>
            Go to hackathons for free food.
      </List.Content>

        </List.Item>
        <List.Item>

          <List.Content>
            <List.Header>C</List.Header>
          </List.Content>
          Have air for dinner.
    </List.Item>
      </List>)
  }
}

export default Suggestion;