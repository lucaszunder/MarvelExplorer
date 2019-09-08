const SERIES_REQUEST = 'SERIES_REQUEST';
const SERIES_SUCCESS = 'SERIES_SUCCESS';
export function seriesRequest(id, steps) {
  return {
    type: SERIES_REQUEST,
    id,
    steps,
  };
}

export function seriesSuccess(data) {
  return {
    type: SERIES_SUCCESS,
    data,
  };
}
