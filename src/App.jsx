import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import LoadingComponent from './components/LoadingComponent'
import RenderConditional1 from './components/RenderConditional1'
import RenderConditional2 from './components/RenderConditional2'
import RenderConditional3 from './components/RenderConditional3'
import RenderConditional4 from './components/RenderConditional4'
import ConditionalPropStyling from './components/ConditionalPropStyling'
import ConditionalAttributesClasses from './components/ConditionalAttributesClasses'
import ConditionalAttributesMultiClass from './components/ConditionalAttributesMultiClass'
import ConditionalPropDinamic from './components/ConditionalPropDinamic'
import ReactMemo from './components/ReactMemo'

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
     {/* <button onClick={() => setLoading(!loading)}>
      {loading ? 'Detener carga' : 'Iniciar carga'}
     </button>
     <Loader loading={loading}/> */}
     {/* <ConditionalPropStyling condition={false}/> */}
     {/* <ConditionalAttributesClasses condition={true}/> */}
     {/* <ConditionalAttributesMultiClass condition={true}/> */}
     {/* <ConditionalAttributesMultiClass condition={true} other={"newClass"}/> */}
     {/* <ConditionalPropDinamic condition={true} other={"newClass"}/> */}
     <ReactMemo item={{name: "Curso React", modifyDate: new Date() + 1}}/>
    </>
  )
}

export default App
