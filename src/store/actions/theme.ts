import { ActionReducer } from './../../types/ActionReducer';
const INITIAL_STATE = {
  dark: true,
};

const themeReducer = (state = INITIAL_STATE, action: ActionReducer) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        dark: !state.dark,
      };
    default:
      return state;
  }
};

export default themeReducer;