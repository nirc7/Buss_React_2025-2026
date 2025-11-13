
import './App.css';
import EHeader from './Elements/EHeader';
import FCPerson from './Functinal Components/FCPerson';


function App() {

  return (
    <div>
      {EHeader} <br />
      <FCPerson name="avi" grade="100"/> <br />
      <FCPerson name="benny" grade="99"/> <br />
      <FCPerson name="charklie" grade="50"/> <br />
      <div>Hello World!</div>
      <div>stam</div>
    </div>
  )
}

export default App
