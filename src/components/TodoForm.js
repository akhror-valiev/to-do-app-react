/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="todo-input" placeholder="Write your task here" />
      <button type="submit" className="todo-button">Add</button>
    </form>
  );
};

export default TodoForm;
