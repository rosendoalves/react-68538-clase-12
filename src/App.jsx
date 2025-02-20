import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import LoadingComponent from './components/LoadingComponent'
import RenderConditional1 from './components/RenderConditional1'
import RenderConditional2 from './components/RenderConditional2'
import RenderConditional3 from './components/RenderConditional3'
import RenderConditional4 from './components/RenderConditional4'

function App() {

  const [loading, setLoading] = useState(false)

  return (
    <>
     {/* <h1>Hola</h1> */}
     {/* <LoadingComponent /> */}
     {/* <RenderConditional1 condition={true}/> */}
     {/* <RenderConditional2 condition={true}/> */}
     {/* <RenderConditional3 condition={false}/> */}
     {/* <RenderConditional4 item={
      {
        id: 1,
        max: 5,
        min: 1,
        inStock: true,
        name: 'Producto 1'
      }
     }
     inputType='button'
     /> */}
     <button onClick={() => setLoading(!loading)}>
      {loading ? 'Detener carga' : 'Iniciar carga'}
     </button>
     <Loader loading={loading}/>
    </>
  )
}

export default App
