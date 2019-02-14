import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AuthHome from './components/ProtectedHome/AuthHome';
import PublicHome from './components/PublicHome/PublicHome';
import { AuthContext } from './utils/AuthContext';

class App extends Component {
  render() {
    return (
      <AuthContext>
        <Router>
          <main className="App">
            <Route exact path="/login" component={PublicHome} />
            <Route exact path="/" component={AuthHome} />
          </main>
        </Router>
      </AuthContext>
    );
  }
}

export default App;
