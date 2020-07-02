import React,  { useState } from 'react';

import styles from './EjeDos.module.css';

function EjeDosV2 () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)} className={styles.buttonModified}>Add</button>
            <button onClick={() => setCount(count - 2)} className={styles.buttonModified}>Substract</button>
            <button onClick={() => setCount(count / 3)} className={styles.buttonModified}>Divide</button>
            <button onClick={() => setCount(0)} className={styles.buttonModified}>Reset</button>


            <div style={{background: count%3 === 0 ? 'red' : count%3 === 1 || count%3 === -1? 'green' : count%3 === 2 || count%3 === -2 ? 'blue' : 'white'} }>
                <h1>{count}</h1>

            </div>
        </div>
    );
}


export default EjeDosV2;