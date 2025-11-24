
import './App.css';
import CCCalculator from './ClassComps/CCCalculator';
import CCCar from './ClassComps/CCCar';
import CCParent from './ClassComps/CCParent';
import EHeader from './Elements/EHeader';
import FCStudent from './FuncComps/FCStudent';

function App() {

  return (
    <div>
      {EHeader}
      <CCCalculator/>
      <CCParent />

      <CCCar model="BMW" speed={200} />
      <CCCar model="Porsche" speed={300} /> <br />

      <FCStudent name={"avi"} grade={100} />
      <FCStudent name="benny" grade={99} />
      <FCStudent name="chakrue" grade={50} />
    </div>
  )
}

export default App
