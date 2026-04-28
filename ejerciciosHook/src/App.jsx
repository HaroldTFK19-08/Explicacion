import { useState } from 'react'
import './App.css'
import Nombre from './components/Nombre1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nombre/>
    </>
  )
}

export default App
