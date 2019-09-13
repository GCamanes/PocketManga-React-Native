import AppConstants from '../../app/app.constants';

export function initLoginPage(callback) {
  return {type: AppConstants.EVENTS.INIT_LOGIN_PAGE_SAGA, payload: callback};
}

export function login(loginData) {
  return {type: AppConstants.EVENTS.LOGIN_SAGA, payload: loginData};
}

export function logout() {
  return {type: AppConstants.EVENTS.LOGOUT_SAGA};
}
