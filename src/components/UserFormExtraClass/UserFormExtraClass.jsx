import React, { useRef, useState, useEffect, useMemo } from 'react';

const useHandleChangerSuperPower = (init) => {
    const [data, setData] = useState(init);

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    return [data, handleChange];
}

const getDefaultData = () => {
    console.log('render sólo primera vez')
    return { firstName: 'Florine', lastName: 'Vandervort' };
}

const UserFormExtraClass = () => {
    const defaultData = useMemo(() => getDefaultData(), []);
    const [{ firstName, lastName }, handleChange] = useHandleChangerSuperPower(defaultData);

    const inputFocus = useRef();

    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    return (
        <div>
            <h2>Use Form Extra Class</h2>
            <br />
            <h2>{firstName}</h2>
            <h3>{lastName}</h3>
            <br />
            <input ref={inputFocus} onInput={handleChange} type="text" name="firstName" id="firstName" />
            <br />
            <input onInput={handleChange} type="text" name="lastName" id="lastName" />
            <br />
            <br />
            <hr />
        </div>
    );
}

export default UserFormExtraClass;