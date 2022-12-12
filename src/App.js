import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    const todo = { id, text, completed: false };
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const updateTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const completeTodo = (id) => {
    const updateCompleteTodos = todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateCompleteTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo Task List</h1>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator" />
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))}
    </div>
  );
}

export default App;
