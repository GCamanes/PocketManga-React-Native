import AppConstants from '../../app/app.constants';

const initialState = {
  connectivity: false,
  loading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.EVENTS.SET_LOADER:
      return {
        ...state,
        [action.payload.scene]: {
          loading: action.payload.loading,
        },
      };
    case AppConstants.EVENTS.UPDATE_CONNECTIVITY:
      return {
        ...state,
        connectivity: action.payload,
      };
    case AppConstants.EVENTS.CLEAR_APP_REDUCER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default appReducer;
