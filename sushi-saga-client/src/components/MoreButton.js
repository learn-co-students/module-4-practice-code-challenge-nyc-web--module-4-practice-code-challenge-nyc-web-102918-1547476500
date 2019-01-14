import React from 'react'

const moreSushi = (props) => {
  if (props.start >= 99){
    props.changeSushiStart(0)
  }else{
    props.changeSushiStart(props.start + 4)
  }
}
const MoreButton = (props) => {
    return <button onClick={() => moreSushi(props)}>
            More sushi!
          </button>
}

export default MoreButton