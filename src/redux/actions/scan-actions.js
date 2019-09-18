import AppConstants from '../../app/app.constants';

export function getScans(manga, chapter) {
  return {
    type: AppConstants.EVENTS.GET_SCANS_SAGA,
    payload: {manga, chapter},
  };
}

export function getScanInfos(url, index, total) {
  return {
    type: AppConstants.EVENTS.GET_SCAN_INFOS_SAGA,
    payload: {url, index, total},
  };
}

export function updateZoom(zoom) {
  return {
    type: AppConstants.EVENTS.UPDATE_ZOOM_REDUX,
    payload: zoom,
  };
}
