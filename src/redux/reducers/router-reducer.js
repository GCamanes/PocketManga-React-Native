/**
 * Router Reducer
 */
import { ActionConst } from 'react-native-router-flux';
import AppConstants from '../../app/app.constants';

// Set initial state
const initialState = {
  scene: AppConstants.ROUTES.USER_LOGIN,
};

export default function routerReducer(state = initialState, action) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.routeName,
      };

    case AppConstants.EVENTS.RESET_ROUTER_STATE: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
