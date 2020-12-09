import React, { useState, useEffect } from 'react';

const ConsoleRepeater = () => {
    console.log('render');

    const [firstName, setFirstName] = useState('Ethelyn');

    useEffect(() => {
        //fetch, addeven
        console.log('ejecución effect');
        const id = setInterval(() => {
            console.log(firstName);
        }, 25000);

        return () => {
            console.log('cleanup');
            clearInterval(id);
        };

    }, [firstName]);


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    return (
        <div>
            <h2>Console Repeater</h2>
            <br />
            <h2>{firstName}</h2>
            <br /><input onInput={handleFirstName} type="text" name="" id="" />
            <br /><br />
            <hr />
        </div>
    );
}

export default ConsoleRepeater;