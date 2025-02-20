import React from 'react'

const RenderConditional2 = ({condition}) => {
  return(
    <>
      {condition && <h2>La condición es verdadera</h2>}
      {!condition && <h2>La condición es falsa</h2>}
    </>
  )
}

export default RenderConditional2
