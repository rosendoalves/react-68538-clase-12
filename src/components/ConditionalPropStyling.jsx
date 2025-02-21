import React from 'react'

const ConditionalPropStyling = ({condition}) => {
  return (
    <>
      <h2 style={
        {color: !condition ? 'red' : 'green'}
      }>Loading...</h2>
    </>
  )
}

export default ConditionalPropStyling
