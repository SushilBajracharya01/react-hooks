import React, { useState } from 'react';

const UseStateWithObj = () => {
    const [name, setName] = useState({firstName: '', lastName: ''});
    return (
        <div>

            <form>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" value={name.firstName} id="firstName" onChange={e => setName({...name,firstName: e.target.value})} />
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" value={name.lastName} id="lastName" onChange={e => setName({...name, lastName: e.target.value})} />
            </form>
            <h1>Hello, {`${name.firstName} ${name.lastName}`}</h1>
            <h2>{JSON.stringify(name)}</h2>

        </div>
    )
}

export default UseStateWithObj;