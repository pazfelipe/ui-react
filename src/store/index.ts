import { combineReducers } from 'redux';
import drawerReducer from './actions/drawer';
import themeReducer from './actions/theme';

const combinedReducers = combineReducers({
  theme: themeReducer,
  drawer: drawerReducer
});

export default combinedReducers;