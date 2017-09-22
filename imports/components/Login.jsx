import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login = this.login.bind(this);
  }

  updateUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  login() {
    //Checks whether fields are empty or not.
    if (this.state.username.toString().length !== 0 & this.state.password.toString().length !== 0) {
      //This function controls whether given username and password are in users collection and if it is it logs in the user if not gives error
      Meteor.loginWithPassword(this.state.username, this.state.password, (error) => {
        if (error) {
          window.alert("Wrong username or password!"); // Informs the user.
        } else {
          FlowRouter.go('/'); //if user logs in successfully, FlowRouter redirects him to the homepage
        }
      });
    } else {
      window.alert("Username or password is empty!"); // Informs the user.
    }
  }

  //Only Bootsrap is used.
  render() {
    return (
      <div className="loginContainer">
        <div style={{paddingTop: '100px'}} className='container'>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <h3>Vehicle Registration System</h3><hr/>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <label style={{margin: '5px'}}>Username:</label>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <input style={{margin: '5px'}} type="text" className="form-control span" value={this.state.username} onChange={this.updateUsername} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="col-md-4 col-md-offset-4">
              <label style={{margin: '5px'}}>Password:</label>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <input style={{margin: '5px'}} type='password' className="form-control" value={this.state.password} onChange={this.updatePassword} placeholder='Password' aria-label="Username" aria-describedby="basic-addon1" /><br/>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <button style={{margin: '5px'}} className="btn btn-primary btn-block" onClick={() => this.login()} type='submit'>Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
