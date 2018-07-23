import React from 'react';

export const Todo = (props) => {
  const { item, completed } = props.todo;
  return (
    <li className={ completed ? "crossed" : ''}>
      {item}
    </li>
  );
};
