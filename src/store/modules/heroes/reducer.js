export default function heroes(state = [], action) {
  switch (action.type) {
    case 'SEARCH_SUCCESS':
      return action.data;
    default:
      return state;
  }
}
