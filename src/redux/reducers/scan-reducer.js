import AppConstants from '../../app/app.constants';

const initialState = {
  scans: [],
  scanInfos: null,
};

const scanReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.EVENTS.SET_SCANS_REDUX: {
      return {
        ...state,
        scans: action.payload,
      };
    }
    case AppConstants.EVENTS.SET_SCAN_INFOS_REDUX: {
      return {
        ...state,
        scanInfos: action.payload,
      };
    }
    case AppConstants.EVENTS.CLEAR_SCANS_REDUCER: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default scanReducer;
