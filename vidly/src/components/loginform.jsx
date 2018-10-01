import React, { Component } from "react";
import Input from './common/input';
import Form from '../components/common/form';

class Loginform extends Component {
  state = {
    data : { username:'', password:'' },
    errors : {}
  };
  validate = () => {
    const errors = {};
    const { data } = this.state;
    if(data.username.trim() === '')
      errors.username = 'Username is required';
    if(data.password.trim() === '')
      errors.password = 'Password is required';
    return (Object.keys(errors).length > 0) ? errors : null
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({
      errors: errors || {}
    })
    if(errors) return
    
  };

  handleChange = (e) => {
    const data = {...this.state.data};
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      data
    })
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input label='Username' onChange={this.handleChange} value={data.username} type='text' name='username' errors={errors.username}/>
          <Input label='Password' onChange={this.handleChange} value={data.password} type='password' name='password' errors={errors.password}/>
          <button type="submit" className="btn btn-primary" disabled={this.validate()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Loginform;
