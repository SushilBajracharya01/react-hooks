import React, { useState } from 'react';
import './TodoApp.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted? "line-through": ""}}>
      {todo.text} 
      <input type="button" value="complete" className="btn" onClick={() => completeTodo(index)} /> 
      <input type="button" value="X" onClick={() => removeTodo(index)} className="btn" />
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add Todo" onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function TodoApp() {

  const [todos, setTodos] = useState([
    {
      text: "Learn react",
      isCompleted: false
    },
    {
      text: "Learn react native",
      isCompleted: false
    },
    {
      text: "built cool app",
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <div className="todo-list">
        {
          todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))
        }
        <TodoForm addTodo={addTodo} />
      </div>

    </div>
  )
}

export default TodoApp;