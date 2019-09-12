/**
 * Combine All Reducers
 */
import { combineReducers } from 'redux';
import app from './app-reducer';
import router from './router-reducer';
import user from './user-reducer';

// Combine all
const appReducer = combineReducers({
  app,
  router,
  user,
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
