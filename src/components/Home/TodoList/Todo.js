import React from 'react';
import db from '../../../helpers/db';

export const Todo = props => {
  const { item, completed, id } = props.todo;

  const handleClick = (action, e) => {
    const dataId = e.target.parentNode.parentNode.getAttribute('data-id');
    if (action === 'delete') {
      db.collection('todos')
        .doc(dataId)
        .delete();
    } else if (action === 'update') {
        db.collection('todos')
        .doc(dataId)
        .update({
          completed: !completed
      })
    }
  };

  return (
    <li className="row" data-id={id}>
      <span className={completed ? 'col s7 row crossed grey-text text-lighten-1' : 'col s7 row'}>
        {item}
      </span>
      <div className="col s5 center-align">
        <i className="material-icons">edit</i>
        <i
          className="material-icons"
          onClick={handleClick.bind(this, 'update')}>
          check
        </i>
        <i
          className="material-icons red-text"
          onClick={handleClick.bind(this, 'delete')}>
          clear
        </i>
      </div>
    </li>
  );
};
