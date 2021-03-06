import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import './AuthForm.css';
import { required, minLength } from '@/validators';
import field from '@/components/AuthFormField';

// https://github.com/erikras/redux-form/issues/2629#issuecomment-423811863
const validatePass = [required, minLength(6)];


const internatiolizedRenderField = injectIntl(field);

function AuthForm(props) {
  const { handleSubmit, handleInputChange, isFetching } = props;
  if (!props.isAuth) {
    return (
      <form
        className={'form' + (isFetching ? ' form_fetching' : '')}
        onSubmit={handleSubmit}
      >
        <Field
          name="email"
          type="text"
          component={internatiolizedRenderField}
          label="label.email"
          validate={required}
          onChange={handleInputChange}
        />
        <Field
          name="pass"
          type="password"
          component={internatiolizedRenderField}
          label="label.pass"
          validate={validatePass}
          onChange={handleInputChange}
        />
        <div className="form__line">
          <button
            type="submit"
            className={'form__btn' + (isFetching ? ' form__btn_fetching' : '')}
          >
            <FormattedMessage
              id="button.submit"
            />
          </button>
        </div>
        <div className="form__line">
          {
            props.errMsg && (
              <div className="form__error-msg">
                <FormattedMessage id={props.errMsg} />
              </div>
            )
          }
        </div>
      </form>
    );
  } else {
    return (
      <div className="success-msg">
        <FormattedMessage id="msg.authorized" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.login.isFetching,
    isAuth: state.login.isAuth,
    errMsg: state.login.errMsg,
  };
}

const Connected = connect(mapStateToProps)(AuthForm);

const ConnectedAuthForm = reduxForm({
  form: 'AuthForm'
})(Connected);

export default ConnectedAuthForm;

