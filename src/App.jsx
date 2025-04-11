import { useState } from 'react'
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap-icons/font/bootstrap-icons.css'
import Recipe from './Recipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Recipe /> 
    </>
  )
}

export default App
