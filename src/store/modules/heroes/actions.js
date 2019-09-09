const SEARCH_REQUEST = 'SEARCH_REQUEST';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

export function searchRequest(query, steps) {
  return {
    type: SEARCH_REQUEST,
    query,
    steps,
  };
}

export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    data,
  };
}
