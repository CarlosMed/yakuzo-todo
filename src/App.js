import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import AuthHome from './components/ProtectedHome/AuthHome';
import PublicHome from './components/PublicHome/PublicHome';
import { AuthContext, UserContext } from './utils/AuthContext';

const App = props => {
  return (
    <AuthContext>
      <Router>
        <main className="App">
          <UserContext.Consumer>
            {context => {
              return console.log(context);
            }}
          </UserContext.Consumer>
          <Route exact path="/login" component={PublicHome} />
          <Route exact path="/" component={AuthHome} />
          <Route exact path="/add" component={AddTodo} />
        </main>
      </Router>
    </AuthContext>
  );
};

export default App;
