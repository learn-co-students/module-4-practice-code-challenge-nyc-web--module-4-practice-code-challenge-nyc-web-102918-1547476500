import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const renderSushi = (props) => {
  let start = props.i
  let last = start + 4

  return props.sushis.slice(start,last).map(sushi => <Sushi key = {sushi.id}sushi = {sushi} whenEaten = {props.whenEaten} money = {props.money}/>)
}

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {renderSushi(props)}
        <MoreButton start = {props.i} changeSushiStart = {props.changeSushiStart}/>
      </div>


    </Fragment>
  )
}

export default SushiContainer