import  { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default class CCInputs extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', age: '' };
    }

    btnAddPerons = () => {
        this.props.getPerson({
            id: uuidv4(),
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div style={{ border: '2px solid red', margin: 10, padding: 5 }}>
                <h3>iinputs</h3>
                name: <input type="text" onChange={(e) => this.setState({ name: e.target.value })} /> <br />
                age: <input type="text" onChange={(e) => this.setState({ age: e.target.value })} /> <br /> <br />
                <button
                    onClick={this.btnAddPerons}
                    className='btn btn-outline-danger'>Add preson</button>
            </div>
        )
    }
}
