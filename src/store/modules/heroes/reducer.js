export default function heroes(state = [], action) {
  switch (action.type) {
    case 'SEARCH_SUCCESS':
      return action.data;
    case 'HERO_SUCCESS':
      return {
        ...state,
        hero: action.data,
      };
    default:
      return state;
  }
}
