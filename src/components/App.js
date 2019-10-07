import React from 'react'

// Auth
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div>
        {
          user 
          ? <div>hello, {user.displayName}</div>
          : <p>Please sign in</p>
        }
        {
          user
          ? <button onClick={signOut}>Sign Out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);