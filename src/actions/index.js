import { newWiki } from '../database';

export const addWiki = wiki => async dispatch => {
  newWiki.push().set(wiki);
}