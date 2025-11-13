
export default function FCPerson(props) {

  if (props.grade < 60) {
    return (
      <h3>you Failed!</h3>
    );
  }

  return (
    <div>
      <h3>Person</h3>
      name =  {props.name}<br />
      grade = {props.grade}
    </div>
  );
}