import React, { useState } from 'react';


function SchedulingApp() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName: '', lastName: ''});


    const deleteItem =(i)=> {
        let newList = [...list];
        newList.splice(i,1);
        console.log(newList);
        setList(newList);
    }
    return (
        <div> 
            <h1>Scheduling APp</h1>
            <input type="text" onChange={(e)=>setItem(e.target.value)} value={item} />
            <button onClick={()=>{
                let newList = [...list, item];
                setList(newList);
                setItem('');
            }}>
                Add
            </button>

            <div>
                <ul>
                    {list.map((item,i) => (
                        <li key={i}>{item} <button onClick={()=>deleteItem(i)}>X</button></li>
                    ))}
                </ul>
            </div>

            <div>
                Count: {count}<br/>
                <input type="button" onClick={()=>setCount(prevCount=>prevCount + 1)} value="Increment" />
                <input type="button" onClick={()=>setCount(prevCount=>prevCount - 1)} value="Decrement" />
                <input type="button" onClick={()=>setCount(0)} value="Reset" />
            </div>

            <div>
                First Name: {name.firstName} <br/>
                Last Name: {name.lastName}<br/>

                <div>
                    <input type="text" onChange={(e)=>setName({...name, firstName: e.target.value})} placeholder="First Name" />
                    <input type="text" onChange={(e)=>setName({...name, lastName: e.target.value})} placeholder="Last Name" />

                </div>

                
                
            </div>
        </div>
    )
}

export default SchedulingApp;