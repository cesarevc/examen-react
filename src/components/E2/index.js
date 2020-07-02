import React from 'react';
// Ejercicio 2
import EjeDos from './EjeDos';
import EjeDosV1 from './EjeDosV1';
import EjeDosV2 from './EjeDosV2';
// styles
import '../../App.css';

function EjercicioDos () {
    return (
        <div className="App">
            <header className="App-header">
                <EjeDos />
                <EjeDosV1 />
                <EjeDosV2 />
            </header>
        </div>
    );
}

export default EjercicioDos;