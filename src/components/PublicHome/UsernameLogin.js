import React, { Component } from 'react';

export class UsernameLogin extends Component {
  render({ loginEmail, password, setRef, handleSubmit, handleChange } = this.props) {
    return (
      <div id="loginModal" className="modal" ref={setRef}>
        <form className="col s12" onSubmit={e => handleSubmit(e, 'login')}>
          <div className="modal-content">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="loginEmail"
                  type="email"
                  name="email"
                  className="validate"
                  value={loginEmail}
                  onChange={e => handleChange(e)}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="loginPassword"
                  type="password"
                  name="password"
                  className="validate"
                  value={password}
                  onChange={e => handleChange(e)}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="modal-close waves-effect waves-green btn-flat">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UsernameLogin;
