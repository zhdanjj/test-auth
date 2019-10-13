import { SET_LOCALE } from '@/redux/actions/locale';

const initialState = {
  locale: 'en'
};

export function localeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale
      }

    default: return state;
  }
};

