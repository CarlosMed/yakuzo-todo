import React from 'react';
import { Todo } from './Todo';

const TodoList = ({ todos, message })  => {
  return (
    <div className="container">
      <h2>
        <b>Today</b>
      </h2>
      {todos.length === 0 ? (
        <p className="grey-text">{message}</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
