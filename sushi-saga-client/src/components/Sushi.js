import React from 'react'

class Sushi extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      eaten: props.eaten
    }
  }

  handleClick = () => {
    if (!this.state.eaten && this.props.appClick(this.props.price, this.props.id)) {
      this.setState({ eaten: true })
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleClick}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.state.eaten ?
              null
            :
              <img src={this.props.img_url} width="100%" alt="" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi