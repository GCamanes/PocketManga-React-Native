import AppConstants from '../../app/app.constants';

const initialState = {
  chapters: [],
};

const chapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.EVENTS.SET_CHAPTERS_REDUX:
      return {
        ...state,
        chapters: action.payload,
      };
    case AppConstants.EVENTS.CHAPTER_MARKED_AS_READ: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default chapterReducer;
