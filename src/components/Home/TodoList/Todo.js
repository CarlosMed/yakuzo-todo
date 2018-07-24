import React from 'react';
import db from '../../../helpers/db'

export const Todo = (props) => {
  const { item, completed, id } = props.todo;

  function handleClick ( e ) {
    const dataId = e.target.getAttribute('data-id');
    db.collection('todos').doc(dataId).delete()
  }

  return (
    <li className={ completed ? "crossed" : ''} onClick={handleClick} data-id={id} >
      {item}
    </li>
  );
};
