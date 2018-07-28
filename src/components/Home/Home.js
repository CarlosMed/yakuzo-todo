import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { TodoList } from './TodoList/TodoList';
import { Footer } from '../Footer/Footer';
import db from '../../helpers/db';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      message: 'You have no todos. Lets add one or some.'
    };
  }

  componentDidMount(e) {
    // Component is mounted check. Read the comment on componentWillUnmount
    this._isMounted = true;

    db.collection('todos').onSnapshot(querySnapshot => {
      // Grab querySnapshot when the document changes
      const snapshotChanges = querySnapshot.docChanges();

      // Loops through the querySanpshot
      snapshotChanges.forEach(changes => {
        const { type } = changes;

        // Checks to see if _isMounted is set to true before fetching or deleting
        if (this._isMounted && type === 'added') {
          this.getDoc(changes);
        } else if (this._isMounted && type === 'removed') {
          const deletedDocId = changes.doc.id;
          return this.deleteSelected(deletedDocId);
        }
      });
    });
  }

  componentWillUnmount() {
    /* When the component unMounts it sets this._isMounted to false to
     * reduce the possability of calling setState on an unMounted
     * compnent. Please reveiew this issue here:
     * https://youtu.be/8BNdxFzMeVg
    */
    this._isMounted = false;
  }

  getDoc(changes) {
    // Grabs the initial todo - with mutation
    const todos = this.state.todos;
    const id = changes.doc.id;
    const { completed, item } = changes.doc.data();

    // Pushes the deconstructed data ex. id, data, item
    todos.push({
      id,
      completed,
      item
    });

    // Sets the state for todos
    this.setState({
      todos
    });
  }

  deleteSelected(docId) {
    const { todos } = this.state;

    // convert todos from into a new filtered array
    const filteredTodos = todos.filter(
      element => docId !== element.id && element
    );

    // updates todos state with filtered array - with mutation
    this.setState({
      todos: filteredTodos
    });
  }

  render() {
    const { todos, message } = this.state;
    return (
      <section>
        <Header amount={todos.length} />
        <TodoList todos={todos} message={message} />
        <Footer />
      </section>
    );
  }
}

export default Home;
