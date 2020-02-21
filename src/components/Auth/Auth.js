import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer'


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

  handleRegister = () => {
    const { username, password } = this.state

    axios.post('/api/register', { username, password })
      .then(res => {
        this.props.getUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch(err => console.log(err))
  }

  handleLogin = () => {
    axios.post(`/api/login`, {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.props.getUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch(err => console.log(err))

  }


  render() {

    // console.log(this.state)
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
        <button onClick={this.handleLogin}>

          Login
          </button>
        <button
          onClick={this.handleRegister}>

          Register
          </button>
      </div>
    );
  }
}

export default connect(null, { getUser })(Auth);