import { Component } from 'react'

export default class CCPerson extends Component {
    constructor(props) {
        super(props);

        console.log('ctor');        
        //async + setState()

    }

    componentDidMount() {
        console.log('did mount! ..DB async setstate()'); 
    }

    componentWillUnmount(){
        console.log('will unmount');        
    }

    render() {

        console.log('render');
        
        //async + setState()


        return (
            <div>
                <h3>Person</h3>
                name: avi <br />
                age :50 <br />
            </div>
        )
    }
}
