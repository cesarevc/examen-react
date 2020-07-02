import React,  { useState } from 'react';


function EjeDos () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)} >Add</button>
            <button onClick={() => setCount(count - 2)} >Substract</button>
            <button onClick={() => setCount(count / 3)} >Divide</button>
            <button onClick={() => setCount(0)} >Reset</button>


            <h1>{count}</h1>
        </div>
    );
}


export default EjeDos;