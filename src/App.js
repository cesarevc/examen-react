import React from 'react';
import EjeDos from './components/E2/EjeDos';
import EjeDosV1 from './components/E2/EjeDosV1';

import EjeDosV2 from './components/E2/EjeDosV2';



import './App.css';
// import ejercicioDosV1 from './components/E2/ejercicioDosV1';

function App() {
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

export default App;
