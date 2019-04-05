import M from 'materialize-css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../utils/AuthContext';
import { auth, googleProvider } from '../../utils/firebase';
import './PublicHome.css';
import UsernameLogin from './UsernameLogin';
import UsernameSignup from './UsernameSignup';

const PublicHome = props => {
  const context = useContext(UserContext);
  const loginModal = useRef();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // initialize modal
  useEffect(() => {
    M.Modal.init(loginModal.current);
  });

  // error handler
  const errHandler = err =>
    M.toast({ html: err.message, classes: 'red lighten-1 white-text' });

  // handle change when typing
  const handleChange = ({ target: { name, value } }) =>
    setForm({ ...form, [name]: value });

  // handle submit of signup and login
  const handleSubmit = (e, type) => {
    e.preventDefault();

    const { email, password } = form;

    if (type === 'signup') {
      return auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => context.userHandler(user))
        .catch(err => errHandler(err));
    }

    return auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => context.userHandler(user))
      .catch(err => errHandler(err));
  };

  // handle Google auth login
  const handleGoogleAuth = () =>
    auth
      .signInWithPopup(googleProvider)
      .then(({ user }) => context.userHandler(user))
      .catch(err => errHandler(err));

  return (
    <div className="container auth valign-wrapper">
      <div className="user row center-align auth-wrapper s12 m12">
        <h2>
          {/* {context.state.user !== null && context.state.user.email} */}
        </h2>
      </div>
      <div className="row center-align auth-wrapper s12 m12">
        <div className="col s12 m6">
          <div className="card-panel grey lighten-5">
            <div className="auth-container signup">
              <h3>Signup</h3>
              <UsernameSignup
                signupEmail={form.email}
                password={form.password}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
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
                onClick={handleGoogleAuth}>
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
        loginEmail={form.email}
        password={form.password}
        setRef={loginModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default PublicHome;
