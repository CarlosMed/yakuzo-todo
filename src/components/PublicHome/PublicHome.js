import M from 'materialize-css';
import React, { Component } from 'react';
import { auth, googleProvider } from '../../utils/firebase';
import './PublicHome.css';
import UsernameLogin from './UsernameLogin';
import UsernameSignup from './UsernameSignup';

export default class PublicHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      user: null,
    };

    this.loginModal = React.createRef();
  }
  // initialize modal
  componentDidMount = () => M.Modal.init(this.loginModal.current);

  // user Handler
  userHandler = user => {
    this.setState(
      {
        user,
      },
      () => {
        console.log(user);
        M.toast({
          html: 'Successfully SignedUp',
          classes: 'green lighten-1 white-text',
        });
      }
    );
  };

  // error handler
  errHandler = err =>
    M.toast({ html: err.message, classes: 'red lighten-1 white-text' });

  // handle change when typing
  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  // handle submit of signup and login
  handleSubmit = (e, type) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (type === 'signup') {
      return auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          this.userHandler(user);
        })
        .catch(err => this.errHandler(err));
    }

    return auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        this.userHandler(user);
      })
      .catch(err => this.errHandler(err));
  };

  // handle Google auth login
  handleGoogleAuth = () =>
    auth
      .signInWithPopup(googleProvider)
      .then(({ user }) => this.userHandler(user))
      .catch(err => this.errHandler(err));

  render() {
    const { email, password } = this.state;

    return (
      <div className="container auth valign-wrapper">
        <div className="row center-align auth-wrapper s12 m12">
          <div className="col s12 m6">
            <div className="card-panel grey lighten-5">
              <div className="auth-container signup">
                <h3>Signup</h3>
                <UsernameSignup
                  email={email}
                  password={password}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card-panel grey lighten-5">
              <div className="auth-container login">
                <h3>Login</h3>
                <button
                  data-target="loginModal"
                  className="waves-effect waves-light btn modal-trigger col m12">
                  Email Login
                </button>
                <button
                  className="waves-effect waves-light btn col m12"
                  onClick={this.handleGoogleAuth}>
                  Continue with Google
                </button>
                <button className="waves-effect waves-light btn col m12">
                  Continue with Github
                </button>
              </div>
            </div>
          </div>
        </div>
        <UsernameLogin
          email={email}
          password={password}
          setRef={this.loginModal}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
