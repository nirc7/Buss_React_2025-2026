import { Component } from 'react';

export default class CCPerson extends Component {
    constructor(props) {
        super(props);
        this.state = { coutner: 0 };
    }


    btnSet7 = () => {
        this.setState({ coutner: 7 }, () => {
            console.log('after teh state is cha,nged to 7!', this.state.coutner);
            console.log('go 2 DB....');
        });
    }

    render() {

        console.log('render');


        return (
            <div>
                <h3>person</h3>
                counter={this.state.coutner} <br />
                <button onClick={this.btnSet7}>7</button>
            </div>
        )
    }
}
