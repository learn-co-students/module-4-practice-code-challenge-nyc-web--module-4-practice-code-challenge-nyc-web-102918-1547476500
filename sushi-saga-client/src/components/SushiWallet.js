import React, { Component } from 'react';

export default class SushiWallet extends Component {

    state = {money: 0 }

    handleChange = (event) => {
        this.setState({money: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        return this.props.addMoney(this.state.money)

    }
    render(){
        return(
            <div>
                <form onSubmit = {(event) => this.handleSubmit(event)}> 
                    <div>
                        <label>How much do you want to add?</label>
                        <input type="number" name= 'money' value = {this.state.money} onChange = {(event) => this.handleChange(event)}/>

                        <button type = "submit"> Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}