import Efecto from './components/Efecto'
import Ejercicio1 from './components/Ejercicio1'
import Inicio from './components/Inicio'
import Formulario from './components/Formulario'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Efecto' element={<Efecto/>}/>
        <Route path='/Ejercicio1' element={<Ejercicio1/>}/>
        <Route path='/Formulario' element={<Formulario/>}/>
      </Routes>
    </>
  )
}

export default App
