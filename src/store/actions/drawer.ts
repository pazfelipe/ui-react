import { ActionReducer } from './../../types/ActionReducer';
const INITIAL_STATE = {
  close: false,
};

const drawerReducer = (state = INITIAL_STATE, action: ActionReducer) => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return {
        ...state,
        close: false,
      };
    case 'CLOSE_DRAWER':
      return {
        ...state,
        close: true,
      };
    default:
      return state;
  }
};

export default drawerReducer;