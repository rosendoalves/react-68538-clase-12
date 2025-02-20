import React, { useEffect, useState } from 'react'

const LoadingComponent = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 10000)
    }, [])

  return (
    <>
      {loading ? <h2>Loading...</h2> : <h2>Loaded</h2>}
    </>
  )
}

export default LoadingComponent
