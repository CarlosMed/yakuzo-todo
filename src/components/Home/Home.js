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
    db.collection('todos').onSnapshot(querySnapshot => {
      const snapshotChanges = querySnapshot.docChanges();

      // Loops through the querySanpshot
      snapshotChanges.forEach(changes => {
        const { type } = changes;

        if (type === 'added') {
          this.getDoc(changes);
        } else if (type === 'removed') {
          const deletedDocId = changes.doc.id;

          return this.deleteSelected(deletedDocId);
        }
      });
    });
  }

  componentWillUnmount() {
    if (this.state.todos.length === 0) {
      this.setState({
        message: 'You have no todos try adding some.'
      });
    }
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
    const filteredTodos = todos.filter(element => docId !== element.id && element);

    // updates todos state with filtered array - with mutation
    this.setState({
      todos: filteredTodos
    });
  }

  render() {
    const { todos, message } = this.state;
    return (
      <section className="container">
        <Header amount={todos.length} />
        <TodoList todos={todos} message={message} />
        <Footer />
      </section>
    );
  }
}

export default Home;
