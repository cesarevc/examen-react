import React, { useState } from 'react';

function EjeUnoV1 () {
    
    const [from, setFrom] = useState(0);

    const handleContent = (from) => {

        let regex = new RegExp('^[0-9]$');
    
        if(!regex.test(from)) {
            return <h1>solo valores numericos</h1>
        }


        var content = [];
        var i = from;

        for(i; i < 100;  i++) {

            var e = i;

            content.push(
                <div 
                    key={e}
                    value={e} 
                    style={{
                        background: e%5 === 0 ? 'white' : e%5 === 1 ? 'red' : e%5 === 2 ? 'green' : e%5 === 3 ? 'blue' : e%5 === 4 ? 'black' : null
                    }}
                >
                    {e}
                </div>
            )
        }

        return content;
    }

    return (
        <div>
            <input onChange={(e) => setFrom(e.target.value) } />
            {
                handleContent(from)
            }
        </div>
    );
}

export default EjeUnoV1;