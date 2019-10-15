import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

// Auth
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';

// Styles
import '../style.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Navbar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    console.log(firebase.auth());
    return (
      <div style={{ flexGrow: 1 }}> 
        <AppBar position="fixed" color="inherit">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h4" style={{ flexGrow: 1 }} className="app_name">
                Nay Yaung
              </Typography>
              {
                user 
                ? (
                  <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                      <img src={user.photoURL} alt={user.displayName} className="avatar__profile"/>
                      <Typography variant="subtitle2" className="auth_userName">
                        {user.displayName}
                      </Typography>
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      keepMounted
                      open={Boolean(this.state.anchorEl)}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleClose}>
                        Profile
                      </MenuItem>
                      <MenuItem onClick={this.handleClose}>
                        <Link to='/wiki/new'>
                          My account
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={signOut}>
                        Sign Out
                      </MenuItem>
                    </Menu>
                  </div>
                )
                : <Button variant="contained" color="primary" onClick={signInWithGoogle}>Sign in with Google</Button>
              }
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Navbar);