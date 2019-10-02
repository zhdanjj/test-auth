import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import AuthForm from './AuthForm';
import { authUser } from '../actions';
import LangPicker from './LangPicker';

class App extends React.Component {
  submit = values => {
    authUser(this.props.dispatch, values.email, values.pass);
  }

  render() {
    return (
      <div className="app">
        <AuthForm onSubmit={this.submit} />
        <LangPicker />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.form.AuthForm
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
