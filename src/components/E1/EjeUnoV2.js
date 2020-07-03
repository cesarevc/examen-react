import React, { useState } from 'react';

function EjeUnoV2 () {
    
    const [from, setFrom] = useState(0);

    const handleChange = (event) => {

        if(event.target.value >= 0 ) {
            setFrom(event.target.value)
        }
        
    }

    const handleContent = (from) => {

        let regex = new RegExp('(^101$)|^[1-9]');
    
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
            <input 
                value={from === 0 ? null: from }
                maxLength='2'
                onChange={(e) => handleChange(e)} 
            />
            {
                handleContent(from)
            }
        </div>
    );
}

export default EjeUnoV2;