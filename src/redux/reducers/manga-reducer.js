import AppConstants from '../../app/app.constants';

const initialState = {
  mangas: [],
};

const mangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.EVENTS.SET_MANGAS_REDUX:
      return {
        ...state,
        mangas: action.payload,
      };
    default:
      return state;
  }
};

export default mangaReducer;
