import { newWiki } from '../database';
import { FETCH_WIKI } from './types';

export const addWiki = wiki => async dispatch => {
  newWiki.push().set(wiki);
}

export const fetchWiki = () => async dispatch => {
  newWiki.on('value', snapshot => {
    dispatch({
      type: FETCH_WIKI,
      payload: snapshot.val()
    });
  });
}