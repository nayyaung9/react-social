import * as firebase from 'firebase';
import config from '../firebase';

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export const newWiki = databaseRef.child('wiki');