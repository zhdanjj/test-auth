import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import en from '../translations/en';
import ru from '../translations/ru';

const messages = {en, ru};

function mapStateToProps(state) {
  const lang = state.app.locale;
  return { locale: lang, messages: messages[lang] };
}

export default connect(mapStateToProps)(IntlProvider);
