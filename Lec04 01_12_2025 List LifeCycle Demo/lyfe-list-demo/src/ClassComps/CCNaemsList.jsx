import { Component } from 'react';

export default class CCNaemsList extends Component {

    render() {


        let names = ['avi', 'ben', 'cajhrlie'];

        let namesStr = names.map((name, ind) => {
            console.log(ind);
            return <a href="#" key={ind}
                className="list-group-item list-group-item-action">
                {name}</a>
        });


        return (
            <div>
                <div className="list-group">
                    {namesStr}
                </div>

                {/* <ul>
                    {namesStr}
                </ul> */}
            </div>
        )
    }
}
