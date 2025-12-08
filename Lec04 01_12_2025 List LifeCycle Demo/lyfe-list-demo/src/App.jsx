import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCPerson from './ClassComps/CCPerson'
import CCNaemsList from './ClassComps/CCNaemsList'
import CCNamesListProj from './ClassComps/CCNamesListProj'
import CCRefsDemo from './ClassComps/CCRefsDemo'

function App() {

  return (
   <div>
    <CCRefsDemo/>
    <CCNamesListProj/>
    <CCNaemsList/>
    {/* CCPerons cc= new CCPerson();
    cc.render() */}
    <CCPerson/>
   </div>
  )
}

export default App
