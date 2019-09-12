import AppConstants from '../../app/app.constants';

export function login(loginData) {
  return { type: AppConstants.EVENTS.LOGIN_SAGA, payload: loginData };
}
