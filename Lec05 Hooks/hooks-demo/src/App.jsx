import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HooksDemo from './HooksDemo'
import CCPerson from './CCPerson'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CCPerson />
      <HooksDemo />
    </>
  )
}

export default App
