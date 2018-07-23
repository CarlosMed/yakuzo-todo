import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TodoList from './components/Home/Home';
import AddTodo from './components/AddTodo/AddTodo';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App">
          <Route exact path="/" component={TodoList} />
          <Route path="/add" component={AddTodo} />
        </main>
      </Router>
    );
  }
}

export default App;
