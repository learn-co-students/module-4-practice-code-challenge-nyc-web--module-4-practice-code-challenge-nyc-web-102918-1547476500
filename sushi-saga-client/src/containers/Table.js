import React, { Fragment } from 'react'
import SushiWallet from '../components/SushiWallet'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
      
        <div className="stack">
          {
            renderPlates(props.eaten)
          }
        </div>
        <SushiWallet addMoney = {props.addMoney}/>
      </div>
    </Fragment>
  )
}

export default Table