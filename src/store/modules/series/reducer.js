export default function heroes(state = [], action) {
  switch (action.type) {
    case 'SERIES_SUCCESS':
      return action.data;
    default:
      return state;
  }
}
