import React, { useEffect, useReducer, useState } from 'react';
import { db } from '../../utils/firebase';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css';
import TodoList from './TodoList/TodoList';

const AuthHome = () => {
  const [message] = useState(`You have no todos. Lets add some.`);
  const [todos, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'get':
        return [...state, action.todo];
      case 'delete':
        return state.filter(element => action.id !== element.id && element);
      case 'modified':
        return state.splice([action.oldIndex], 1, action.todo);
      default:
        return [];
    }
  }, []);

  useEffect(() => {
    // Component is mounted check. Read the comment on componentWillUnmount
    let isMounted = true;

    db.collection('todos').onSnapshot(async querySnapshot => {
      // Grab querySnapshot when the document changes
      const snapshotChanges = querySnapshot.docChanges();

      // Loops through the querySnapshot
      await snapshotChanges.forEach(({ type, doc, oldIndex, ...changes }) => {
        const id = doc.id;
        const { completed, item } = doc.data();

        // Checks to see if _isMounted is set to true before fetching or deleting
        if (isMounted && type === 'added') {
          dispatch({ type: 'get', todo: { id, completed, item } });
        } else if (isMounted && type === 'removed') {
          dispatch({ type: 'delete', id });
        } else if (isMounted && type === 'modified') {
          // updatedDoc(changes);
          dispatch({
            type: 'modified',
            oldIndex: oldIndex,
            todo: {
              id,
              completed,
              item,
            },
          });
        }
      });
    });

    return () => {
      /* When the component unMounts it sets _isMounted to false to
       * reduce the possibility of calling setState on an unMounted
       * component. Please review this issue here:
       * https://youtu.be/8BNdxFzMeVg
       */
      isMounted = false;
    };
  }, []);

  return (
    <section>
      <Header amount={todos.length} />
      <TodoList todos={todos} message={message} />
      <Footer />
    </section>
  );
};

export default AuthHome;
