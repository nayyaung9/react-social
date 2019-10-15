import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import * as actions from '../actions/';
import { connect } from 'react-redux';
import FileUploader from "react-firebase-file-uploader";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      image: null
    }
  }

  // handleChange = e => {
  //   if (e.target.files[0]) {
  //     const image = e.target.files[0];
  //     this.setState({image});
  //     console.log(this.state.image)
  //   }
  // };

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
      photo: '',
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
              value={this.state.title}
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
              value={this.state.content}
              defaultValue={this.state.content}
              onChange={event => {
                const { value } = event.target;
                this.setState({ content: value });
              }}
              required
            />
              {/* <input type="file" onChange={this.handleImage} />
             */}
             <FileUploader storageRef={firebase.storage().ref("images")} onUploadSuccess={this.handleImage} />
            <Button type="submit" variant="outlined" color="primary">Submit</Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default connect(null, actions)(Create);

// import React, { Component } from "react";
// import firebase from "firebase";
// import FileUploader from "react-firebase-file-uploader";
 
// class ProfilePage extends Component {
//   state = {
//     username: "",
//     avatar: "",
//     isUploading: false,
//     progress: 0,
//     avatarURL: ""
//   };
 
//   handleChangeUsername = event =>
//     this.setState({ username: event.target.value });
//   handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
//   handleProgress = progress => this.setState({ progress });
//   handleUploadError = error => {
//     this.setState({ isUploading: false });
//     console.error(error);
//   };
//   handleUploadSuccess = filename => {
//     this.setState({ avatar: filename, progress: 100, isUploading: false });
//     firebase
//       .storage()
//       .ref("images")
//       .child(filename)
//       .getDownloadURL()
//       .then(url => this.setState({ avatarURL: url }));
//   };
 
//   render() {
//     return (
//       <div style={{ marginTop: 120 }}>
//         <form>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={this.state.username}
//             name="username"
//             onChange={this.handleChangeUsername}
//           />
//           <label>Avatar:</label>
//           {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
//           {this.state.avatarURL && <img src={this.state.avatarURL} />}
//           <FileUploader
//             accept="image/*"
//             name="avatar"
//             randomizeFilename
//             storageRef={firebase.storage().ref("images")}
//             onUploadStart={this.handleUploadStart}
//             onUploadError={this.handleUploadError}
//             onUploadSuccess={this.handleUploadSuccess}
//             onProgress={this.handleProgress}
//           />
//         </form>
//       </div>
//     );
//   }
// }
 
// export default ProfilePage;