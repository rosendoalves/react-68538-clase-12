import React from 'react'

const ConditionalPropDinamic = ({condition, other}) => {
    const config = condition ? {
        className: `redClass ${other || ''}`,
        title: 'Titulo cuando la condición es verdadera'
    } : {}
  return (
    <>
     <h2 {...config}>Loading...</h2> 
    </>
  )
}

export default ConditionalPropDinamic
