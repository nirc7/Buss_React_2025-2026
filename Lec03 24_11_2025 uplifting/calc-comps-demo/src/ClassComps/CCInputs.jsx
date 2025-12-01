import { Component } from 'react';

export default class CCInputs extends Component {
    constructor(props) {
        super(props);

        this.state = { num1: '', num2: '' };

    }

    chgnum1 = (e) => {
        this.setState({ num1: Number(e.target.value) });
    }

    chgnum2 = (e) => {
        this.setState({ num2: Number(e.target.value) });
    }

    btnAdd = () => {
        this.props.sendRes2Parent(this.state.num1 + this.state.num2);
        this.setState({ num1: '', num2: '' });
    }

    render() {
        return (
            <div>
                NUM1:<input type="text" onChange={this.chgnum1}
                    placeholder='enter num1...'
                    value={this.state.num1} /> <br />
                NUM2:<input type="text" onChange={this.chgnum2}
                    placeholder='enter num2...'
                    value={this.state.num2} /><br />
                <button onClick={this.btnAdd} >+</button> <br />
            </div>
        )
    }
}
