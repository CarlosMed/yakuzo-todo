import M from 'materialize-css';
import React, { Component, createContext } from 'react';
import { Redirect } from 'react-router-dom';


const { Provider, Consumer } = createContext();
class AuthContext extends Component {
  state = {
    user: null,
  };

  // user Handler
  userHandler = user =>
    this.setState({ user }, () =>
      M.toast({
        html: 'Successfully Signed Up',
        classes: 'green lighten-1 white-text',
        completeCallback: () => <Redirect to="/" />,
      })
    );

  render() {
    console.log('object');
    return (
      <Provider value={{ state: this.state, userHandler: this.userHandler }}>
        {this.props.children}
      </Provider>
    );
  }
}

const AuthConsumer = Consumer;

export { AuthContext, AuthConsumer };

