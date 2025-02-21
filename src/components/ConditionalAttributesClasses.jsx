import React from 'react'
import './conditionalAttributes.css'

const ConditionalAttributesClasses = ({condition}) => {
  return (
    <>
      <h2 className={condition ? 'greenClass' : 'redClass'}>Loading...</h2>
    </>
  )
}

export default ConditionalAttributesClasses
