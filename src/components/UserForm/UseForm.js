import React, { useState } from 'react';

const UserForm = () => {
    const [data, setData] = useState({ firstName: 'Florine', lastName: 'Vandervort' });

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    return (
        <div>
            <h2>Use Form</h2>
            <br />
            <h2>{data.firstName}</h2>
            <h3>{data.lastName}</h3>
            <br />
            <input onInput={handleChange} type="text" name="firstName" id="firstName" />
            <br />
            <input onInput={handleChange} type="text" name="lastName" id="lastName" />
            <br />
            <br />
            <hr />
        </div>
    );
}

export default UserForm;