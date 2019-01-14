import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiIndex: 0,
    budget: 100,
    emptyPlates: [],
    inputValue: ''
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      data.forEach(sushi => sushi['isEaten'] = false)
      this.setState({
        sushis: data
      })
    })
  }

  handleButton = () => {
    if (this.state.sushiIndex < 96) {
      this.setState({
        sushiIndex: this.state.sushiIndex + 4
      })
    }
    else {
      this.setState({
        sushiIndex: 0
      })
    }
  }

  handleEaten = (sushiId) => {
    let foundSushi = this.state.sushis.find(sushi => sushi.id === sushiId)
    if (this.state.budget >= foundSushi.price) {
      foundSushi.isEaten = true
      this.setState({
        budget: this.state.budget - foundSushi.price,
        emptyPlates: [...this.state.emptyPlates, "plate"]
      })
    }
    else {
      console.log("You ain't got the funds brah");
    }
  }

  changeFunds = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  submitFunds = (event) => {
    event.preventDefault()
    this.setState({
      budget: this.state.budget + parseInt(this.state.inputValue)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} sushiIndex={this.state.sushiIndex} handleButton={this.handleButton} handleEaten={this.handleEaten}/>
        <Table budget={this.state.budget} emptyPlates={this.state.emptyPlates}/>
        <SushiWallet changeFunds={this.changeFunds} submitFunds={this.submitFunds} inputValue={this.state.inputValue}/>
      </div>
    );
  }
}

export default App;
