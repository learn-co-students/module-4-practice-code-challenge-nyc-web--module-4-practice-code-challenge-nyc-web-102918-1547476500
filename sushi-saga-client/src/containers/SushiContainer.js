import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = {
    sushis: [],
    page: 0
  }

  componentDidMount() {
    fetch("http://localhost:3000/sushis")
      .then(r => r.json())
      .then(sushis => this.setState({ sushis }))
  }

  handleClick = () => {
    this.setState({ page: (this.state.page + 1) % this.state.sushis.length})
  }

  render() {
    const sushiLim = (((this.state.page * 4) + 4) % this.state.sushis.length) || this.state.sushis.length

    return (
      <Fragment>
        <div className="belt">
          {this.state.sushis.slice((this.state.page * 4) % this.state.sushis.length, sushiLim).map(sushi => <Sushi key={ sushi.id } {...sushi} appClick={this.props.handleSushiClick} eaten={this.props.eaten.includes(sushi.id)}/>)}
          <MoreButton handleClick={this.handleClick}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer