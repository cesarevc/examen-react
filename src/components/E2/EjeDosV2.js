import React,  { useState } from 'react';
import style from './EjeDos.module.css';

function EjeDosV2 () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button 
                onClick={() => setCount(count + 1)} 
                className={style.btn_clss} 
                style={{
                    margin: '4',
                    background: "black",
                    color: "white",
                    padding: 8,
                    borderRadius: 8,
                    textTransform: "uppercase",
                    paddingLeft: 32,
                    paddingRight: 32
                }} 
            >Add</button>
            <button 
                onClick={() => setCount(count - 2)} 
                className={style.btn}
                style={{
                    margin: '4',
                    background: "black",
                    color: "white",
                    padding: 8,
                    borderRadius: 8,
                    textTransform: "uppercase",
                    paddingLeft: 32,
                    paddingRight: 32
                }} 
            >Substract</button>
            <button 
                onClick={() => setCount(count / 3)} 
                className={style.btn} 
                style={{
                    margin: '4',
                    background: "black",
                    color: "white",
                    padding: 8,
                    borderRadius: 8,
                    textTransform: "uppercase",
                    paddingLeft: 32,
                    paddingRight: 32
                }} 
            >Divide</button>
            <button 
                onClick={() => setCount(0)} 
                style={{
                    margin: '4',
                    background: "black",
                    color: "white",
                    padding: 8,
                    borderRadius: 8,
                    textTransform: "uppercase",
                    paddingLeft: 32,
                    paddingRight: 32
                }}  
            >Reset</button>


            <div style={{background: count%3 === 0 ? 'red' : count%3 === 1 ? 'green' : count%3 === 2 ? 'blue' : 'white'} }>
                <h1>{count}</h1>

            </div>
        </div>
    );
}


export default EjeDosV2;