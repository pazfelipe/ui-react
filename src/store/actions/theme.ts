import { ActionReducer } from './../../types/ActionReducer';
const INITIAL_STATE = {
  dark: localStorage.getItem('theme') === 'dark',
};

const themeStorage = (state: { dark: boolean; }) => {
  const st = {
    ...state,
    dark: !state.dark,
  };
  localStorage.setItem('theme', st.dark ? 'dark' : 'light');
  return st;
};

const themeReducer = (state = INITIAL_STATE, action: ActionReducer) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return themeStorage(state);
    default:
      return state;
  }
};

export default themeReducer;