import AppConstants from '../../app/app.constants';

export function getMangas() {
  return {type: AppConstants.EVENTS.GET_MANGAS_SAGA};
}
