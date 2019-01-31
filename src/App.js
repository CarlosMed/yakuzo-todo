import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/Home/Home';



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
