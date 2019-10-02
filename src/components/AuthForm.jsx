import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import './AuthForm.css';
import { required, minLength } from '../validators';

// https://github.com/erikras/redux-form/issues/2629#issuecomment-423811863
const validatePass = [required, minLength(6)];

const renderField = ({
  intl,
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <label className="form__line">
    <span className="form__label">
      <FormattedMessage
        id={label}
      />
    </span>
    <input {...input} className="form__input" type={type} />
    <div className="form__err">
      { touched && error && <span>{intl.formatMessage(error.descriptor, error.data)}</span> }
    </div>
  </label>
);

const internatiolizedRenderField = injectIntl(renderField);

function AuthForm(props) {
  const { handleSubmit, isFetching } = props;
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
        />
        <Field
          name="pass"
          type="password"
          component={internatiolizedRenderField}
          label="label.pass"
          validate={validatePass}
          value="123456"
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
        <FormattedMessage id="msg.authorized">
          
          </FormattedMessage>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.app.isFetching,
    isAuth: state.app.isAuth,
    errMsg: state.app.errMsg,
  };
}

const Connected = connect(mapStateToProps)(AuthForm);

const ConnectedAuthForm = reduxForm({
  form: 'AuthForm'
})(Connected);

export default ConnectedAuthForm;

