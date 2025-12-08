import { v4 as uuidv4 } from 'uuid';

export default function FCInputs(props) {

    let name = '';
    let age = '';

    const btnAddPerons = () => {
        props.getPerson({
            id: uuidv4(),
            name: name,
            age: age
        });
    }


    return (
        <div style={{ border: '2px solid red', margin: 10, padding: 5 }}>
            <h3>FCinputs</h3>
            name: <input type="text" onChange={(e) => name = e.target.value} /> <br />
            age: <input type="text" onChange={(e) => age = e.target.value} /> <br /> <br />
            <button
                onClick={btnAddPerons}
                className='btn btn-outline-danger'>Add preson</button>
        </div>
    )
}
