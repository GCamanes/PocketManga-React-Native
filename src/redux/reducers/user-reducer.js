import AppConstants from '../../app/app.constants';

const initialState = {
  connectedUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.EVENTS.LOGOUT_REDUX: {
      return {
        ...initialState,
      };
    }
    case AppConstants.EVENTS.LOGIN_REDUX: {
      return {
        ...state,
        connectedUser: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
