import React from 'react'

const RenderConditional3 = ({condition}) => {
  return(
    <>
      <h2>{condition ? "La condición es verdadera" : "La condición es falsa"}</h2>
    </>
  )
}

export default RenderConditional3
