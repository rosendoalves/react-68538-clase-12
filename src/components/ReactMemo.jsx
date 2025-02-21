import React from 'react'

// const ReactMemo = React.memo(componente, función comparadora)
const ReactMemo = React.memo(({item}) => {
    console.log('Rendering item....')
  return <li>{item.name}</li>
},
(oldProp, newProp) => oldProp.item.modifyDate === newProp.item.modifyDate // updated_at
)

export default ReactMemo
