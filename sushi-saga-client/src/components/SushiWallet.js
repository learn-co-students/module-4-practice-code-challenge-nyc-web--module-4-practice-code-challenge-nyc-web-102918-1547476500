import React, { Fragment } from 'react'

const SushiWallet = (props) => {

  return (
    <div>
      <form>
      Add Funds: <input onChange={props.changeFunds} value={props.inputValue}/>
      <button type="submit" onClick={props.submitFunds}>Submit</button>
      </form>
    </div>
  )
}

export default SushiWallet
