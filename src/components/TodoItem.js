/* eslint-disable react/prop-types */
import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiCheckCircle } from 'react-icons/bi';

const TodoItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todo, removeTodo, completeTodo } = props;
  return (
  // eslint-disable-next-line react/prop-types
    <div className={todo.completed ? 'todo-row completed' : 'todo-row'}>
      {todo.text}
      <div className="iconsContainer">
        <RiCloseCircleLine style={{ marginRight: 5 }} className="icon" onClick={() => removeTodo(todo.id)} />
        <BiCheckCircle onClick={() => completeTodo(todo.id)} />
      </div>

    </div>
  );
};

export default TodoItem;
