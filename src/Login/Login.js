import React, { Component } from 'react';
// import './App.css';

class Login extends Component {

    checkLoginState (response) {
        if (response.authResponse) {
          this.responseApi(response.authResponse);
        } else {
          if (this.props.responseHandler) {
            this.props.responseHandler({ status: response.status });
          }
        }
      };

  render() {
    return (
        <div className="fb-login-button" scope="public_profile user_friends" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="true" data-auto-logout-link="true" data-use-continue-as="true"></div>
    );
  }
}

export default Login;
