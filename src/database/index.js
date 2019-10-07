import * as firebase from 'firebase';

const databaseRef = firebase.database().ref();

export const newWiki = databaseRef.child('wiki');