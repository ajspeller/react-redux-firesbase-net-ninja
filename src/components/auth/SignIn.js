import React, { Component } from 'react';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state);
  }

  changeHandler(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  render() {
    return (
      <div className='container'>
        <form className='white' onSubmit={this.submitHandler}>
          <h5 className='grey-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              onChange={this.changeHandler}
              value={this.state.email}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              onChange={this.changeHandler}
              value={this.state.password}
            />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Login</button>
          </div>
        </form>
      </div>
    );
  }
}
