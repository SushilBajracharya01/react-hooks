import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError('');
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError('Some Thing went wrong');
      });
  }, []);

  return (
    <div>
      {loading ? 'Loading...' : post.title}
      {error}
    </div>
  );
}

export default DataFetching;
