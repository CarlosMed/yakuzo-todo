import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import db from '../../helpers/db';

import './AddTodo.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;

    this.setState({
      input: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { input } = this.state;
    const defaultTemplate  = {
      completed: false,
      item: input
    }

    db.collection('todos')
    .add(defaultTemplate)
    .then(() => this.setState({ input: '' }));
  }


  render() {
    const { input } = this.state.input;

    return (
      <section className="container" id="addTodo">
        <header>
          <Link to="/" className="black-text">
            <i className="material-icons small">arrow_back</i>
          </Link>
          <h2>
            <b>Add New Task</b>
          </h2>
        </header>
        <form className="center-align" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Add todo ex. Get milk"
            onChange={this.handleChange}
            required
          />
          <button
            className="btn btn-large waves-effect waves-light"
            type="submit">
            <i className="material-icons left">add</i> Add Now
          </button>
        </form>
      </section>
    );
  }
}

export default AddTodo;
