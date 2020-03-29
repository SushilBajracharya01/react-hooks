import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { loading: false, post: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { loading: false, post: {}, error: 'Some Thing went Wrong' };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => dispatch({ type: 'FETCH_SUCCESS', payload: res.data }))
      .catch((err) => dispatch({ type: 'FETCH_FAIL' }));
  }, []);

  return (
    <div>
      <h1>{state.loading ? 'Loading ...' : state.post.title}</h1>
      <h1>{state.error}</h1>
    </div>
  );
}

export default DataFetchingTwo;
