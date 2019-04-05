import React from 'react';

const UsernameSignup = ({ signupEmail, password, handleSubmit, handleChange }) => (
  <form className="col s12 signup" onSubmit={e => handleSubmit(e, 'signup')}>
    <div className="row">
      <div className="input-field col s12">
        <input
          id="email"
          type="email"
          name="email"
          className="validate"
          value={signupEmail}
          onChange={e => handleChange(e)}
        />
        <label htmlFor="email">Email</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input
          id="password"
          type="password"
          name="password"
          className="validate"
          value={password}
          onChange={e => handleChange(e)}
        />
        <label htmlFor="password">Password</label>
      </div>
    </div>
    <button type="submit" className="waves-effect waves-light btn col m12">
      Signup
    </button>
  </form>
);

export default UsernameSignup;
