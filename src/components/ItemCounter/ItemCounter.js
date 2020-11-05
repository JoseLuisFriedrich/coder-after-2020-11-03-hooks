import React, { useState } from 'react';

const ItemCounter = ({ initialValue, maxValue, onAdd }) => {
    const [counter, setCounter] = useState(0);

    const decrement = () => {
        setCounter(counter - 1);
        // setCounter(counter - 1);
    }

    const increment = () => {
        //setCounter(counter + 1);
        setCounter(counter + 1);
        // setCounter(prevCounter => prevCounter + 1);

        //onAdd(counter);
    }

    return (
        <div>
            <h2>Item Counter</h2>
            <br />
            <h1>{counter}</h1>
            <br />
            <br />
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
            <button onClick={() => onAdd(counter)}>agregar</button>
            <br />
            <br />
            <hr />
        </div>

    );
}

export default ItemCounter;