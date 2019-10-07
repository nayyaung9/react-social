import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

class Navbar extends React.Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div style={{ flexGrow: 1 }}> 
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <IconButton edge="start" style={{ marginRight: '20px' }} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              News
            </Typography>
            {
              user 
              ? <div>hello, {user.displayName}</div>
              : <p>Please sign in</p>
            }
            {
              user
              ? <Button color="primary" onClick={signOut}>Sign Out</Button>
              : <Button color="primary" onClick={signInWithGoogle}>Sign in with Google</Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Navbar);