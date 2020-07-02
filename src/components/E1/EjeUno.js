import React from 'react';

function EjeUno () {

    const handleContent = () => {
        var content = [];
        var i;

        for(i = 0; i < 100;  i++) {

            var e = i +1;

            content.push(
                <div 
                    key={i}
                    value={i} 
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

    return handleContent();
}

export default EjeUno;