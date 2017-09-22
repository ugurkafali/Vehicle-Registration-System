import React, { Component, constructor } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  //When user clicks 'Logout' button, this function logout the user.
  handleLogout(event){
    Meteor.logout(function(err){
      if(err) {
        window.alert("You couldn't Logout.Error was : " + err); // Informs the user.
      } else {
        FlowRouter.go('/login'); // This redirects the user back to the login screen.
      }
    });
  }

  //Only Bootsrap is used.
  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">Welcome</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/add">Add a vehicle</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li onClick={() => this.handleLogout()}><a href="/">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
