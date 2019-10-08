import { FETCH_WIKI } from '../actions/types';

export default (state={}, action) => {
  switch(action.type) {
    case FETCH_WIKI:
      return action.payload;
    default:
      return state;
  }
}