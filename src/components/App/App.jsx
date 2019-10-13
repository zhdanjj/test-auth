import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import AuthForm from '@/components/AuthForm';
import { authUser, setAuthError } from '@/redux/actions/login';
import LangPicker from '@/components/LangPicker';

class App extends React.Component {
  submit = values => {
    this.props.authUser(values.email, values.pass);
  }

  resetErrorAfterInputChange = () => {
    this.props.setAuthError('');
  }

  render() {
    return (
      <div className="app">
        <AuthForm
          onSubmit={this.submit}
          handleInputChange={this.resetErrorAfterInputChange}
        />
        <LangPicker />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.form.AuthForm
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (userEmail, userPass) => {
      dispatch(authUser(userEmail, userPass));
    },
    setAuthError: (error) => {
      dispatch(setAuthError(error));
    }
  }
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ConnectedApp;
