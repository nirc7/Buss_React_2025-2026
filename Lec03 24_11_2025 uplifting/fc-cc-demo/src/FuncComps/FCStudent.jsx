

export default function FCStudent(props) {

  let grade = props.grade;

  if (grade < 60) {
    return (
      <div>Failed!</div>
    );
  }

  grade += 5;

  function btnAddBonus() {
    console.log(grade);
    grade++;
    console.log(grade);
  }

  function chgAddres(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <h3>Studnet</h3>
      name = {props.name} <br />
      grade = {grade} <br />
      <button onClick={btnAddBonus}>Add Bonus</button> <br />
      address: <input type="text" onChange={chgAddres} />
    </div>
  );
}