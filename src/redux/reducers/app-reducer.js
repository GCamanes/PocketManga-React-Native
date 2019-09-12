import AppConstants from '../../app/app.constants';

const initialState = {
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

    default:
      return state;
  }
};

export default appReducer;
