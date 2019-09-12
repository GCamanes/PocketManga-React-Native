import AppConstants from '../../app/app.constants';

export function updateConnectivity(connectivity) {
  return { type: AppConstants.EVENTS.UPDATE_CONNECTIVITY, payload: connectivity };
}
