import React, { useState, useCallback } from 'react';


const ItemCounterExtraClass = ({ initialValue, maxValue }) => {
    const [counter, setCounter] = useState(0);

    const decrement = useCallback(() => {
        setCounter(prevCounter => prevCounter - 1);
    }, []);

    const increment = useCallback(() => {
        setCounter(prevCounter => prevCounter + 1);
    }, []);

    return (
        <div>
            <h2>Item Counter Extra Class</h2>
            <br />
            <h1>{counter}</h1>
            <br />
            <br />
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
            <br />
            <br />
            <hr />
        </div>

    );
}

export default ItemCounterExtraClass;