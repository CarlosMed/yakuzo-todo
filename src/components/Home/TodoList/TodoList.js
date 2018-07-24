import React from 'react';
import { Loader } from './Loader';
import { Todo } from './Todo';

export const TodoList = props => {
  const { todos, message } = props;

  return (
    <div>
      <h2>
        <b>Today</b>
      </h2>
      {message && <p>{message}</p>}
      <ul>
        {todos.length === 0 ? (
          <Loader />
        ) : (
          todos.map(todo => <Todo todo={todo} key={todo.id} />)
        )}
      </ul>
    </div>
  );
};
