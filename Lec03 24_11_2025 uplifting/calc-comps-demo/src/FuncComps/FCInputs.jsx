
export default function FCInputs(props) {

  let num1=0, num2=0;

  const chgnum1 = (e) => {
    num1 = Number(e.target.value);
  }

  const chgnum2 = (e) => {
    num2 = Number(e.target.value);
  }

  const btnAdd = () => {
    props.sendRes2Parent(num1 + num2);
  }


  return (
    <div>
      NUM1:<input type="text" onChange={chgnum1} /> <br />
      NUM2:<input type="text" onChange={chgnum2} /><br />
      <button onClick={btnAdd} >+</button> <br />
    </div>
  )
}
