import React from 'react'

class SushiWallet extends React.Component {
	state = {
		addMoney: ""
	}

	handleChange = e => {
		this.setState({ addMoney: e.target.value })
	}

	handleSubmit = e => {
		this.props.handleSubmit(e, this.state.addMoney)
		this.setState({ addMoney: "" })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input id="money" type="text" value={this.state.addMoney} onChange={this.handleChange} />
				<button type="submit">Add Money</button>
			</form>
		)
	}
}

export default SushiWallet