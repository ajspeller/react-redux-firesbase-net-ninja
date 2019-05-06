import React, { Component } from 'react';

export default class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
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
          <h5 className='grey-text text-darken-3'>Create new project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input
              id='title'
              type='text'
              onChange={this.changeHandler}
              value={this.state.title}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Project Content</label>
            <textarea
              className='materialize-textarea'
              id='content'
              onChange={this.changeHandler}
            />
          </div>

          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Create</button>
          </div>
        </form>
      </div>
    );
  }
}
