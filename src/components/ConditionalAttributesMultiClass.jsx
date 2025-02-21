import React from 'react'
import './conditionalAttributes.css'

const ConditionalAttributesMultiClass = ({condition, other}) => {
  return (
    <>
      {/* <h2 className={`${condition ? 'greenClass' : 'redClass'} ${other && 'otherClass'}`}>Loading...</h2> */}
      <h2 className={`${condition ? 'greenClass' : 'redClass'} ${other || ''}`}>Loading...</h2>
    </>
  )
}

export default ConditionalAttributesMultiClass
