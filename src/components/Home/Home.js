import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { TodoList } from "./TodoList/TodoList";
import { Footer } from '../Footer/Footer';
import db from '../../helpers/db';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    db.collection('todos')
      .get()
      .then(querySnapshot =>
        // Loops through the querySanpshot
        querySnapshot.forEach(doc => {
          // Grabs the initial todo - with mutation
          const todos = this.state.todos;
          const id = doc.id;
          const { completed, item } = doc.data();

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
        })
      );
  }

  render() {
    const { todos } = this.state;
    return (
      <section className="container">
        <Header amount={todos.length} />
        <TodoList todos={todos} />
        <Footer />
      </section>
    );
  }
}

export default Home;
