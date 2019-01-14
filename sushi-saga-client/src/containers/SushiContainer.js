import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.slice(props.sushiIndex, props.sushiIndex + 4).map(sushi => <Sushi handleEaten={props.handleEaten} key={sushi.id} {...sushi} />)}
        <MoreButton handleButton={props.handleButton} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
