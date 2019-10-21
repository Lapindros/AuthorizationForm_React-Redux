import React from 'react';
import {connect} from 'react-redux';
import PageConstants from '../../constants/pageConstants';
import RegistrationForm from "./registrationForm";
import LoginForm from "./loginForm";

class LoginPage extends React.Component {

  render() {
    switch (this.props.page) {
      case (PageConstants.PageLogin):
        return (<LoginForm/>);
      case (PageConstants.PageRegistration):
        return (<RegistrationForm/>);
    }
  }
}


const mapStateToProps = state => {
  return {
    page: state.app.page,
  }
};

export default connect(mapStateToProps)(LoginPage);