import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

// Endpoint!
// http://localhost:3000/sushis

class App extends Component {
	state = {
		money: 250,
		eaten: []
	}

	handleSubmit = (e, funding) => {
		e.preventDefault()
		this.setState({ money: this.state.money + parseInt(funding, 10) })
	}

	handleSushiClick = (cost, id) => {
		if (this.state.money >= cost) {
			this.setState({ money: this.state.money - cost, eaten: [...this.state.eaten, id] })
			return true
		} else {
			return false
		}
	}

  render() {
    return (
      <div className="app">
        <SushiContainer handleSushiClick={this.handleSushiClick} eaten={this.state.eaten}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
        <SushiWallet handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;