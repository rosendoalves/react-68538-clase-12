import React from 'react'

const RenderConditional1 = ({condition}) => {
  if(condition === true) {
    return <h2>La condición es verdadera</h2>
  }

  return <h2>La condición es falsa</h2>
}

export default RenderConditional1
