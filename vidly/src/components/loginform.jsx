import React, { Component } from "react";
import Input from './common/input';

class Loginform extends Component {
  state = {
    account : { username:'', password:'' },
    errors : {}
  };
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if(account.username.trim() === '')
      errors.username = 'Username is required';
    if(account.password.trim() === '')
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
    const account = {...this.state.account};
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      account
    })
  }

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input label='Username' onChange={this.handleChange} value={account.username} type='text' name='username' errors={errors.username}/>
          <Input label='Password' onChange={this.handleChange} value={account.password} type='password' name='password' errors={errors.password}/>
          <button type="submit" className="btn btn-primary" disabled={this.validate()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Loginform;
