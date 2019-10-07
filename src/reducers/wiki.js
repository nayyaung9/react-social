import { ADD_WIKI } from '../actions/types';

export default (state={}, action) => {
  switch(action.type) {
    case ADD_WIKI:
      return action.payload;
    default:
      return state;
  }
}