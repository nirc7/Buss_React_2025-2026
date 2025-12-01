import React from 'react'

export default function FCShowList(props) {

    let perslonsStr = props.persons.map(per => {
        return <a href="#" key={per.id}
            className="list-group-item list-group-item-action">
            {per.name} -- {per.age} <span
                onClick={() => props.deletePerson(per.id)}>X</span> </a>
    });


    return (
        <div style={{ border: '2px solid red', margin: 10, padding: 5 }}>
            <h3>show list</h3>
            <div className="list-group">
                {perslonsStr}
            </div>
        </div>
    )
}
