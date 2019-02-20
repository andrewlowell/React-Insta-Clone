import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginValue: ''
    }
  };

  signIn = e => {
    // sets a "user" item to localStorage for our HOC to check and
    // render the correct component
    e.preventDefault();
    localStorage.setItem('user', this.state.loginValue);
    this.setState({loggedIn: true, loginValue: ''});
    window.location.reload();
  }
  loginChange = e => {
    this.setState({loginValue: e.target.value});
  }

  render () {
    return (
      <div id="login">
        <input
          type="text"
          value={this.state.loginValue}
          onChange={this.loginChange}
        />
        <button onClick={this.signIn}>Sign in</button>
      </div>
    );
  }
}
 
export default Login;