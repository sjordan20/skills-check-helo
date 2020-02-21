import React, { Component } from 'react';

class Auth extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <input
          placeholder="Username"
          name="username"
          onChange={this.handleInput}
        />
        <input
          placeholder='Password'
          name='password'
          type='password'
          onChange={this.handleInput}
        />
        <button>Login</button>
        <button>Register</button>
      </div>
    );
  }
}

export default Auth;