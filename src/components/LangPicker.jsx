import React from 'react';
import { connect } from 'react-redux';
import { setLocale } from '../actions';
import './LangPicker.css';

const langs = [
  {
    code: 'en',
    text: 'English',
  },
  {
    code: 'ru',
    text: 'Русский',
  },
];

const LangPicker = props => {

  return (
    <div className="lang-picker">
      {
        langs.map(({code, text}) => {
          return (
            <label className="lang-picker__item" key={code}>
              <input
                type="radio"
                name="lang-picker"
                value={code}
                defaultChecked={props.locale === code}
                onClick={() => {props.dispatch(setLocale(code))}}
              />
              { text }
            </label>
          );
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {locale: state.app.locale}
}

const ConnectedLangPicker = connect(mapStateToProps)(LangPicker);

export default ConnectedLangPicker;
