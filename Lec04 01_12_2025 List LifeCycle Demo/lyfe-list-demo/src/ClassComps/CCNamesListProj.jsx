import { Component } from 'react'
import CCInputs from './CCInputs'
import FCShowList from '../FuncComps/FCShowList'

export default class CCNamesListProj extends Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: [
                { id: 1, name: 'avi', age: 40 },
                { id: 2, name: 'ben', age: 50 }]
        };
    }

    getPerson = (per) => {
        console.log(per);
        let newPersons = [...this.state.persons, per];
        console.log(newPersons);
        this.setState({ persons: newPersons });
    }

    deletePerson = (id) => {
        console.log(id);
        let newP = this.state.persons.filter(per => per.id !== id);
        this.setState({ persons: newP });
    }

    render() {
        return (
            <div style={{
                display: 'flex', flexDirection: 'row',
                justifyContent: 'space-between', border: '2px solid green'
            }}>
                <CCInputs getPerson={this.getPerson} />
                <FCShowList persons={this.state.persons} deletePerson={this.deletePerson} />
            </div>
        )
    }
}
