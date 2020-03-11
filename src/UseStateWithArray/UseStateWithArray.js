import React, { useState } from 'react';

const UseStateWithArray = () => {
    const [items, setItems] = useState([]);


    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.ceil(Math.random() * 10)
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add number</button>
            <ul>
                {items.map(item=>(
                    <li key={item.id}>
                        {item.value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseStateWithArray;