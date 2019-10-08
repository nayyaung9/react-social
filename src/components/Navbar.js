import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
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
    return (
      <div style={{ flexGrow: 1 }}> 
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <IconButton edge="start" style={{ marginRight: '20px' }} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Social App
            </Typography>
            {
              user 
              ? (
                <div>
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <img src={user.photoURL} alt={user.displayName} className="avatar__profile"/>
                    <Typography variant="subtitle2">
                      <Box fontWeight={500}>
                        {user.displayName}
                      </Box>
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
        </AppBar>
      </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Navbar);