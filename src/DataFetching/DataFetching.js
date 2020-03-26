import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);
    useEffect( () => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{setPost(res.data)})
        .catch(err => console.log(err))
    }, [idFromButtonClick]);

    return (
        <div>
            <h1>Data Fetching</h1>
            <h3>Posts according to UserID</h3>
            <input type="number" onChange={(e)=>setId(e.target.value)} value={id} />
            <button onClick={()=>setIdFromButtonClick(id)}>Fetch Data</button>
            <div>{post.title}</div>
            <h3>All Posts</h3>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching;