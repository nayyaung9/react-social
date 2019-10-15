import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as actions from '../actions/';
import { connect } from 'react-redux';

import firebase from 'firebase';
import FileUploader from "react-firebase-file-uploader";

class Create extends React.Component {

  state = {
    title: '',
    content: '',
    image: null
  }

  handleImage = filename => {
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ image: url }));
  }

  onHandleSubmit = event => {
    event.preventDefault();
    const { addWiki } = this.props;

    addWiki({title: this.state.title, content: this.state.content, photo: this.state.image });

    this.setState({
      title: '',
      content: '',
    })
  }

  render() {
    return (
      <div style={{ marginTop: '70px' }}>
        <Container fixed>
          <form onSubmit={this.onHandleSubmit}>
            <TextField
              id="outlined-email-input"
              label="Title"
              type="text"
              name="title"
              autoComplete="off"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              defaultValue={this.state.title}
              onChange={event => {
                const { value } = event.target;
                this.setState({ title: value });
              }}
              required
            />
            <TextField
              id="outlined-password-input"
              label="Body Content"
              type="text"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              defaultValue={this.state.content}
              onChange={event => {
                const { value } = event.target;
                this.setState({ content: value });
              }}
              required
            />
              <FileUploader 
                storageRef={firebase.storage().ref("images")} 
                onUploadSuccess={this.handleImage} 
              />
            <Button type="submit" variant="outlined" color="primary">Submit</Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default connect(null, actions)(Create);
