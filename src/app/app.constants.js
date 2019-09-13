const AppConstants = {
  EVENTS: {
    // login
    INIT_LOGIN_PAGE_SAGA: 'INIT_LOGIN_PAGE_SAGA',
    LOGIN_REDUX: 'LOGIN_REDUX',
    LOGIN_SAGA: 'LOGIN_SAGA',
    LOGOUT_REDUX: 'LOGOUT_REDUX',
    LOGOUT_SAGA: 'LOGOUT_SAGA',
    // router
    RESET_ROUTER_STATE: 'RESET_ROUTER_STATE',
    SET_LOADER: 'SET_LOADER',
    // connectivity
    UPDATE_CONNECTIVITY: 'UPDATE_CONNECTIVITY',
    // manga
    GET_MANGAS_SAGA: 'GET_MANGAS_SAGA',
    SET_MANGAS_REDUX: 'GET_MANGAS_REDUX',
  },
  FIRESTORE: {
    COLLECTION_MANGAS_LIST: 'mangasList',
    DOC_MANGAS: 'mangas',
  },
  ROUTES: {
    HOME: 'home',
    LOADING: 'loading',
    USER_LOGIN: 'user_login',
  },
};

export default AppConstants;
