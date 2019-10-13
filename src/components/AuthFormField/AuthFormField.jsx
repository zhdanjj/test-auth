import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const field = ({
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

export default injectIntl(field);
