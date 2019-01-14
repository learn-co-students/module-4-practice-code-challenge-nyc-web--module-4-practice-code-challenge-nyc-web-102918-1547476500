import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    i: 0,
    eaten: [],
    money: 100
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(data => this.setState({sushis: data}))
  }

  changeSushiStart = (num) => {
    this.setState({i: num})
  }

  whenEaten = (sushi) => {

    if (this.state.sushis.includes(sushi)){
       const updated = this.state.sushis.filter(s => s !== sushi)
 
       const updatedPrice = this.state.money - sushi.price

       if (updatedPrice >= 0 ) {
          this.setState({
            sushis: updated, 
            eaten: [...this.state.eaten, sushi],
            money: updatedPrice
          })
       }

    }
  }


  addMoney = (money) => {
    const updatedMoney = this.state.money + parseInt(money)
    this.setState({money: updatedMoney})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis= {this.state.sushis} i = {this.state.i} changeSushiStart = {this.changeSushiStart} whenEaten = {this.whenEaten} money = {this.state.money}/>

        <Table eaten = {this.state.eaten} money = {this.state.money} addMoney = {this.addMoney}/>
      </div>
    );
  }
}

export default App;