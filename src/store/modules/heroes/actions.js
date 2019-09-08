const SEARCH_REQUEST = 'SEARCH_REQUEST';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

const HERO_REQUEST = 'HERO_REQUEST';
const HERO_SUCCESS = 'HERO_SUCCESS';

export function heroRequest(id) {
  return {
    type: HERO_REQUEST,
    id,
  };
}
export function heroSuccess(data) {
  return {
    type: HERO_SUCCESS,
    data,
  };
}

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
