import { useState } from "react";

export default function HooksDemo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    const [names, setNames] = useState({ name1: 'avi', name2: 'ben' });

    console.log('here...');

    const btnSet7 = () => {
        setCount(7);
    }

    const btnChgN1 = () => {
        setNames({ name1: 'eli', name2: names.name2 });
    }

    const btnChgN1Best = () => {
        setNames({ ...names,  name1: 'eli'});
    }


    return (
        <div>
            name1 = {names.name1}<br />
            name2 = {names.name2}<br />
            <button onClick={btnChgN1}>chg name1</button> <br />
            <button onClick={btnChgN1Best}>chg name1 best</button> <br />

            <br />


            count={count} <br />
            <button onClick={btnSet7} >set 7</button> <br />
            <button onClick={() => setCount(pervC => pervC + 1)} >++</button> <br />

            count2={count2} <br />
            <button onClick={() => setCount2(pervC => pervC + 1)} >2++</button> <br />
        </div>
    )
}
